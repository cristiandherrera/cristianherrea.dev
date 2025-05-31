# Contact Form Setup Guide

This guide will help you set up the secure contact form for your portfolio.

## Features Implemented

- ✅ **Honeypot Field**: Hidden field to catch bots
- ✅ **Rate Limiting**: 5 submissions per hour per IP address
- ✅ **Input Validation**: Email format, required fields, message length
- ✅ **Content Filtering**: Blocks URLs and suspicious content
- ✅ **Disposable Email Blocking**: Rejects temporary/fake email addresses
- ✅ **Email Service**: Sends emails via Resend
- ✅ **Database Storage**: Stores all submissions in Supabase
- ✅ **Rejection Tracking**: Logs rejected attempts with reasons
- ✅ **Error Handling**: Specific error messages for each validation failure
- ✅ **User Feedback**: Clear, actionable error messages displayed to users

## Setup Instructions

### 1. Resend Setup

1. Sign up at [https://resend.com](https://resend.com)
2. Verify your domain or use their testing domain
3. Get your API key from the dashboard
4. Add to `.env.local`: `RESEND_API_KEY=re_your_key_here`

### 2. Supabase Setup

1. Create a project at [https://supabase.com](https://supabase.com)
2. Get your project URL and keys from Settings > API
3. Run the SQL schema in Supabase SQL Editor:
   ```sql
   -- Copy contents from supabase-schema.sql
   ```
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

### 3. Configure Email Settings

Update these in `.env.local`:
```
CONTACT_FORM_TO_EMAIL=your-email@example.com
CONTACT_FORM_FROM_EMAIL=noreply@yourdomain.com
```

**Note**: The FROM email must be verified in Resend.

### 4. Optional: Adjust Rate Limits

Default is 5 messages per hour. To change:
```
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_HOURS=1
```

## Testing the Form

1. Start the development server: `npm run dev`
2. Navigate to your contact section
3. Fill out and submit the form
4. Check:
   - Email arrives in your inbox
   - Submission appears in Supabase dashboard
   - Rate limiting works (try submitting 6 times)
   - Honeypot works (use browser dev tools to fill the hidden field)

## Security Features

### Honeypot
- Hidden field named "website"
- If filled, submission is silently rejected
- Bots typically fill all fields

### Rate Limiting
- Tracks submissions by IP address
- Configurable limits
- Returns 429 status when exceeded

### Content Validation
- Message length: 10-1000 characters
- No URLs allowed (prevents spam)
- Blocks common spam keywords
- Prevents repeated characters

### Database Logging
- All submissions are logged
- Includes IP address and user agent
- Failed email sends are marked for manual review

## Monitoring

Check Supabase dashboard regularly for:
- Failed email sends (status = 'failed')
- Rejected submissions (status = 'rejected')
- Honeypot triggers (honeypot field not null)
- Rate limit violations (rejection_reason contains 'Rate limit')
- Disposable email attempts (rejection_reason = 'Please use a permanent email address')

### Useful SQL Queries

**View all rejected submissions:**
```sql
SELECT email, rejection_reason, created_at, ip_address
FROM contact_submissions
WHERE status = 'rejected'
ORDER BY created_at DESC;
```

**Count rejections by reason:**
```sql
SELECT rejection_reason, COUNT(*) as count
FROM contact_submissions
WHERE status = 'rejected'
GROUP BY rejection_reason
ORDER BY count DESC;
```

**Find repeat offenders:**
```sql
SELECT ip_address, COUNT(*) as attempts
FROM contact_submissions
WHERE status = 'rejected'
GROUP BY ip_address
HAVING COUNT(*) > 3
ORDER BY attempts DESC;
```

## Troubleshooting

### Emails not sending
1. Verify Resend API key
2. Check FROM email is verified in Resend
3. Look for errors in Vercel/server logs

### Rate limiting not working
1. Check Supabase connection
2. Verify SERVICE_ROLE_KEY is set (not ANON_KEY)
3. Check timezone settings

### Form submissions failing
1. Check browser console for errors
2. Verify all environment variables are set
3. Check Vercel function logs

## Production Deployment

1. Add all environment variables to Vercel
2. Ensure Supabase allows connections from Vercel
3. Monitor initial submissions closely
4. Consider adding monitoring (e.g., Sentry)

## Future Enhancements

Consider adding:
- CAPTCHA for additional bot protection
- Email templates for auto-replies
- Admin dashboard for managing submissions
- Webhook notifications for new submissions
- Archive old submissions automatically