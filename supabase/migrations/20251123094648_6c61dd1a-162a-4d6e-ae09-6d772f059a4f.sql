-- Update the leads table RLS policy to restrict updates to admins only
DROP POLICY IF EXISTS "Authenticated users can update leads" ON public.leads;

CREATE POLICY "Only admins can update leads"
ON public.leads
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role));