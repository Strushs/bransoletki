-- Enable RLS on bracelets table and create policies for secure access
ALTER TABLE bracelets ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view bracelets (public showcase)
CREATE POLICY "Anyone can view bracelets" ON bracelets 
  FOR SELECT 
  USING (true);

-- Only authenticated users can insert bracelets (admin functionality)
CREATE POLICY "Authenticated users can insert bracelets" ON bracelets 
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Only authenticated users can update bracelets
CREATE POLICY "Authenticated users can update bracelets" ON bracelets 
  FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

-- Only authenticated users can delete bracelets
CREATE POLICY "Authenticated users can delete bracelets" ON bracelets 
  FOR DELETE 
  USING (auth.uid() IS NOT NULL);
