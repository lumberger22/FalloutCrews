import { createClient } from '@supabase/supabase-js';

const URL = 'https://bbepyfqlbhjrcoueyczs.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiZXB5ZnFsYmhqcmNvdWV5Y3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDM0OTAsImV4cCI6MjAyODQxOTQ5MH0.kW6tSP-_fgNqLuQomnwZ7TOJ5OpMNlBUQXmlV60N_A0';

export const supabase = createClient(URL, API_KEY);