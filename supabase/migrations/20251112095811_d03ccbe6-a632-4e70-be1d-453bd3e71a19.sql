-- Create demo_bookings table
CREATE TABLE public.demo_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  scheduled_date DATE NOT NULL,
  scheduled_time TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  calendly_event_uri TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat_conversations table
CREATE TABLE public.chat_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'closed', 'archived')),
  lead_quality TEXT CHECK (lead_quality IN ('hot', 'warm', 'cold', 'unqualified'))
);

-- Create chat_messages table
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID NOT NULL REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'bot')),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX idx_demo_bookings_email ON public.demo_bookings(email);
CREATE INDEX idx_demo_bookings_status ON public.demo_bookings(status);
CREATE INDEX idx_demo_bookings_scheduled_date ON public.demo_bookings(scheduled_date);
CREATE INDEX idx_chat_conversations_session_id ON public.chat_conversations(session_id);
CREATE INDEX idx_chat_messages_conversation_id ON public.chat_messages(conversation_id);

-- Enable Row Level Security
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for demo_bookings (public can insert, authenticated can view all)
CREATE POLICY "Anyone can create demo bookings"
ON public.demo_bookings
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users can view all demo bookings"
ON public.demo_bookings
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update demo bookings"
ON public.demo_bookings
FOR UPDATE
TO authenticated
USING (true);

-- RLS Policies for chat_conversations (public can insert, authenticated can view all)
CREATE POLICY "Anyone can create chat conversations"
ON public.chat_conversations
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users can view all conversations"
ON public.chat_conversations
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update conversations"
ON public.chat_conversations
FOR UPDATE
TO authenticated
USING (true);

-- RLS Policies for chat_messages (public can insert, authenticated can view all)
CREATE POLICY "Anyone can create chat messages"
ON public.chat_messages
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users can view all messages"
ON public.chat_messages
FOR SELECT
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_demo_bookings_updated_at
BEFORE UPDATE ON public.demo_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_chat_conversations_updated_at
BEFORE UPDATE ON public.chat_conversations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();