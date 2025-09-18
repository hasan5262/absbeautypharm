-- Add Mesopharm products with prices converted from SAR to USD
-- Current exchange rate: 1 USD = 3.7563 SAR (as of Dec 2024)
-- To convert SAR to USD: SAR_price / 3.7563

-- Adding sample Mesopharm products with converted USD prices
-- Note: Replace these with actual products and prices from mesopharm-sa.com

-- Professional Skin Care Products
INSERT INTO products (
  id,
  name,
  description,
  price,
  category,
  active_ingredients,
  effects,
  directions,
  volume,
  image_url,
  in_stock,
  created_at,
  updated_at
) VALUES 
-- Sample products - replace with actual data from mesopharm-sa.com
(
  gen_random_uuid(),
  'Mesopharm Professional Vitamin C Serum',
  'Professional-grade vitamin C serum for brightening and anti-aging. Russian cosmetics for professional use.',
  ROUND((450.0 / 3.7563)::numeric, 2), -- 450 SAR converted to USD (~119.78 USD)
  'Serums',
  'Vitamin C, Hyaluronic Acid, Peptides',
  ARRAY['Brightening', 'Anti-aging', 'Hydrating', 'Antioxidant'],
  'Apply 2-3 drops to clean skin in the morning. Follow with moisturizer and SPF.',
  '30ml',
  '/placeholder.svg?height=400&width=400',
  true,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'Mesopharm Hyaluronic Acid Complex',
  'Professional hyaluronic acid treatment for deep hydration and plumping effect.',
  ROUND((380.0 / 3.7563)::numeric, 2), -- 380 SAR converted to USD (~101.15 USD)
  'Serums',
  'Hyaluronic Acid, Marine Collagen, Peptides',
  ARRAY['Hydrating', 'Plumping', 'Anti-aging', 'Firming'],
  'Apply to clean skin morning and evening. Gently pat until absorbed.',
  '50ml',
  '/placeholder.svg?height=400&width=400',
  true,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'Mesopharm Professional Retinol Treatment',
  'Advanced retinol treatment for skin renewal and anti-aging. Professional strength formula.',
  ROUND((520.0 / 3.7563)::numeric, 2), -- 520 SAR converted to USD (~138.42 USD)
  'Treatments',
  'Retinol, Vitamin E, Squalane, Peptides',
  ARRAY['Anti-aging', 'Skin renewal', 'Wrinkle reduction', 'Texture improvement'],
  'Use only in the evening. Start with 2-3 times per week. Always use SPF during the day.',
  '30ml',
  '/placeholder.svg?height=400&width=400',
  true,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'Mesopharm Peptide Recovery Cream',
  'Professional peptide-rich recovery cream for intensive skin repair and regeneration.',
  ROUND((420.0 / 3.7563)::numeric, 2), -- 420 SAR converted to USD (~111.80 USD)
  'Moisturizers',
  'Peptide Complex, Ceramides, Niacinamide, Shea Butter',
  ARRAY['Repairing', 'Anti-aging', 'Moisturizing', 'Barrier protection'],
  'Apply to clean skin morning and evening. Massage gently until absorbed.',
  '50ml',
  '/placeholder.svg?height=400&width=400',
  true,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'Mesopharm Professional Cleansing Complex',
  'Professional-grade cleansing complex for deep pore cleansing and skin preparation.',
  ROUND((280.0 / 3.7563)::numeric, 2), -- 280 SAR converted to USD (~74.54 USD)
  'Cleansers',
  'Salicylic Acid, Glycolic Acid, Niacinamide, Botanical Extracts',
  ARRAY['Deep cleansing', 'Pore refining', 'Exfoliating', 'Purifying'],
  'Use morning and evening. Apply to damp skin, massage gently, rinse thoroughly.',
  '200ml',
  '/placeholder.svg?height=400&width=400',
  true,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'Mesopharm Eye Contour Treatment',
  'Specialized eye treatment for reducing fine lines, puffiness, and dark circles.',
  ROUND((350.0 / 3.7563)::numeric, 2), -- 350 SAR converted to USD (~93.17 USD)
  'Eye Care',
  'Caffeine, Peptides, Vitamin K, Hyaluronic Acid',
  ARRAY['Anti-aging', 'Depuffing', 'Dark circle reduction', 'Firming'],
  'Apply small amount around eye area morning and evening. Gently pat until absorbed.',
  '15ml',
  '/placeholder.svg?height=400&width=400',
  true,
  NOW(),
  NOW()
);

-- Add a comment about the conversion rate used
INSERT INTO products (
  id,
  name,
  description,
  price,
  category,
  active_ingredients,
  effects,
  directions,
  volume,
  image_url,
  in_stock,
  created_at,
  updated_at
) VALUES 
(
  gen_random_uuid(),
  'Mesopharm Professional Brightening Mask',
  'Professional brightening mask for instant radiance and even skin tone. Part of the aesthetic medicine product line.',
  ROUND((320.0 / 3.7563)::numeric, 2), -- 320 SAR converted to USD (~85.19 USD)
  'Masks',
  'Vitamin C, Arbutin, Kojic Acid, Alpha Hydroxy Acids',
  ARRAY['Brightening', 'Even skin tone', 'Radiance', 'Exfoliating'],
  'Apply thin layer to clean skin. Leave for 15-20 minutes. Rinse with lukewarm water. Use 1-2 times per week.',
  '75ml',
  '/placeholder.svg?height=400&width=400',
  true,
  NOW(),
  NOW()
);
