import { createClient } from "@supabase/supabase-js";

const URL = "https://anhtkqykwkrpnoeuqfuq.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuaHRrcXlrd2tycG5vZXVxZnVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMDA5MzQsImV4cCI6MjAwODc3NjkzNH0.P5Xsb5rniiM7rRdqcG-N_-lAuQ8wROdBxl9bYZRbAM8";

export const supabase = createClient(URL, API_KEY);
