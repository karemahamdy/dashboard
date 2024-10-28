import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tlkyzpirifkgkmylfzwd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsa3l6cGlyaWZrZ2tteWxmendkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3OTE1MjEsImV4cCI6MjA0NTM2NzUyMX0.zofXQEGnsE6m7RCtbXV133_ASSiuakdiO0yCWs3miVU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
