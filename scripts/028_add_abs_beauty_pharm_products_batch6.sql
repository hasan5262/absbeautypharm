-- Fixed column names to match actual database schema
-- Add ABS Beauty Pharm Products Batch 6 (Products 49-53) with Real Images
-- All products priced at $79.99

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
  'EXFOL:ACTIVE CREAM – exfoliating cream with a micropeel effect',
  'Exfoliating cream with a micropeel effect that provides microexfoliation and renewal of the epidermis. Reduces the severity and depth of wrinkles, strengthens the skin and activates collagen synthesis while improving complexion.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/96ab6449-c11e-42b1-a3e9-abead51c26a2-gefssdOQmquJTIx363J0hCgIldcId9.png',
  'Professional Skincare',
  '50 mL',
  'glycolic acid',
  ARRAY['provides microexfoliation and renewal of the epidermis', 'reduces the severity and depth of wrinkles', 'strengthens the skin and activates the synthesis of collagen', 'improves the complexion'],
  'Apply on dry skin after cleansing, massage gently with circular motions. Use as a night cream for 14 days 2 times per year or as preparation for chemical peel procedures.'
),
(
  'ALMOND:LIGHT PEEL – lightening regulating peel with mandelic and kojic acids',
  'Lightening regulating peel with mandelic and kojic acids designed for hyperpigmentation, photoaging, and acne treatment. Provides gentle exfoliation while correcting skin aging signs and improving skin tone.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e53473f2-82a1-415e-a22f-e66dd84076c8-1AUQWqqBkLtvQq8bfiWxgx7EwX2lml.png',
  'Professional Skincare',
  '30 mL',
  'mandelic acid 40%, kojic acid 5%',
  ARRAY['hyperpigmentation treatment (melasma, lentigo, post-inflammatory)', 'photoaging correction', 'skin aging signs correction (wrinkles, firmness, elasticity)', 'acne treatment'],
  'STEP 1: Cleanse with FRESH:FOAM. STEP 2: Dry skin with paper tissues. STEP 3: Apply peel with brush (forehead, cheeks, chin, nose), exposure 3-15 minutes. STEP 4: Neutralize with cold water or FRESH POST:PEEL LOTION. STEP 5: Apply serum or lifting mask. STEP 6: Apply FRESH POST:PEEL CREAM.'
),
(
  'FRESH:GLYCO PEEL – restructuring antioxidant peel with glycolic acid',
  'Restructuring antioxidant peel with glycolic acid for correction of skin aging signs, photoaging, hyperpigmentation, and hyperkeratosis. Provides deep exfoliation and skin renewal with professional results.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08876f1c-9806-4d00-850d-ea8b4e0e6e48-96ARxv16a5wd8IlmyPWaY62fapMIOr.png',
  'Professional Skincare',
  '30 mL',
  'glycolic acid 20%',
  ARRAY['correction of skin aging signs (wrinkles, loss of firmness and elasticity)', 'photoaging treatment', 'hyperpigmentation reduction', 'hyperkeratosis treatment'],
  'STEP 1: Cleanse with FRESH:FOAM. STEP 2: Dry skin with paper tissues. STEP 3: Apply peel with brush (forehead, cheeks, chin, nose), exposure 3-15 minutes. STEP 4: Neutralize with cold water or FRESH POST:PEEL LOTION. STEP 5: Apply serum or lifting mask. STEP 6: Apply FRESH POST:PEEL CREAM.'
),
(
  'LUSTER:CONTROL MASK – seboregulating adsorbing mask with a creamy texture',
  'Seboregulating adsorbing mask with creamy texture designed for oily skin. Regulates sebaceous gland function, soothes inflammatory reactions, mattifies skin and reduces comedones while maintaining proper hydration.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/128d8cd3-d405-40be-bde6-755df737826f-mn5MyLK3yaIkqPHThEG7jlWwrO5TF6.png',
  'Professional Skincare',
  '150 mL',
  'complex of NMF components, betaine, complex of great burnet, ginger root and cinnamon tree, witch hazel extract, zinc-kaolin complex, dipotassium glycyrrhizinate, encapsulated salicylic acid, pumpkin seed extract',
  ARRAY['regulates the function of the sebaceous glands', 'soothes and alleviates inflammatory reactions', 'mattifies and reduces the number of comedones', 'moisturizes, restores the hydrolipid barrier'],
  'Apply a thick layer of the mask to dry clean skin, avoiding the eye contour area and lips. Leave for 15-20 minutes. Remove the mask with a warm wet compress or rinse thoroughly with water.'
),
(
  'HAIR X LOTION – lotion for hair growth activation',
  'Professional lotion for hair growth activation containing advanced peptides and natural extracts. Awakens dormant follicles, improves microcirculation, and accelerates hair growth while preventing hair loss and restoring healthy shine.',
  79.99,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b3c8053c-9c29-4eeb-b5fa-215fb7121008-7Ai0eoChbuCI5JwX3h7IRpkXk1tE2O.png',
  'Hair Care',
  '2 bottles x 60 mL',
  'encapsulated VEGF, pea peptide, natural complex of B vitamins, DNA sodium salt, sage extract, ginseng extract, methylsulfonylmethane, copper peptide, dipotassium glycyrrhizinate',
  ARRAY['awakens dormant follicles', 'improves microcirculation', 'restores healthy shine and hair elasticity', 'accelerates hair growth, strengthens hair bulbs', 'prevents hair loss', 'does not make the hair heavier'],
  'Apply a small amount of lotion (1/2 pipette) evenly on clean scalp along the partings. Let it soak in. Use daily in the morning and/or evening for 3 months.'
);
