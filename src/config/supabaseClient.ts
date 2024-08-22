import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://smrgbhcfcgryecbmlvqe.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_KEY) {
    throw new Error('A chave SUPABASE_KEY não está definida no ambiente.');
}

const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
