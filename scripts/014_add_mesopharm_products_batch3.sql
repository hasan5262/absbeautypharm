-- Add third batch of 10 Mesopharm products with actual images and converted prices
-- Exchange rate: 1 USD = 3.7563 SAR (as of December 2024)

INSERT INTO products (
  name, 
  description, 
  price, 
  image_url, 
  category_id, 
  brand_id, 
  ingredients, 
  usage_instructions, 
  skin_type, 
  size,
  created_at,
  updated_at
) VALUES 
-- Age Resist Mask (25g x 5 pieces) - Premium anti-aging treatment
(
  'Age Resist Anti-Aging Mask',
  'Professional anti-aging mask set with 5 individual treatments. Features advanced peptides and botanical extracts to reduce fine lines, improve skin elasticity, and provide deep hydration for mature skin.',
  79.99, -- Converted from ~300 SAR
  '/images/products/mesopharm-age-resist.png',
  (SELECT id FROM categories WHERE name = 'Face Masks' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Peptides, Hyaluronic Acid, Collagen, Vitamin E, Botanical Extracts, Glycerin',
  'Apply to clean, dry skin. Leave on for 15-20 minutes. Remove gently and massage remaining essence into skin. Use 1-2 times per week.',
  'Mature, All skin types',
  '25g x 5 pieces',
  NOW(),
  NOW()
),

-- Ginkgo Ampoules - Circulation and anti-aging treatment
(
  'Ginkgo Biloba Ampoules',
  'Professional ampoule treatment with Ginkgo Biloba extract to improve circulation, reduce puffiness, and provide antioxidant protection. Ideal for tired, dull skin needing revitalization.',
  89.99, -- Converted from ~338 SAR
  '/images/products/mesopharm-ginkgo.jpg',
  (SELECT id FROM categories WHERE name = 'Serums' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Ginkgo Biloba Extract, Vitamin C, Antioxidant Complex, Hyaluronic Acid, Peptides',
  'Break open one ampoule and apply contents to clean face and neck. Gently massage until absorbed. Use in evening routine, 2-3 times per week.',
  'Dull, Tired, All skin types',
  '5 x 5ml ampoules',
  NOW(),
  NOW()
),

-- Hydro Line Prevention Set - Comprehensive hydration system
(
  'Hydro Line Prevention Set',
  'Complete hydration prevention system designed to maintain optimal skin moisture levels and prevent dehydration. Professional-grade formulation for long-lasting hydration and skin barrier protection.',
  119.99, -- Converted from ~450 SAR
  '/images/products/mesopharm-hydro-line.jpg',
  (SELECT id FROM categories WHERE name = 'Skincare Sets' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Hyaluronic Acid Complex, Ceramides, Glycerin, Aqua Shuttle, Marine Extracts',
  'Follow the complete routine as directed. Use morning and evening for optimal hydration maintenance and prevention of moisture loss.',
  'Dehydrated, Normal, All skin types',
  'Complete set',
  NOW(),
  NOW()
),

-- Hydro Cold Mask - Deep cleansing and pore treatment
(
  'Hydro Cold Cleansing Mask',
  'Professional deep pore cleansing mask with cooling effect. Removes impurities, excess oil, and dead skin cells while providing hydration. Perfect for deep cleansing treatments.',
  45.99, -- Converted from ~173 SAR
  '/images/products/mesopharm-hydro-cold-mask.png',
  (SELECT id FROM categories WHERE name = 'Face Masks' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Kaolin Clay, Menthol, Salicylic Acid, Hyaluronic Acid, Botanical Extracts',
  'Apply thick layer to clean skin, avoiding eye area. Leave for 10-15 minutes until dry. Rinse with lukewarm water. Use 1-2 times per week.',
  'Oily, Combination, Normal',
  '150ml',
  NOW(),
  NOW()
),

-- Triple Essence Serum - Advanced peptide treatment
(
  'Triple Essence Peptide Serum',
  'Advanced anti-aging serum with triple peptide complex for intensive skin renewal. Targets fine lines, improves firmness, and enhances skin texture for a more youthful appearance.',
  95.99, -- Converted from ~360 SAR
  '/images/products/mesopharm-triple-essence.png',
  (SELECT id FROM categories WHERE name = 'Serums' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Triple Peptide Complex, Hyaluronic Acid, Vitamin C, Niacinamide, Botanical Extracts',
  'Apply 2-3 drops to clean face and neck. Gently pat until absorbed. Use morning and evening before moisturizer.',
  'Mature, All skin types',
  '30ml',
  NOW(),
  NOW()
),

-- Silk Gloss Cream - Universal moisturizing cream
(
  'Silk Gloss Universal Cream',
  'Luxurious universal moisturizing cream suitable for all skin types. Provides optimal hydration while controlling excess shine. Creates a smooth, silk-like finish with healthy glow.',
  52.99, -- Converted from ~199 SAR
  '/images/products/mesopharm-silk-gloss.png',
  (SELECT id FROM categories WHERE name = 'Moisturizers' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Silk Proteins, Hyaluronic Acid, Glycerin, Vitamin E, Botanical Oils, Mattifying Agents',
  'Apply to clean face and neck morning and evening. Massage gently until absorbed. Can be used as makeup base.',
  'All skin types',
  '50ml',
  NOW(),
  NOW()
),

-- Fresh Light Cream - Oil control and mattifying
(
  'Fresh Light Mattifying Cream',
  'Lightweight mattifying cream specifically formulated for oily skin. Regulates sebum production, minimizes shine, and provides long-lasting hydration without clogging pores.',
  48.99, -- Converted from ~184 SAR
  '/images/products/mesopharm-fresh-light.png',
  (SELECT id FROM categories WHERE name = 'Moisturizers' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Niacinamide, Zinc PCA, Hyaluronic Acid, Mattifying Powders, Green Tea Extract',
  'Apply to clean face morning and evening. Focus on T-zone and oily areas. Allow to absorb before applying makeup.',
  'Oily, Combination',
  '50ml',
  NOW(),
  NOW()
),

-- DVL Capyl - Professional hair and scalp treatment
(
  'DVL Capyl Hair Treatment Ampoules',
  'Professional hair and scalp treatment ampoules designed to strengthen hair follicles, reduce hair loss, and improve scalp health. Intensive treatment for thinning or damaged hair.',
  109.99, -- Converted from ~413 SAR
  '/images/products/mesopharm-dvl-capyl.jpg',
  (SELECT id FROM categories WHERE name = 'Hair Care' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Capixyl Complex, Peptides, Biotin, Caffeine, Botanical Extracts, Vitamins',
  'Apply contents of one ampoule to clean scalp. Massage gently and do not rinse. Use 2-3 times per week for 8-12 weeks.',
  'All hair types',
  '5 x 5ml ampoules',
  NOW(),
  NOW()
),

-- Blemish Control Mask - Sensitive skin anti-inflammatory
(
  'Blemish Control Sensitive Mask',
  'Gentle anti-inflammatory mask for sensitive skin prone to blemishes. Reduces redness, calms irritation, and helps control breakouts without over-drying or causing sensitivity.',
  42.99, -- Converted from ~161 SAR
  '/images/products/mesopharm-blemish-control.png',
  (SELECT id FROM categories WHERE name = 'Face Masks' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Zinc Oxide, Allantoin, Chamomile Extract, Niacinamide, Hyaluronic Acid, Calendula',
  'Apply thin layer to clean skin, focusing on problem areas. Leave for 10-15 minutes. Rinse with lukewarm water. Use 2-3 times per week.',
  'Sensitive, Acne-prone',
  '150ml',
  NOW(),
  NOW()
),

-- Enzyme Citrus Mask - Exfoliating treatment
(
  'Enzyme Citrus Exfoliating Mask',
  'Professional enzyme-based exfoliating mask with citrus extracts. Gently removes dead skin cells, brightens complexion, and improves skin texture for a radiant, smooth appearance.',
  46.99, -- Converted from ~176 SAR
  '/images/products/mesopharm-enzyme-citrus.png',
  (SELECT id FROM categories WHERE name = 'Face Masks' LIMIT 1),
  (SELECT id FROM brands WHERE name = 'Mesopharm' LIMIT 1),
  'Papain Enzyme, Citrus Extracts, AHA Complex, Vitamin C, Hyaluronic Acid, Botanical Extracts',
  'Apply to clean, dry skin avoiding eye area. Leave for 8-10 minutes. Rinse thoroughly with lukewarm water. Use 1-2 times per week.',
  'Normal, Combination, Dull',
  '150ml',
  NOW(),
  NOW()
);
