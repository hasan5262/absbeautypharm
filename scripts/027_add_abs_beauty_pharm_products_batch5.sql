-- Fixed column names to match actual database schema
-- Add ABS Beauty Pharm products 40-48 with real images
INSERT INTO products (
  name, 
  description, 
  price, 
  image_url, 
  category, 
  volume,
  active_ingredients,
  effects,
  directions
) VALUES 
(
  'CLEANSING GEL – cleansing normalizing gel',
  'Multipurpose product for everyday care of the face, neck and decollete. It removes impurities delicately without damaging the hydrolipid barrier of the skin.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d729d5c9-eb6b-4117-9d4a-d9132898cb57-tE6MhZthM1kf0sY0u0WLshSBl5I52Y.png',
  'Skincare',
  '400 mL',
  'complex of NMF components, complex for detoxication and self-purification of the skin, complex of plant extracts (arnica, ivy, mallow, cucumber, elderflower, linden, pellitory)',
  ARRAY['gentle cleansing', 'maintains hydrolipid barrier', 'suitable for face, neck and decollete', 'removes impurities effectively'],
  'Apply to wet skin. Massage gently with circular motions all over the face, including the eye contour area. Rinse thoroughly with water or remove the remains using a wet towel.'
),
(
  'KAOLIN MASK – cleansing mask on the base of kaolin',
  'Cleansing kaolin mask for face is designed specially for normal, combination, oily and acne-prone skin. It promotes deep skin cleansing, pore contraction, desquamation, regulation of sebum production.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d045b247-e7b9-4cae-af66-57e28ecacb24-T6exvLmocQkQG0FVNhbUbJJpU63Cg4.png',
  'Skincare',
  '200 mL',
  'kaolin-zinc complex, seboregulating complex of great burnet, ginger root and cinnamon tree, menthol derivative, witch hazel extract',
  ARRAY['deep skin cleansing', 'pore contraction', 'desquamation', 'sebum regulation', 'relieves irritation and redness', 'soothes and mattifies skin'],
  'Apply a thick layer of the mask to dry clean skin, avoiding the eye contour area and lips. Leave for 15-20 minutes. Remove the mask with a warm wet compress or rinse thoroughly with water.'
),
(
  'RECOVERY MASK – nourishing and regenerating face mask',
  'Recovery mask contains effective anti-age ingredients and botox-like effect complex. It has a strong antioxidant action which aims at eliminating visible signs of aging: reduces fine lines, provides a long-term smoothing effect.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54dace99-11a3-469c-ac87-b8d98d1d2652.jpg-HR11gIlALECjce6kcFhjZgDnIoWjBN.jpeg',
  'Skincare',
  '200 mL',
  'complex of sphingolipids and phospholipids, polysaccharide complex with β-glucan, crambe oil, squalane, complex of magnesium salt L-PCA with blue and white lotus extracts, vitamin C, hyaluronic acid',
  ARRAY['anti-aging', 'reduces fine lines', 'long-term smoothing effect', 'strong antioxidant action', 'removes irritation', 'increases barrier functions', 'repairs damaged stratum corneum'],
  'Apply a thick layer of the mask to dry clean skin, including the eye contour area and lips. On the areas where the mask is immediately absorbed, add a small quantity of the mask. Leave for 15-20 minutes. Remove the mask with a warm wet compress or rinse thoroughly with water.'
),
(
  'LIFTING CREAM – face firming cream',
  'Firming and lifting cream visibly reduces and prevents wrinkles, enhances hydration, regulates collagen levels, improves skin elasticity and helps to redefine facial contours.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/639b16e2-6a5c-4c1a-aef7-ce27f52a7e56.jpg-uuY5aaYP3MtOghE6ci1FcBsC2Dy8lk.jpeg',
  'Skincare',
  '200 mL',
  'niacinamide, hyaluronic acid, smoothing polysaccharide complex with β-glucan, tetrapeptide with drainage and anti-edema properties, witch hazel extract, glyceryl glucoside',
  ARRAY['visibly reduces wrinkles', 'prevents wrinkles', 'enhances hydration', 'regulates collagen levels', 'improves skin elasticity', 'redefines facial contours', 'firming and lifting'],
  'Apply on dry skin after cleansing, massage gently with circular motions until the cream is completely absorbed.'
),
(
  'ANTI-WRINKLE CREAM – anti-aging cream',
  'Cream is aimed at the correction of age-related skin changes: it increases skin firmness and elasticity, reduces wrinkles and eliminates signs of fatigue. Protects the skin from dehydration and restores its hydrolipid barrier.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/436852ac-d248-4d4d-a9df-ad5b8e6a4c62.jpg-uJfIEAMsnuyziJrssLA6Uf1Nh9ISio.jpeg',
  'Skincare',
  '200 mL',
  'crambe oil, complex with α-glucan oligosaccharide, anti-inflammatory complex of plant extracts (centella, licorice, wormwood, ginkgo biloba, blueberry) and briar seed oil, evening primrose oil, purple coneflower extract, complex of ceramides, phytosphingosine and cholesterol, squalane',
  ARRAY['increases skin firmness', 'improves elasticity', 'reduces wrinkles', 'eliminates signs of fatigue', 'protects from dehydration', 'restores hydrolipid barrier', 'anti-aging'],
  'Apply on dry skin after cleansing, massage gently with circular motions until the cream is completely absorbed.'
),
(
  'SLIDE:MASSAGE MILK – creamy-textured product for comfortable massage procedure',
  'Professional massage milk that reduces redness, improves skin blood circulation and activates drainage. Soothes irritation and flaking, calms irritated skin while enhancing firmness and elasticity.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4ae38241-67bf-44d7-9de0-9aa88c0fe004-iwF5XwHV64BxfKjTIlj1AKWPpTS49w.png',
  'Professional Care',
  '150 mL',
  'squalane, evening primrose oil, vitamin E, stearyl glycyrrhetinate, escin, centella extract',
  ARRAY['reduces redness', 'improves blood circulation', 'activates drainage', 'soothes irritation and flaking', 'calms irritated skin', 'enhances firmness and elasticity', 'lifts and contours facial oval'],
  'Apply on clean skin of the face, neck and decollete, perform a massage. Remove the remains using a warm wet towel.'
),
(
  'HYDRO:INTENSIVE GEL – rejuvenating moisturizing gel',
  'Professional moisturizing gel that nourishes, restores and maintains the skin''s optimal level of moisture. Protects cells from free radicals and prevents the aging process while strengthening blood vessel walls.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11f21637-74bf-4788-b700-d912eed26cce-oxr1FZt1JiuSFiCimIVVV8r61sWx6A.png',
  'Professional Care',
  '150 mL',
  'low molecular hyaluronic acid, niacinamide, betaine, glycerin, urea',
  ARRAY['nourishes and restores', 'maintains optimal moisture level', 'protects from free radicals', 'prevents aging process', 'strengthens blood vessel walls', 'tones and improves elasticity'],
  'Spread a small amount of gel over the dry clean skin with circular motions. After complete absorption, apply a mask or cream. In professional care use the gel as an active concentrate, massage agent or mask (for 20-30 minutes), as well as for hardware procedures.'
),
(
  'UV:SAVE CREAM – protective cream with chemical filters SPF 20',
  'Daily protective cream suitable for all skin types that slows down photoaging processes and blocks negative reactions triggered by sun exposure. Reduces redness caused by harmful UV radiation.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab3e16e2-801d-4c51-be09-984665a5add2-d00mCCs02ac3R66LlY3lBi6H6vpkb2.png',
  'Sun Protection',
  '50 mL',
  'CM-β-glucan, stearyl glycyrrhetinate, plant extracts, D-panthenol, UV filters',
  ARRAY['suitable for all skin types', 'slows down photoaging', 'blocks negative sun reactions', 'reduces UV-induced redness', 'soothes skin', 'no white residue', 'no greasy shine'],
  'Use daily as the final stage of your skincare routine and protection from sunlight. Apply on clean face and neck 15 minutes before going outside. In case of increased solar activity, reapply every 2-3 hours.'
),
(
  'NEUTRO:ACTIVE GEL – calming gel for recovery after intensive procedures',
  'Professional calming gel that instantly softens and soothes irritated or inflamed skin. Removes inflammatory reactions, has a calming effect, tones and reduces puffiness while enhancing regeneration.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d744647d-9d1c-4800-af8e-886382fa84cf-BoQjPRVXoHwyUypBIAspfDHZFl2iB3.png',
  'Professional Care',
  '150 mL',
  'dipotassium glycyrrhizinate, urea, peptide inhibitor of neurogenic inflammation, complex of hydrolyzed glycosaminoglycans and rice proteins, niacinamide, hyaluronic acid',
  ARRAY['instantly softens and soothes', 'removes inflammatory reactions', 'calming effect', 'tones and reduces puffiness', 'moisturizes', 'restores hydrolipid barrier', 'enhances regeneration', 'increases cellular immunity'],
  'Spread a small amount of gel over the dry clean skin with circular motions. After complete absorption, apply a mask or cream. In professional care use the gel as an active concentrate, massage agent or mask (for 20-30 minutes), as well as for hardware procedures.'
);
