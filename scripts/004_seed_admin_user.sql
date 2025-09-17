-- Insert a default admin user (replace with your actual user ID after signup)
-- This is just an example - in production, you'd add admin users through a secure process
INSERT INTO public.admin_users (id, role) 
SELECT id, 'admin' 
FROM auth.users 
WHERE email = 'admin@absbeautypharm.com'
ON CONFLICT (id) DO NOTHING;
