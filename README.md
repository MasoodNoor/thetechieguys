# The Techie Guys — Website

Business website for **The Techie Guys** — email and domain infrastructure specialists serving UK and international small businesses.

Built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Sanity.io ready for future CMS integration.

---

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Styling** — Tailwind CSS v4
- **Components** — shadcn/ui + Radix UI
- **Language** — TypeScript
- **Package Manager** — pnpm
- **Deployment** — Vercel
- **Analytics** — Vercel Analytics
- **Email** — Resend
- **CMS (future)** — Sanity.io

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

> Always use `pnpm` — not npm or yarn. The project uses `pnpm-lock.yaml`.

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### 3. Run the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
/app
  layout.tsx                  # Root layout, metadata, fonts
  page.tsx                    # Homepage — imports all sections
  globals.css                 # Global styles
  /actions
    contact.ts                # Contact form server action (Resend)

/components
  /layout
    Navbar.tsx                # Navigation bar
    Footer.tsx                # Footer
  /sections
    Hero.tsx                  # Hero section
    WhyChooseUs.tsx           # Differentiators / about
    Services.tsx              # Services grid
    Pricing.tsx               # Pricing tiers
    Testimonials.tsx          # Client testimonials
    ContactSection.tsx        # Contact form
    CTA.tsx                   # Call to action banner
    FAQ.tsx                   # FAQ accordion
  /ui                         # shadcn/ui components

/lib
  siteConfig.ts               # ← MAIN CONFIG FILE (edit this)
  types.ts                    # TypeScript interfaces
  utils.ts                    # Utility functions

/public                       # Static assets and icons
```

---

## Editing Content

**All content lives in one file — `lib/siteConfig.ts`**

You do not need to touch any component files for content changes. Edit `siteConfig.ts` and the entire site updates automatically.

### What you can change there

| Section | What to edit |
|---|---|
| Business info | Name, email, phone, WhatsApp, address |
| Hero | Headline, subheadline, badge, CTA buttons |
| Services | Service names, descriptions, pricing |
| Pricing tiers | Names, prices, features, highlighted tier |
| Testimonials | Quotes, author names, companies |
| Contact | Contact methods, response time |
| SEO | Title, description, OG image, base URL |

---

## Contact Form

The contact form uses **Resend** to deliver submissions to your email.

To activate it:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to `.env.local` and Vercel environment variables
4. Verify your domain (`thetechieguys.com`) in Resend dashboard
5. Uncomment the Resend code in `app/actions/contact.ts`

---

## Deployment

The site is deployed on **Vercel** and connected to `thetechieguys.com`.

Every push to `main` triggers an automatic deployment.

```bash
git add .
git commit -m "your message"
git push
```

### DNS (Namecheap → Vercel)

| Type | Host | Value |
|---|---|---|
| A Record | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

---

## Environment Variables

| Variable | Where to get it | Required |
|---|---|---|
| `RESEND_API_KEY` | resend.com dashboard | For contact form |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity dashboard | Future CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dashboard | Future CMS |
| `SANITY_API_TOKEN` | Sanity dashboard | Future CMS |

Add all variables to:
- `.env.local` for local development
- Vercel dashboard → Settings → Environment Variables for production

---

## Useful Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Run production build locally
pnpm lint         # Check for code errors
pnpm approve-builds  # Approve build scripts (run once after install)
```

---

## Sanity.io (Future CMS)

The project is architected for Sanity.io integration. When ready:

- Data types in `lib/types.ts` match Sanity schema structure
- All components accept data as props
- Replace `siteConfig` data with Sanity API fetches
- No component rewrites needed

```ts
// Current
const services = siteConfig.services.items

// With Sanity (future)
const services = await client.fetch(`*[_type == "service"]`)
```

---

## Domain

**Live site:** [thetechieguys.com](https://thetechieguys.com)  
**Registrar:** Namecheap  
**DNS managed via:** Vercel