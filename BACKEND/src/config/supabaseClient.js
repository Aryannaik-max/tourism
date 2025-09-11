const { createClient } = require('@supabase/supabase-js');
const { SUPABASE_URL, SUPABASE_ANON_KEY } = require('./serverConfig');


const supabaseUrl = SUPABASE_URL;
const supabaseanonKey = SUPABASE_ANON_KEY;

 const supabase = createClient(supabaseUrl, supabaseanonKey);

module.exports = supabase;