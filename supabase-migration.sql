-- Migration to add rejected status and rejection_reason field

-- 1. Add new column for rejection reason
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS rejection_reason TEXT;

-- 2. Update the status check constraint to include 'rejected'
ALTER TABLE contact_submissions 
DROP CONSTRAINT IF EXISTS contact_submissions_status_check;

ALTER TABLE contact_submissions 
ADD CONSTRAINT contact_submissions_status_check 
CHECK (status IN ('pending', 'sent', 'failed', 'rejected'));

-- Verify the changes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
ORDER BY ordinal_position;