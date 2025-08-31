const { createClient } = require('@supabase/supabase.js');

const supabaseUrl = meta.env.VITE_SUPABASE_URL;
const supabaseKey = meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

