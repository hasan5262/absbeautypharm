-- Update all product prices to $79.99
UPDATE products SET price = 79.99;

-- Verify the update
SELECT name, price FROM products ORDER BY name;
