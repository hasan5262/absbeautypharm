-- Complete removal of all products from database
-- This will delete all product records and reset the table

-- Delete all products
DELETE FROM products;

-- Reset any sequences if they exist (for auto-incrementing IDs)
-- Note: UUID primary keys don't use sequences, but including for completeness
-- ALTER SEQUENCE IF EXISTS products_id_seq RESTART WITH 1;

-- Verify the table is empty
SELECT COUNT(*) as remaining_products FROM products;

-- Optional: Reset any related data
DELETE FROM cart_items;

-- Show final status
SELECT 
  (SELECT COUNT(*) FROM products) as products_count,
  (SELECT COUNT(*) FROM cart_items) as cart_items_count;
