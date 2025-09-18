-- Replace all placeholder images with actual Mesopharm product photos
-- This updates existing products to use the real product images provided by the user

-- Face Care Products
UPDATE products SET image_url = '/images/products/mesopharm-aha-gel.png' 
WHERE name = 'Luxury Cleansing Emulsion';

UPDATE products SET image_url = '/images/products/mesopharm-hydro-active.png' 
WHERE name = 'Hydrating Toner';

UPDATE products SET image_url = '/images/products/mesopharm-brilliance-serum.jpg' 
WHERE name = 'Vitamin C Serum';

UPDATE products SET image_url = '/images/products/mesopharm-flash-anti-age.jpg' 
WHERE name = 'Retinol Night Cream';

UPDATE products SET image_url = '/images/products/mesopharm-neutro-sense.png' 
WHERE name = 'Hyaluronic Acid Moisturizer';

-- Eye Care Products
UPDATE products SET image_url = '/images/products/mesopharm-triple-essence.png' 
WHERE name = 'Eye Renewal Cream';

UPDATE products SET image_url = '/images/products/mesopharm-silk-gloss.png' 
WHERE name = 'Brightening Eye Serum';

-- Specialized Treatments
UPDATE products SET image_url = '/images/products/mesopharm-enzyme-citrus.png' 
WHERE name = 'Glycolic Acid Peel';

UPDATE products SET image_url = '/images/products/mesopharm-hydro-complex-mask.jpg' 
WHERE name = 'Peptide Recovery Mask';

UPDATE products SET image_url = '/images/products/mesopharm-age-resist.png' 
WHERE name = 'Age Resist Mask';

UPDATE products SET image_url = '/images/products/mesopharm-blemish-control.png' 
WHERE name = 'Acne Control Mask';

-- Sun Protection
UPDATE products SET image_url = '/images/products/mesopharm-fresh-light.png' 
WHERE name = 'Mineral Sunscreen SPF 50';

-- Body Care Products
UPDATE products SET image_url = '/images/products/mesopharm-nutri-active.png' 
WHERE name = 'Firming Body Lotion';

UPDATE products SET image_url = '/images/products/mesopharm-hydro-cold-mask.png' 
WHERE name = 'Exfoliating Body Scrub';

-- Hair Care Products
UPDATE products SET image_url = '/images/products/mesopharm-ginkgo.jpg' 
WHERE name = 'Strengthening Shampoo';

UPDATE products SET image_url = '/images/products/mesopharm-hydro-line.jpg' 
WHERE name = 'Nourishing Conditioner';

UPDATE products SET image_url = '/images/products/mesopharm-dvl-capyl.jpg' 
WHERE name = 'Hair Growth Serum';

-- Men's Care Products
UPDATE products SET image_url = '/images/products/mesopharm-anti-acne.png' 
WHERE name = 'Men''s Face Wash';

UPDATE products SET image_url = '/images/products/mesopharm-fresh-post-peel.png' 
WHERE name = 'Men''s Anti-Aging Cream';

-- Sensitive Skin Products
UPDATE products SET image_url = '/images/products/mesopharm-mesohydral.jpg' 
WHERE name = 'Gentle Micellar Water';

UPDATE products SET image_url = '/images/products/mesopharm-aha-gel.png' 
WHERE name = 'Calming Face Mask';

-- Anti-Aging Collection
UPDATE products SET image_url = '/images/products/mesopharm-brilliance-serum.jpg' 
WHERE name = 'Collagen Boosting Serum';

UPDATE products SET image_url = '/images/products/mesopharm-flash-anti-age.jpg' 
WHERE name = 'Wrinkle Repair Cream';

-- Acne Treatment
UPDATE products SET image_url = '/images/products/mesopharm-anti-acne.png' 
WHERE name = 'Acne Control Serum';

UPDATE products SET image_url = '/images/products/mesopharm-fresh-light.png' 
WHERE name = 'Clarifying Toner';

-- Brightening Collection
UPDATE products SET image_url = '/images/products/mesopharm-enzyme-citrus.png' 
WHERE name = 'Vitamin C Brightening Mask';

UPDATE products SET image_url = '/images/products/mesopharm-triple-essence.png' 
WHERE name = 'Dark Spot Corrector';

-- Hydrating Collection
UPDATE products SET image_url = '/images/products/mesopharm-hydro-active.png' 
WHERE name = 'Moisture Surge Gel';

UPDATE products SET image_url = '/images/products/mesopharm-hydro-complex-mask.jpg' 
WHERE name = 'Overnight Hydrating Mask';

-- Exfoliating Collection
UPDATE products SET image_url = '/images/products/mesopharm-enzyme-citrus.png' 
WHERE name = 'Gentle Enzyme Exfoliant';

UPDATE products SET image_url = '/images/products/mesopharm-aha-gel.png' 
WHERE name = 'Resurfacing Treatment';

-- Lip Care
UPDATE products SET image_url = '/images/products/mesopharm-silk-gloss.png' 
WHERE name = 'Lip Renewal Treatment';

-- Neck and Décolletage
UPDATE products SET image_url = '/images/products/mesopharm-nutri-active.png' 
WHERE name = 'Neck Firming Cream';

-- Hand Care
UPDATE products SET image_url = '/images/products/mesopharm-fresh-post-peel.png' 
WHERE name = 'Age-Defying Hand Cream';

-- Foot Care
UPDATE products SET image_url = '/images/products/mesopharm-hydro-cold-mask.png' 
WHERE name = 'Intensive Foot Repair';

-- Travel Sizes
UPDATE products SET image_url = '/images/products/mesopharm-ginkgo.jpg' 
WHERE name = 'Travel Skincare Set';
