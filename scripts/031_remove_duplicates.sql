-- Remove duplicate products, keeping only the one with the lowest ID
DELETE FROM products
WHERE id IN (
  SELECT p2.id
  FROM products p1
  JOIN products p2 ON p1.name = p2.name AND p1.id < p2.id
);

-- Verify removal
SELECT COUNT(*) as remaining_products FROM products;
