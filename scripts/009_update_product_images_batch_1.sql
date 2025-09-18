-- Update product images for the first 10 products from Lebanon PDF
-- Matching uploaded images to corresponding products

UPDATE products SET image_url = '/images/products/clear-up-emulsion.png' 
WHERE name = 'CLEAR:UP EMULSION';

UPDATE products SET image_url = '/images/products/peptide-eye-cream.png' 
WHERE name = 'PEPTIDE EYE CREAM';

UPDATE products SET image_url = '/images/products/fresh-post-peel-lotion.png' 
WHERE name = 'FRESH POST:PEEL LOTION';

UPDATE products SET image_url = '/images/products/hand-soft-touch-cream.png' 
WHERE name = 'HAND SOFT:TOUCH CREAM';

UPDATE products SET image_url = '/images/products/fresh-lift-cream.png' 
WHERE name = 'FRESH:LIFT CREAM';

UPDATE products SET image_url = '/images/products/contour-face-mask.png' 
WHERE name = 'CONTOUR:FACE MASK';

UPDATE products SET image_url = '/images/products/orange-lift-mask.png' 
WHERE name = 'ORANGE:LIFT MASK';

UPDATE products SET image_url = '/images/products/flash-lift-essence.png' 
WHERE name = 'FLASH:LIFT ESSENCE';

UPDATE products SET image_url = '/images/products/multi-active-cream.jpg' 
WHERE name = 'MULTI ACTIVE CREAM';

UPDATE products SET image_url = '/images/products/revital-active-mask.jpg' 
WHERE name = 'Revital:Active Mask';
