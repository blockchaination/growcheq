-- Create leads table for capturing customer inquiries
CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text,
  interest_level text NOT NULL,
  plan_name text,
  source_page text,
  status text DEFAULT 'new' NOT NULL
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create leads (public form submissions)
CREATE POLICY "Anyone can create leads"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admins can view leads
CREATE POLICY "Authenticated users can view leads"
  ON public.leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only authenticated admins can update leads
CREATE POLICY "Authenticated users can update leads"
  ON public.leads
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_interest_level ON public.leads(interest_level);