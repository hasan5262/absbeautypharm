-- Update ABS Beauty Pharm products batch 4 with real product images
-- Products 31-39: Hair care, mesotherapy solutions, and sensitive skin toner

UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3289aaa3-cd05-457f-be1f-b2128b5daca8.jpg-kf2wlMovGldBVC9MvRHZHMshzavY3c.jpeg' WHERE name = 'Hair X Vita Line B+';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/533642f3-e5b6-4381-833a-ba78bc21ecc8.jpg-fGwaj6903fZNrhqbb4iQTtH8NGP7HT.jpeg' WHERE name = 'Hair X B Complex';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5983a4e3-2490-4a7b-8f09-b5666bbdbdcb.jpg-Hl09f1gVg7trgjlSk7bqjXTKJFP8jl.jpeg' WHERE name = 'Ginkgo';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fe281a9-ecbd-4d86-b91a-ba937c1ca19b.jpg-xOcJy8CxW4PqggbUEekamL3mBi89lI.jpeg' WHERE name = 'DVL Capyl';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b87d724-82ca-42a9-bb09-1253e602db49.jpg-74nGfcJndNY6AvARxpXgUP98JestVC.jpeg' WHERE name = 'PHDC Forte';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cd4ea03f-9941-480f-a1ae-caeb564f617e.jpg-2NO3GFsW9Ear39D7GGxfF1iELkmnHN.jpeg' WHERE name = 'Phyto Slim';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5661dd00-5d25-4775-acf1-0ab6bac89f7e.jpg-RxyTtSAW4cinnvW9jPg5N6ipmT4w7w.jpeg' WHERE name = 'Nucleospire Revitalizing Complex A Shine';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d25a6774-f466-43ad-b717-430a82fd8d11.jpg-mcHLIi4dpbITMhUtgQLkmM9noObXVw.jpeg' WHERE name = 'Vita Line C';
UPDATE products SET image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/64f70006-70be-4bfb-896f-c91818db6e80.jpg-ebI2S4nIIW9ynQTxeuxGKuo8cmFn70.jpeg' WHERE name = 'SENSITIVE TONER';

-- Verify the updates
SELECT name, image_url FROM products WHERE name IN (
    'Hair X Vita Line B+',
    'Hair X B Complex', 
    'Ginkgo',
    'DVL Capyl',
    'PHDC Forte',
    'Phyto Slim',
    'Nucleospire Revitalizing Complex A Shine',
    'Vita Line C',
    'SENSITIVE TONER'
) ORDER BY id;
