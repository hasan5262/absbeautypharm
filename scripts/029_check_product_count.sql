-- Check total product count and ABS Beauty Pharm products specifically
SELECT 
    COUNT(*) as total_products,
    COUNT(CASE WHEN name LIKE '%ABS%' OR name LIKE '%Hair X%' OR name LIKE '%FRESH%' OR name LIKE '%HYDRO%' OR name LIKE '%CLEAR%' THEN 1 END) as abs_products
FROM products;

-- List all ABS Beauty Pharm products to see what's missing
SELECT id, name, created_at 
FROM products 
WHERE name LIKE '%ABS%' 
   OR name LIKE '%Hair X%' 
   OR name LIKE '%FRESH%' 
   OR name LIKE '%HYDRO%' 
   OR name LIKE '%CLEAR%'
   OR name LIKE '%ENZYME%'
   OR name LIKE '%SILK%'
   OR name LIKE '%ANTI-ACNE%'
   OR name LIKE '%PEPTIDE%'
   OR name LIKE '%TRIPLE%'
   OR name LIKE '%AQUA%'
   OR name LIKE '%NUTRI%'
   OR name LIKE '%HAND%'
   OR name LIKE '%CONTOUR%'
   OR name LIKE '%ORANGE%'
   OR name LIKE '%FLASH%'
   OR name LIKE '%BLEMISH%'
   OR name LIKE '%BRILLIANCE%'
   OR name LIKE '%AHA%'
   OR name LIKE '%MULTI%'
   OR name LIKE '%NEUTRO%'
   OR name LIKE '%REVITAL%'
   OR name LIKE '%AGE RESIST%'
   OR name LIKE '%MESOHYDRAL%'
   OR name LIKE '%Ginkgo%'
   OR name LIKE '%DVL%'
   OR name LIKE '%PHDC%'
   OR name LIKE '%Phyto%'
   OR name LIKE '%Nucleospire%'
   OR name LIKE '%Vita Line%'
   OR name LIKE '%SENSITIVE TONER%'
   OR name LIKE '%CLEANSING GEL%'
   OR name LIKE '%KAOLIN%'
   OR name LIKE '%RECOVERY%'
   OR name LIKE '%LIFTING%'
   OR name LIKE '%SLIDE%'
   OR name LIKE '%UV:SAVE%'
   OR name LIKE '%EXFOL%'
   OR name LIKE '%ALMOND%'
   OR name LIKE '%GLYCO%'
   OR name LIKE '%LUSTER%'
ORDER BY id;

-- Check if any scripts haven't been run by looking for missing products
-- This will help identify which batches are missing
SELECT 'Missing products from batch:' as status,
CASE 
    WHEN NOT EXISTS (SELECT 1 FROM products WHERE name = 'CLEAR:UP EMULSION') THEN 'Batch 1 (products 1-10)'
    WHEN NOT EXISTS (SELECT 1 FROM products WHERE name = 'FRESH POST:PEEL CREAM') THEN 'Batch 2 (products 11-20)'
    WHEN NOT EXISTS (SELECT 1 FROM products WHERE name = 'FLASH:LIFT ESSENCE') THEN 'Batch 3 (products 21-30)'
    WHEN NOT EXISTS (SELECT 1 FROM products WHERE name = 'Hair X Vita Line B+') THEN 'Batch 4 (products 31-39)'
    WHEN NOT EXISTS (SELECT 1 FROM products WHERE name = 'CLEANSING GEL – cleansing normalizing gel') THEN 'Batch 5 (products 40-48)'
    WHEN NOT EXISTS (SELECT 1 FROM products WHERE name = 'EXFOL:ACTIVE CREAM') THEN 'Batch 6 (products 49-53)'
    ELSE 'All batches appear to be present'
END as missing_batch;
