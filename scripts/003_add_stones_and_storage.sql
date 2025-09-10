-- Add stones column to bracelets table
ALTER TABLE bracelets ADD COLUMN stones TEXT[];

-- Create storage bucket for bracelet images
INSERT INTO storage.buckets (id, name, public) VALUES ('bracelet-images', 'bracelet-images', true);

-- Create RLS policies for storage
CREATE POLICY "Anyone can view bracelet images" ON storage.objects FOR SELECT USING (bucket_id = 'bracelet-images');
CREATE POLICY "Authenticated users can upload bracelet images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'bracelet-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update bracelet images" ON storage.objects FOR UPDATE USING (bucket_id = 'bracelet-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete bracelet images" ON storage.objects FOR DELETE USING (bucket_id = 'bracelet-images' AND auth.role() = 'authenticated');
