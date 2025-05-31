import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase, ContactSubmission } from '@/app/utils/supabase';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Configuration
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5');
const RATE_LIMIT_HOURS = parseInt(process.env.RATE_LIMIT_WINDOW_HOURS || '1');
const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL || 'cristian.herrera.dev@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL || 'noreply@cristianherrera.dev';

// Helper function to get client IP
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 
    request.headers.get('x-real-ip') || 
    request.ip || 
    'unknown';
  return ip;
}

// Common disposable email domains
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
  'throwawaymail.com', 'yopmail.com', 'trashmail.com', 'getnada.com',
  'maildrop.cc', 'dispostable.com', 'tempr.email', 'throwaway.email',
  'guerrillamail.info', 'guerrillamail.net', 'guerrillamail.org',
  'baxima.com', 'emlpro.com', 'emlhub.com', 'malnom.com'
];

// Validation functions
function validateEmail(email: string): { valid: boolean; reason?: string } {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { valid: false, reason: 'Invalid email format' };
  }
  
  // Check for disposable email domains
  const domain = email.split('@')[1].toLowerCase();
  if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
    return { valid: false, reason: 'Please use a permanent email address' };
  }
  
  // Check for suspicious patterns in domain
  const suspiciousDomainPatterns = [
    /^\d{5,}\./, // Domains starting with many numbers
    /temp/i, // Contains "temp"
    /trash/i, // Contains "trash"
    /fake/i, // Contains "fake"
    /disposable/i, // Contains "disposable"
  ];
  
  for (const pattern of suspiciousDomainPatterns) {
    if (pattern.test(domain)) {
      return { valid: false, reason: 'Please use a permanent email address' };
    }
  }
  
  return { valid: true };
}

function validateMessageContent(message: string): { valid: boolean; reason?: string } {
  // Check message length
  if (message.length < 10) {
    return { valid: false, reason: 'Message is too short (minimum 10 characters)' };
  }
  
  if (message.length > 1000) {
    return { valid: false, reason: 'Message is too long (maximum 1000 characters)' };
  }
  
  // Check for suspicious patterns (basic spam detection)
  const suspiciousPatterns = [
    /https?:\/\//gi, // URLs
    /\b(?:viagra|cialis|casino|lottery|winner|prize)\b/gi, // Common spam words
    /(.)\1{5,}/g, // Repeated characters (e.g., "aaaaaaa")
  ];
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(message)) {
      return { valid: false, reason: 'Message contains suspicious content' };
    }
  }
  
  return { valid: true };
}

// Rate limiting check
async function checkRateLimit(ip: string): Promise<{ allowed: boolean; count: number }> {
  const windowStart = new Date();
  windowStart.setHours(windowStart.getHours() - RATE_LIMIT_HOURS);
  
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('id')
    .eq('ip_address', ip)
    .gte('created_at', windowStart.toISOString())
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Rate limit check error:', error);
    // In case of error, allow the request but log it
    return { allowed: true, count: 0 };
  }
  
  const count = data?.length || 0;
  return { allowed: count < RATE_LIMIT_MAX, count };
}

// Email template
function createEmailHTML(data: { name: string; email: string; subject: string; message: string; }): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #3b82f6; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
          .content { background: #f4f4f4; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 3px; }
          .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            This email was sent from your portfolio contact form
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subject, message, website } = body;
    
    // Get client information
    const ip = getClientIp(request);
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // 1. Honeypot check
    if (website) {
      console.warn(`Honeypot triggered from IP: ${ip}`);
      
      // Log the rejected submission
      await supabase
        .from('contact_submissions')
        .insert({
          name: name || 'Bot',
          email: email || 'bot@spam.com',
          subject: subject || 'Honeypot Triggered',
          message: message || 'Honeypot field was filled',
          ip_address: ip,
          user_agent: userAgent,
          honeypot: website,
          status: 'rejected',
          rejection_reason: 'Honeypot field filled'
        });
      
      // Return success to confuse bots
      return NextResponse.json({ success: true });
    }
    
    // 2. Check required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // 3. Validate email format
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      // Log the rejected submission
      await supabase
        .from('contact_submissions')
        .insert({
          name: name,
          email: email,
          subject: subject,
          message: message,
          ip_address: ip,
          user_agent: userAgent,
          honeypot: null,
          status: 'rejected',
          rejection_reason: emailValidation.reason
        });
      
      return NextResponse.json(
        { error: emailValidation.reason },
        { status: 400 }
      );
    }
    
    // 4. Validate message content
    const messageValidation = validateMessageContent(message);
    if (!messageValidation.valid) {
      // Log the rejected submission
      await supabase
        .from('contact_submissions')
        .insert({
          name: name,
          email: email,
          subject: subject,
          message: message,
          ip_address: ip,
          user_agent: userAgent,
          honeypot: null,
          status: 'rejected',
          rejection_reason: messageValidation.reason
        });
      
      return NextResponse.json(
        { error: messageValidation.reason },
        { status: 400 }
      );
    }
    
    // 5. Check rate limit
    const { allowed, count } = await checkRateLimit(ip);
    if (!allowed) {
      // Log the rejected submission
      await supabase
        .from('contact_submissions')
        .insert({
          name: name,
          email: email,
          subject: subject,
          message: message,
          ip_address: ip,
          user_agent: userAgent,
          honeypot: null,
          status: 'rejected',
          rejection_reason: `Rate limit exceeded: ${count} attempts in the last hour`
        });
      
      return NextResponse.json(
        { error: `Rate limit exceeded. You've sent ${count} messages in the last hour. Please try again later.` },
        { status: 429 }
      );
    }
    
    // 6. Prepare submission data
    const submission: ContactSubmission = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      ip_address: ip,
      user_agent: userAgent,
      honeypot: website || null,
      status: 'pending'
    };
    
    // 7. Save to database
    const { data: savedSubmission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert(submission)
      .select()
      .single();
    
    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to process submission' },
        { status: 500 }
      );
    }
    
    // 8. Send email
    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `[Portfolio Contact] ${subject}`,
        html: createEmailHTML({ name, email, subject, message }),
        replyTo: email
      });
      
      if (emailError) {
        throw emailError;
      }
      
      // Update submission status to sent
      await supabase
        .from('contact_submissions')
        .update({ status: 'sent' })
        .eq('id', savedSubmission.id);
      
      console.log('Email sent successfully:', emailData);
    } catch (emailError) {
      console.error('Email error:', emailError);
      
      // Update submission status with error
      await supabase
        .from('contact_submissions')
        .update({ 
          status: 'failed',
          error_message: emailError instanceof Error ? emailError.message : 'Unknown email error'
        })
        .eq('id', savedSubmission.id);
      
      // Still return success to user (we have their submission saved)
      // You can manually review failed submissions in Supabase
    }
    
    // 9. Return success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been received. I\'ll get back to you soon!'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}