-- Check what products exist in the database
SELECT id, name, category, created_at 
FROM products 
ORDER BY created_at DESC 
LIMIT 10;

-- Check if there are any products with simple numeric-like names
SELECT id, name, category 
FROM products 
WHERE name ~ '^[0-9]+$' OR id::text ~ '^[0-9]+$';
