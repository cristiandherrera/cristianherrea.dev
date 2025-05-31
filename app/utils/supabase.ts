import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseServiceKey)

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  ip_address: string
  user_agent: string
  honeypot: string | null
  created_at?: string
  status: 'pending' | 'sent' | 'failed' | 'rejected'
  rejection_reason?: string | null
  error_message?: string | null
}