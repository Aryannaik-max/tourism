const { createClient } = require('@supabase/supabase.js');

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supaanonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supaanonKey);