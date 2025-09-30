-- Check for duplicate product names
SELECT name, COUNT(*) as count
FROM products
GROUP BY name
HAVING COUNT(*) > 1
ORDER BY count DESC;

-- Check for products with missing or placeholder images
SELECT id, name, image_url, category
FROM products
WHERE image_url IS NULL 
   OR image_url = '' 
   OR image_url LIKE '%placeholder%'
ORDER BY name;

-- Get total product count
SELECT COUNT(*) as total_products FROM products;

-- Check for products with same name but different IDs
SELECT p1.id as id1, p2.id as id2, p1.name, p1.image_url as image1, p2.image_url as image2
FROM products p1
JOIN products p2 ON p1.name = p2.name AND p1.id < p2.id
ORDER BY p1.name;
