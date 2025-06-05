# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture Overview

This is a Next.js 15 portfolio website with the following architecture:

### Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript with strict mode
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend API
- **Deployment**: Optimized for Vercel

### Key Architectural Decisions

1. **Performance Optimization**
   - Lazy loading for all sections except Hero using `dynamic` imports
   - GPU-optimized animations with `transform3d` and `will-change`
   - Responsive performance (reduced effects on mobile/low-end devices)
   - `prefers-reduced-motion` support throughout

2. **Component Structure**
   - `app/components/` - Reusable UI components (Navbar, Footer, AnimatedBackground)
   - `app/sections/` - Page sections loaded dynamically (About, Experience, Projects, Contact)
   - Client components marked with `"use client"` directive

3. **Contact Form Security**
   - Comprehensive anti-spam protection in `/app/api/contact/route.ts`
   - Honeypot field, rate limiting (5/hour), disposable email blocking
   - All submissions logged to Supabase with rejection tracking
   - Validation includes email format, message length, content filtering

4. **Environment Variables Required**
   ```
   RESEND_API_KEY
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   SUPABASE_SERVICE_ROLE_KEY
   CONTACT_FORM_TO_EMAIL
   CONTACT_FORM_FROM_EMAIL
   RATE_LIMIT_MAX_REQUESTS (optional, default: 5)
   RATE_LIMIT_WINDOW_HOURS (optional, default: 1)
   ```

5. **Database Schema**
   - Single table: `contact_submissions`
   - Tracks all submission attempts with status and rejection reasons
   - See `supabase-schema.sql` for structure

6. **Styling Approach**
   - Tailwind CSS with custom glass-morphism effects
   - Dark theme with gradient animations
   - Mobile-first responsive design
   - Performance-conscious animations

### Important Files
- `/app/api/contact/route.ts` - Contact form API with all security features
- `/app/utils/supabase.ts` - Supabase client and TypeScript interfaces
- `/app/page.tsx` - Main page with lazy-loaded sections
- `/app/layout.tsx` - Root layout with fonts and global components
- `/CONTACT_FORM_SETUP.md` - Detailed setup guide for contact form

## Development Notes

- The project uses TypeScript path aliases: `@/*` maps to the root directory
- All components should follow the existing glass-morphism design pattern
- Contact form submissions require both Resend and Supabase to be configured
- The site is optimized for Vercel deployment with edge functions