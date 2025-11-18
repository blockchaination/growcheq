-- Drop existing overly permissive policies on chat_conversations
DROP POLICY IF EXISTS "Authenticated users can view all conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Authenticated users can update conversations" ON public.chat_conversations;

-- Drop existing overly permissive policy on chat_messages
DROP POLICY IF EXISTS "Authenticated users can view all messages" ON public.chat_messages;

-- Create admin-only policies for chat_conversations
CREATE POLICY "Only admins can view chat conversations"
ON public.chat_conversations
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update chat conversations"
ON public.chat_conversations
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create admin-only policy for chat_messages
CREATE POLICY "Only admins can view chat messages"
ON public.chat_messages
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
