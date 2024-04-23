import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://mmtixvyvrhofccnmfjfw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tdGl4dnl2cmhvZmNjbm1mamZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3ODUzMDYsImV4cCI6MjAyOTM2MTMwNn0.1-x_zDZ40hXj4txa1XwRd4fu46zmq4tlMrCk7l_41DU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;