-- Update ABS Beauty Pharm products batch 2 with real product images
-- Products 11-20 with actual product photos

UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b31be91b-06c5-491b-bc80-8df54b7c9639.jpg-65Z3EFSoisyajZMsbkKEDo9737bMqI.jpeg' WHERE name = 'AQUA:BALANCE LOTION';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/af8f068a-4277-4db8-a528-f381c4464c6f-Hm82L5xOCUSQb37AsL9DR6JQ5jbxCy.png' WHERE name = 'FRESH POST:PEEL LOTION';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/051e4276-61f0-4d41-bc1a-bba7ae3b393a-81OUIJyWzJNL3yj5vJbxImdVYaL9Jv.png' WHERE name = 'FRESH POST:PEEL CREAM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1e565bab-53c5-4ed8-a050-381840d52d56.jpg-OODQvtiqxn5etxcYgTcJkKdY0X17aL.jpeg' WHERE name = 'HYDRO:COMPLEX MASK';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7e53a415-78cb-499c-9031-24b720699aad-YJyMh3jeXJXtgNwFypDf0zp9E63V9T.png' WHERE name = 'FRESH:LIFT CREAM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7d542c90-4f9b-4212-94f7-38cdf9c56179-oGCdG0Qrg1FqDUHdpJtsmYXOcvAcos.png' WHERE name = 'HYDRO:ACTIVE CREAM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9964df53-aa69-4374-907c-9b79172e9ea9-wLovEx8osTKI1CBN3Wg74jho7jVnfL.png' WHERE name = 'HAND SOFT:TOUCH CREAM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b34028c1-ecf2-4899-a8c0-99fcbe09fd4f-r1DMvxwY6gOH7dyrICtFS63XTzBsRp.png' WHERE name = 'NUTRI:ACTIVE INTENSE CREAM';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e7afffc-2392-442d-bad5-98dcb6625764-g0u1dC9xQQ9pMscbMnxJIO07XSPTVB.png' WHERE name = 'ORANGE:LIFT MASK';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65a59401-16f5-465e-9afb-712fed7d2110-WzE4pg7mWi9vqPSZDWIqEi8dEgNldA.png' WHERE name = 'CONTOUR:FACE MASK';

-- Verify the updates
SELECT name, image_url FROM products WHERE name IN (
    'AQUA:BALANCE LOTION',
    'FRESH POST:PEEL LOTION', 
    'FRESH POST:PEEL CREAM',
    'HYDRO:COMPLEX MASK',
    'FRESH:LIFT CREAM',
    'HYDRO:ACTIVE CREAM',
    'HAND SOFT:TOUCH CREAM',
    'NUTRI:ACTIVE INTENSE CREAM',
    'ORANGE:LIFT MASK',
    'CONTOUR:FACE MASK'
) ORDER BY name;
