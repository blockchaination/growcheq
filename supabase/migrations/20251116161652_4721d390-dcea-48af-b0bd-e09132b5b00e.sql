-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Anyone can create demo bookings" ON public.demo_bookings;

-- Create a new policy that allows both anonymous and authenticated users to insert
CREATE POLICY "Anyone can create demo bookings"
  ON public.demo_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);