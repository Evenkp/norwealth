import { createClient } from '@supabase/supabase-js';

// Anon-key er laget for å ligge i frontend. RLS beskytter dataene.
// Service-key skal ALDRI hit — den hører i Edge Functions.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
