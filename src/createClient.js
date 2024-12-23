import { createClient } from "@supabase/supabase-js"

export const supabase = createClient (
    "https://yszhdlbvftqiulebdzcv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzemhkbGJ2ZnRxaXVsZWJkemN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MDUxNTQsImV4cCI6MjA1MDI4MTE1NH0.eBvJCjWABPLecGclmV0kxifuz1OvN0jwXPx2odmITBI")