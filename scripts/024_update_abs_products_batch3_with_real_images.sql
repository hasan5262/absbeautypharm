-- Update ABS Beauty Pharm products batch 3 with real product images
-- Products 21-30 with actual product photos

UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/52dc736d-8f27-484f-a275-1917b67dcd87.jpg-UnMTHgKixZqEHdobwAWUScvzgduz4U.jpeg' WHERE name = 'REVITAL:ACTIVE MASK';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5fec04a2-11f4-4d0d-b58f-7d02e6ebdc96-NUW4DSzNjzsV39RoOOx4WQzxWT32n6.png' WHERE name = 'AGE RESIST';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b8292220-7dce-4849-bce1-52bae1019156-dQkj0EcNTb5G3ZZIGY7zcDlO6ZwCZY.png' WHERE name = 'AHA GEL';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a72092b0-b08a-4b2c-a79a-a1ef6f4f555c.jpg-3eBXcbPU0HKvUPb4Mzqnf1aIHYtHri.jpeg' WHERE name = 'HYDRO LINE';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/248241c3-3719-48d1-938e-3f2e6372d2ac.jpg-A7fj7dAWrp3spos7PDhR7DKKv3gUJd.jpeg' WHERE name = 'MESOHYDRAL SILICIO';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5d1833f2-c9f5-44db-ae69-0ac633316ba5-bWZGCQZofKpWe3VIOhRf2MQUAMeW2n.png' WHERE name = 'NEUTRO:SENSE CREAM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/161ef026-c485-4f6a-a40d-ee10843faee6.jpg-qu5ou8V3fdzIMXkCLL7ciz9zZj5k7W.jpeg' WHERE name = 'BRILLIANCE:SERUM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/232d6d5b-3d09-4b42-b7d0-c4d2b2f448ae-AqPlNmZWYyeet9890PY9voJ0p6hwDx.png' WHERE name = 'BLEMISH:CONTROL MASK';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7533cfa9-2715-49c9-a904-be5a8f8c6223.jpg-f74SK2cjsoNU5u2nd8XX5TRdVpjlJA.jpeg' WHERE name = 'MULTI ACTIVE CREAM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0f94c919-1d4a-414a-aa45-30d2f04b4102-vnicyxAPdVzZrSEh8JHYy6XMKTPNYo.png' WHERE name = 'FLASH:LIFT ESSENCE';

-- Verify the updates
SELECT name, image_url FROM products WHERE name IN (
    'REVITAL:ACTIVE MASK',
    'AGE RESIST', 
    'AHA GEL',
    'HYDRO LINE',
    'MESOHYDRAL SILICIO',
    'NEUTRO:SENSE CREAM',
    'BRILLIANCE:SERUM',
    'BLEMISH:CONTROL MASK',
    'MULTI ACTIVE CREAM',
    'FLASH:LIFT ESSENCE'
) ORDER BY name;
