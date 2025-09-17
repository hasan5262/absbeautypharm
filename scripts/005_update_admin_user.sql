-- Update the admin user email to the new credentials
UPDATE public.admin_users 
SET updated_at = NOW()
WHERE EXISTS (
  SELECT 1 FROM auth.users 
  WHERE auth.users.id = admin_users.id 
  AND auth.users.email = 'admin@absbeautypharm.com'
);

-- Note: In a real application, you would need to:
-- 1. Create a new user account with email 'hasanmerhi8117@outlook.com'
-- 2. Add that user to the admin_users table
-- This script is just for reference - the actual authentication is now handled client-side
