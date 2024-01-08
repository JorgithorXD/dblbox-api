import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://kznwoxarmlkosyxhotmi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6bndveGFybWxrb3N5eGhvdG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2ODY5NTcsImV4cCI6MjAyMDI2Mjk1N30.DB2w9r_Msul6ury5puskQ34MNUr15jgMziDFp84-c2k');

export {
  supabase
}