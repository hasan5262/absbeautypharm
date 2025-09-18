-- Remove all products from the database to start fresh
-- This will delete all product records but preserve the table structure

DELETE FROM products;

-- Reset the auto-increment counter to start from 1 again
ALTER SEQUENCE products_id_seq RESTART WITH 1;

-- Verify the table is empty
SELECT COUNT(*) as remaining_products FROM products;
