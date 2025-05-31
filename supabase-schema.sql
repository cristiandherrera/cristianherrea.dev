-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  ip_address TEXT NOT NULL,
  user_agent TEXT,
  honeypot TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed', 'rejected')),
  rejection_reason TEXT,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on created_at for efficient rate limiting queries
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Create index on ip_address for rate limiting
CREATE INDEX idx_contact_submissions_ip_address ON contact_submissions(ip_address);

-- Create index on email for analytics
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows only the service role to access the table
CREATE POLICY "Service role only" ON contact_submissions
  FOR ALL USING (auth.role() = 'service_role');