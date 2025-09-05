const { createClient } = require('@supabase/supabase.js');

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supasecretKey = import.meta.env.SUPABASE_SECRET_KEY;

export const supabase = createClient(supabaseUrl, supasecretKey);