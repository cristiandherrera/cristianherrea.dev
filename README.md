# cristianherrera.dev

A modern, fast portfolio website built with Next.js and Tailwind CSS.

## Features

- ⚡ Blazing fast performance with Next.js 15 and Turbopack
- 🎨 Clean, modern design with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🌙 Dark theme with glass-morphism effects
- ⌨️ Typing animation on hero section
- 🔄 Smooth scroll navigation with active section tracking
- 📧 Secure contact form with comprehensive anti-spam protection

## Contact Form Security

The contact form includes enterprise-grade security features:

- 🍯 **Honeypot Protection** - Hidden field catches automated bots
- 🚦 **Rate Limiting** - IP-based limits prevent spam floods (5/hour default)
- 🔍 **Input Validation** - Validates email format and message content
- 🚫 **Disposable Email Blocking** - Rejects temporary/fake email services
- 🛡️ **Content Filtering** - Blocks URLs and suspicious patterns
- 📊 **Submission Tracking** - All attempts logged in Supabase for analysis
- ✉️ **Email Delivery** - Reliable sending via Resend API
- 💬 **User Feedback** - Clear, specific error messages for validation failures

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React 19
- Resend (Email API)
- Supabase (Database)

## Project Structure

```
cristianherrera.dev/
├── app/
│   ├── api/                                    # API routes
│      └── contact/                         # Contact form endpoint
│   ├── components/                     # Reusable components
│   ├── sections/                            # Page sections
│   ├── utils/                                  # Utility functions
│   ├── hooks/                               # Custom React hooks
│   ├── layout.tsx                           # Root layout
│   ├── page.tsx                             # Home page
│   └── globals.css                         # Global styles
├── public/                                    # Static assets
│   └── tech/                                  # Technology icons
```
