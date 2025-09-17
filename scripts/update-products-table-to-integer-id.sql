-- Update products table to use integer ID instead of UUID
-- Drop existing table and recreate with integer ID
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  volume TEXT,
  price NUMERIC NOT NULL,
  category TEXT NOT NULL,
  active_ingredients TEXT,
  effects TEXT[],
  directions TEXT,
  image_url TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow read access to all users
CREATE POLICY "Allow read access to products" ON products FOR SELECT USING (true);

-- Create policy to allow insert/update/delete for authenticated users (for admin)
CREATE POLICY "Allow full access to authenticated users" ON products FOR ALL USING (auth.role() = 'authenticated');
