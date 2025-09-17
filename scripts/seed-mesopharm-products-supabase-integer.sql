-- Updated seed script to work with integer IDs instead of UUIDs
-- Insert all 36 Mesopharm products with integer IDs
INSERT INTO products (name, description, volume, price, category, active_ingredients, effects, directions, image_url, in_stock) VALUES

-- Clear.Up Emulsion with the new image
('Clear.Up Emulsion', 'Professional cleansing emulsion for deep pore purification and skin clarity. This gentle yet effective formula removes impurities while maintaining skin balance.', '200ml', 89.99, 'Cleansers', 'Salicylic Acid, Niacinamide, Zinc PCA', ARRAY['Deep pore cleansing', 'Reduces excess oil', 'Minimizes pore appearance', 'Balances skin pH'], 'Apply to damp skin, massage gently in circular motions, rinse thoroughly with lukewarm water. Use morning and evening.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MThp38gGFU1Sh2YO0Bt5blh5kqsIVz.png', true),

-- Face Care Products
('Luxury Cleansing Emulsion', 'Gentle cleansing emulsion that removes makeup and impurities while nourishing the skin with essential vitamins and minerals.', '150ml', 75.99, 'Cleansers', 'Vitamin E, Chamomile Extract, Glycerin', ARRAY['Removes makeup effectively', 'Hydrates while cleansing', 'Soothes sensitive skin', 'Maintains skin barrier'], 'Apply to dry skin, massage gently, add water to emulsify, then rinse off completely.', '/placeholder.svg?height=400&width=400', true),

('Hydrating Toner', 'Alcohol-free toner that balances skin pH while providing deep hydration and preparing skin for subsequent treatments.', '200ml', 65.99, 'Toners', 'Hyaluronic Acid, Rose Water, Panthenol', ARRAY['Balances skin pH', 'Provides intense hydration', 'Prepares skin for serums', 'Refreshes and revitalizes'], 'Apply to clean skin using a cotton pad or pat gently with hands. Use morning and evening.', '/placeholder.svg?height=400&width=400', true),

('Vitamin C Serum', 'Potent antioxidant serum that brightens skin, reduces dark spots, and protects against environmental damage.', '30ml', 95.99, 'Serums', 'L-Ascorbic Acid 20%, Vitamin E, Ferulic Acid', ARRAY['Brightens complexion', 'Reduces hyperpigmentation', 'Antioxidant protection', 'Stimulates collagen production'], 'Apply 2-3 drops to clean skin in the morning. Follow with moisturizer and SPF.', '/placeholder.svg?height=400&width=400', true),

('Retinol Night Cream', 'Advanced anti-aging night cream with encapsulated retinol for smoother, firmer, and more youthful-looking skin.', '50ml', 125.99, 'Moisturizers', 'Retinol 0.5%, Peptides, Ceramides', ARRAY['Reduces fine lines', 'Improves skin texture', 'Increases cell turnover', 'Firms and tightens skin'], 'Apply to clean skin at night. Start with 2-3 times per week, gradually increase frequency.', '/placeholder.svg?height=400&width=400', true),

('Hyaluronic Acid Moisturizer', 'Lightweight yet deeply hydrating moisturizer that plumps skin and provides long-lasting moisture.', '50ml', 85.99, 'Moisturizers', 'Hyaluronic Acid, Squalane, Niacinamide', ARRAY['Intense hydration', 'Plumps fine lines', 'Lightweight texture', 'Suitable for all skin types'], 'Apply to clean skin morning and evening. Can be used alone or over serum.', '/placeholder.svg?height=400&width=400', true),

-- Eye Care Products
('Eye Renewal Cream', 'Specialized eye cream that targets dark circles, puffiness, and fine lines around the delicate eye area.', '15ml', 105.99, 'Eye Care', 'Caffeine, Peptides, Vitamin K', ARRAY['Reduces dark circles', 'Minimizes puffiness', 'Smooths fine lines', 'Firms eye contour'], 'Gently pat around eye area using ring finger. Use morning and evening.', '/placeholder.svg?height=400&width=400', true),

('Brightening Eye Serum', 'Concentrated serum that illuminates the eye area and reduces signs of fatigue for a more youthful appearance.', '15ml', 89.99, 'Eye Care', 'Vitamin C, Arbutin, Kojic Acid', ARRAY['Brightens under-eye area', 'Reduces pigmentation', 'Hydrates delicate skin', 'Improves skin radiance'], 'Apply 1-2 drops under each eye, pat gently until absorbed. Use morning and evening.', '/placeholder.svg?height=400&width=400', true),

-- Specialized Treatments
('Glycolic Acid Peel', 'Professional-grade chemical peel that exfoliates dead skin cells and reveals smoother, brighter skin.', '30ml', 115.99, 'Treatments', 'Glycolic Acid 30%, Lactic Acid, Chamomile', ARRAY['Exfoliates dead skin', 'Improves skin texture', 'Reduces hyperpigmentation', 'Minimizes pore appearance'], 'Apply thin layer to clean skin, leave for 5-10 minutes, rinse thoroughly. Use 1-2 times per week.', '/placeholder.svg?height=400&width=400', true),

('Peptide Recovery Mask', 'Intensive treatment mask that repairs and rejuvenates skin with powerful peptides and growth factors.', '75ml', 135.99, 'Masks', 'Copper Peptides, Growth Factors, Collagen', ARRAY['Accelerates skin repair', 'Boosts collagen production', 'Reduces inflammation', 'Improves skin elasticity'], 'Apply thick layer to clean skin, leave for 15-20 minutes, rinse or tissue off. Use 2-3 times per week.', '/placeholder.svg?height=400&width=400', true),

('Age Resist Mask', 'Professional anti-aging treatment mask that combats signs of aging with advanced peptides and growth factors. This intensive mask helps reduce fine lines, improve skin elasticity, and restore youthful radiance.', '50ml', 149.99, 'Masks', 'Copper Peptides, Hyaluronic Acid, Vitamin C, Growth Factors', ARRAY['Reduces fine lines and wrinkles', 'Improves skin elasticity', 'Boosts collagen production', 'Restores youthful radiance', 'Firms and tightens skin'], 'Apply a thick layer to clean, dry skin avoiding the eye area. Leave on for 15-20 minutes, then rinse thoroughly with lukewarm water. Use 2-3 times per week for optimal results.', '/placeholder.svg?height=400&width=400', true),

-- Adding Acne Control Mask product
('Acne Control Mask', 'Professional acne treatment mask that deeply purifies pores and controls breakouts. Formulated with salicylic acid and bentonite clay to absorb excess oil, unclog pores, and reduce inflammation for clearer, healthier-looking skin.', '75ml', 89.99, 'Masks', 'Salicylic Acid 2%, Bentonite Clay, Tea Tree Oil, Zinc Oxide', ARRAY['Deep pore purification', 'Controls excess oil production', 'Reduces acne inflammation', 'Unclogs pores effectively', 'Prevents future breakouts', 'Soothes irritated skin'], 'Apply a thin, even layer to clean skin, avoiding the eye area. Leave on for 10-15 minutes until dry, then rinse thoroughly with lukewarm water. Use 1-2 times per week or as needed for breakouts.', '/placeholder.svg?height=400&width=400', true),

-- Sun Protection
('Mineral Sunscreen SPF 50', 'Broad-spectrum mineral sunscreen that provides superior protection while nourishing the skin.', '50ml', 55.99, 'Sun Care', 'Zinc Oxide, Titanium Dioxide, Vitamin E', ARRAY['Broad-spectrum protection', 'Gentle on sensitive skin', 'Non-comedogenic', 'Antioxidant benefits'], 'Apply generously 15 minutes before sun exposure. Reapply every 2 hours.', '/placeholder.svg?height=400&width=400', true),

-- Body Care Products
('Firming Body Lotion', 'Luxurious body lotion that firms and tones skin while providing deep hydration and improving skin elasticity.', '200ml', 79.99, 'Body Care', 'Caffeine, Retinyl Palmitate, Shea Butter', ARRAY['Firms and tones skin', 'Improves elasticity', 'Deep hydration', 'Smooths skin texture'], 'Apply to clean skin in upward circular motions. Use daily for best results.', '/placeholder.svg?height=400&width=400', true),

('Exfoliating Body Scrub', 'Gentle yet effective body scrub that removes dead skin cells and reveals smooth, radiant skin.', '200ml', 65.99, 'Body Care', 'Sugar Crystals, Jojoba Oil, Vitamin E', ARRAY['Exfoliates dead skin', 'Improves circulation', 'Softens rough areas', 'Prepares skin for moisturizer'], 'Apply to damp skin in shower, massage in circular motions, rinse thoroughly. Use 2-3 times per week.', '/placeholder.svg?height=400&width=400', true),

-- Hair Care Products
('Strengthening Shampoo', 'Nourishing shampoo that cleanses while strengthening hair and promoting healthy growth.', '250ml', 45.99, 'Hair Care', 'Biotin, Keratin, Argan Oil', ARRAY['Strengthens hair follicles', 'Promotes growth', 'Adds shine and softness', 'Reduces breakage'], 'Apply to wet hair, massage into scalp, rinse thoroughly. Follow with conditioner.', '/placeholder.svg?height=400&width=400', true),

('Nourishing Conditioner', 'Deep conditioning treatment that repairs damaged hair and provides long-lasting moisture and protection.', '250ml', 49.99, 'Hair Care', 'Keratin, Coconut Oil, Silk Proteins', ARRAY['Repairs damaged hair', 'Provides deep moisture', 'Reduces frizz', 'Improves manageability'], 'Apply to clean, damp hair from mid-length to ends. Leave for 2-3 minutes, rinse thoroughly.', '/placeholder.svg?height=400&width=400', true),

('Hair Growth Serum', 'Concentrated serum that stimulates hair follicles and promotes healthy hair growth while reducing hair loss.', '60ml', 89.99, 'Hair Care', 'Minoxidil 5%, Biotin, Saw Palmetto', ARRAY['Stimulates hair growth', 'Reduces hair loss', 'Strengthens follicles', 'Improves hair density'], 'Apply to clean, dry scalp. Massage gently and do not rinse. Use twice daily.', '/placeholder.svg?height=400&width=400', true),

-- Men''s Care Products
('Men''s Face Wash', 'Invigorating face wash designed specifically for men''s skin, removing oil and impurities without over-drying.', '150ml', 39.99, 'Men''s Care', 'Salicylic Acid, Menthol, Charcoal', ARRAY['Deep cleansing action', 'Controls oil production', 'Refreshes and energizes', 'Prevents ingrown hairs'], 'Apply to wet face, massage for 30 seconds, rinse with cool water. Use morning and evening.', '/placeholder.svg?height=400&width=400', true),

('Men''s Anti-Aging Cream', 'Powerful anti-aging cream formulated for men''s thicker skin, reducing wrinkles and improving skin firmness.', '50ml', 95.99, 'Men''s Care', 'Retinol, Peptides, Caffeine', ARRAY['Reduces wrinkles', 'Firms skin', 'Improves texture', 'Energizes complexion'], 'Apply to clean face and neck in the evening. Start with every other night, increase as tolerated.', '/placeholder.svg?height=400&width=400', true),

-- Sensitive Skin Products
('Gentle Micellar Water', 'Ultra-gentle micellar water that removes makeup and cleanses sensitive skin without irritation.', '200ml', 35.99, 'Sensitive Care', 'Micellar Technology, Chamomile, Allantoin', ARRAY['Gentle makeup removal', 'Soothes sensitive skin', 'No-rinse formula', 'Maintains skin balance'], 'Apply to cotton pad, gently wipe over face and eyes. No rinsing required.', '/placeholder.svg?height=400&width=400', true),

('Calming Face Mask', 'Soothing face mask that reduces redness and inflammation while providing gentle hydration for sensitive skin.', '75ml', 69.99, 'Sensitive Care', 'Aloe Vera, Oat Extract, Calendula', ARRAY['Reduces redness', 'Calms irritation', 'Gentle hydration', 'Strengthens skin barrier'], 'Apply thin layer to clean skin, leave for 10-15 minutes, rinse with lukewarm water. Use 1-2 times per week.', '/placeholder.svg?height=400&width=400', true),

-- Anti-Aging Collection
('Collagen Boosting Serum', 'Advanced serum that stimulates natural collagen production for firmer, more youthful-looking skin.', '30ml', 145.99, 'Anti-Aging', 'Vitamin C, Peptides, Growth Factors', ARRAY['Boosts collagen production', 'Firms and lifts skin', 'Reduces deep wrinkles', 'Improves skin elasticity'], 'Apply 2-3 drops to clean skin morning and evening. Follow with moisturizer.', '/placeholder.svg?height=400&width=400', true),

('Wrinkle Repair Cream', 'Intensive repair cream that targets deep wrinkles and expression lines for visibly smoother skin.', '50ml', 165.99, 'Anti-Aging', 'Retinol, Hyaluronic Acid, Peptides', ARRAY['Reduces deep wrinkles', 'Smooths expression lines', 'Plumps skin', 'Improves skin density'], 'Apply to clean skin at night, focusing on areas of concern. Use 3-4 times per week initially.', '/placeholder.svg?height=400&width=400', true),

-- Acne Treatment
('Acne Control Serum', 'Targeted serum that treats active breakouts while preventing new blemishes from forming.', '30ml', 75.99, 'Acne Care', 'Salicylic Acid 2%, Niacinamide, Tea Tree Oil', ARRAY['Treats active breakouts', 'Prevents new blemishes', 'Reduces inflammation', 'Minimizes pore size'], 'Apply to clean skin, focusing on problem areas. Use once daily, gradually increase frequency.', '/placeholder.svg?height=400&width=400', true),

('Clarifying Toner', 'Alcohol-free clarifying toner that removes excess oil and unclogs pores without over-drying the skin.', '200ml', 55.99, 'Acne Care', 'Witch Hazel, Salicylic Acid, Zinc', ARRAY['Removes excess oil', 'Unclogs pores', 'Balances skin', 'Prevents breakouts'], 'Apply to clean skin with cotton pad, avoiding eye area. Use morning and evening.', '/placeholder.svg?height=400&width=400', true),

-- Brightening Collection
('Vitamin C Brightening Mask', 'Intensive brightening mask that evens skin tone and provides an instant radiance boost.', '75ml', 95.99, 'Brightening', 'Vitamin C, Kojic Acid, Licorice Extract', ARRAY['Evens skin tone', 'Reduces dark spots', 'Instant radiance boost', 'Antioxidant protection'], 'Apply thick layer to clean skin, leave for 15 minutes, rinse thoroughly. Use 1-2 times per week.', '/placeholder.svg?height=400&width=400', true),

('Dark Spot Corrector', 'Concentrated treatment that targets stubborn dark spots and hyperpigmentation for clearer, more even skin.', '15ml', 85.99, 'Brightening', 'Hydroquinone 2%, Kojic Acid, Arbutin', ARRAY['Fades dark spots', 'Evens skin tone', 'Prevents new pigmentation', 'Brightens complexion'], 'Apply small amount to dark spots twice daily. Use sunscreen during treatment.', '/placeholder.svg?height=400&width=400', true),

-- Hydrating Collection
('Moisture Surge Gel', 'Lightweight hydrating gel that provides instant moisture boost without feeling heavy or greasy.', '50ml', 65.99, 'Hydrating', 'Hyaluronic Acid, Glycerin, Aloe Vera', ARRAY['Instant hydration', 'Lightweight texture', 'Suitable for oily skin', 'Long-lasting moisture'], 'Apply to clean skin morning and evening. Can be layered under other products.', '/placeholder.svg?height=400&width=400', true),

('Overnight Hydrating Mask', 'Intensive overnight mask that deeply hydrates and repairs skin while you sleep.', '75ml', 89.99, 'Hydrating', 'Hyaluronic Acid, Ceramides, Peptides', ARRAY['Deep overnight hydration', 'Repairs skin barrier', 'Plumps fine lines', 'Wakes up refreshed skin'], 'Apply generous layer to clean skin before bed. Leave on overnight, rinse in morning if desired.', '/placeholder.svg?height=400&width=400', true),

-- Exfoliating Collection
('Gentle Enzyme Exfoliant', 'Mild enzyme exfoliant that removes dead skin cells without irritation, suitable for sensitive skin.', '50ml', 79.99, 'Exfoliating', 'Papaya Enzyme, Pineapple Extract, Chamomile', ARRAY['Gentle exfoliation', 'Suitable for sensitive skin', 'Brightens complexion', 'Smooths texture'], 'Apply to clean, dry skin 2-3 times per week. Leave for 5-10 minutes, rinse thoroughly.', '/placeholder.svg?height=400&width=400', true),

('Resurfacing Treatment', 'Professional-strength resurfacing treatment that dramatically improves skin texture and appearance.', '30ml', 125.99, 'Exfoliating', 'Glycolic Acid, Lactic Acid, Salicylic Acid', ARRAY['Dramatic texture improvement', 'Reduces fine lines', 'Minimizes pores', 'Evens skin tone'], 'Apply thin layer to clean skin at night. Start once weekly, increase gradually. Always use SPF.', '/placeholder.svg?height=400&width=400', true),

-- Lip Care
('Lip Renewal Treatment', 'Intensive lip treatment that repairs, hydrates, and protects lips for a smoother, fuller appearance.', '15ml', 45.99, 'Lip Care', 'Peptides, Hyaluronic Acid, Vitamin E', ARRAY['Repairs damaged lips', 'Provides deep hydration', 'Plumps appearance', 'Long-lasting protection'], 'Apply to clean lips morning and evening. Can be used under lipstick or alone.', '/placeholder.svg?height=400&width=400', true),

-- Neck and Décolletage
('Neck Firming Cream', 'Specialized cream that targets the delicate neck and décolletage area, improving firmness and reducing signs of aging.', '50ml', 115.99, 'Neck Care', 'Peptides, Retinol, Hyaluronic Acid', ARRAY['Firms neck area', 'Reduces sagging', 'Smooths chest wrinkles', 'Improves skin elasticity'], 'Apply to clean neck and chest area in upward motions. Use morning and evening.', '/placeholder.svg?height=400&width=400', true),

-- Hand Care
('Age-Defying Hand Cream', 'Rich hand cream that treats age spots, improves texture, and provides long-lasting hydration for youthful-looking hands.', '75ml', 55.99, 'Hand Care', 'Retinol, Vitamin C, Shea Butter', ARRAY['Reduces age spots', 'Improves hand texture', 'Deep hydration', 'Anti-aging benefits'], 'Apply to clean hands throughout the day, massaging into cuticles and nails.', '/placeholder.svg?height=400&width=400', true),

-- Foot Care
('Intensive Foot Repair', 'Therapeutic foot cream that repairs cracked heels and softens rough, dry skin for baby-soft feet.', '100ml', 39.99, 'Foot Care', 'Urea 25%, Lactic Acid, Shea Butter', ARRAY['Repairs cracked heels', 'Softens rough skin', 'Deep moisturization', 'Prevents calluses'], 'Apply to clean, dry feet daily. For best results, use at night and wear cotton socks.', '/placeholder.svg?height=400&width=400', true),

-- Travel Sizes
('Travel Skincare Set', 'Complete travel-sized skincare routine including cleanser, toner, serum, and moisturizer in TSA-friendly sizes.', 'Set of 4', 89.99, 'Travel Sets', 'Various Active Ingredients', ARRAY['Complete routine', 'TSA-friendly sizes', 'Perfect for travel', 'Maintains skin regimen'], 'Use products in order: cleanser, toner, serum, moisturizer. Follow regular skincare routine.', '/placeholder.svg?height=400&width=400', true);
