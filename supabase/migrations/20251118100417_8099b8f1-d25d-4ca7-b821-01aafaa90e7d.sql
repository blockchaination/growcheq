-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can view all demo bookings" ON public.demo_bookings;
DROP POLICY IF EXISTS "Authenticated users can update demo bookings" ON public.demo_bookings;

-- Create admin-only policies for viewing and updating demo bookings
CREATE POLICY "Only admins can view demo bookings"
ON public.demo_bookings
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update demo bookings"
ON public.demo_bookings
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
