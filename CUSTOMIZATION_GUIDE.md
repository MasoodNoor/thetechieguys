# The Techie Guys - Customization Guide

Welcome! This guide explains the site structure and how to customize everything from colors to content.

## 🎯 Quick Start

Everything is configurable through **one central file**: `/lib/siteConfig.ts`

This file contains:
- Business information (name, contact details, etc.)
- Colors and design system
- All page content (headings, descriptions, etc.)
- Pricing tiers and features
- Services
- Testimonials
- Case studies
- FAQ items

**No need to edit components directly** – change `siteConfig.ts` and the entire site updates!

---

## 📁 Project Structure

```
/app
  /page.tsx                    # Homepage - imports all sections
  /services
    /page.tsx                  # Services listing page
    /[slug]/page.tsx          # Individual service page (dynamic)
  /pricing/page.tsx            # Pricing page
  /contact/page.tsx            # Contact page
  /case-studies
    /page.tsx                  # Case studies listing
    /[slug]/page.tsx          # Individual case study (dynamic)
  /layout.tsx                  # Root layout with metadata
  /globals.css                 # Global styles

/components
  /sections/
    Hero.tsx                   # Hero section - reusable
    TrustSignals.tsx           # Trust signals/stats section
    ProblemSolution.tsx        # Problem/solution cards
    Services.tsx               # Services grid
    Pricing.tsx                # Pricing tiers
    WhyChooseUs.tsx            # Differentiators section
    Testimonials.tsx           # Client testimonials
    CaseStudies.tsx            # Case studies showcase
    FAQ.tsx                     # FAQ accordion
    CTA.tsx                     # Call-to-action section
  /layout/
    Navbar.tsx                 # Navigation bar
    Footer.tsx                 # Footer

/lib
  siteConfig.ts               # 🎯 MAIN CONFIG FILE - Edit this!
  types.ts                     # TypeScript interfaces (Sanity.io ready)
  utils.ts                     # Utility functions
```

---

## 🎨 How to Customize

### 1. **Change Business Information**

Edit `/lib/siteConfig.ts`:

```typescript
export const siteConfig = {
  business: {
    name: 'Your Company Name',              // Change your business name
    email: 'your@email.com',                // Change email
    phone: '+44 1234 567890',               // Change phone
    whatsapp: '441234567890',               // WhatsApp number (no +, spaces)
    address: 'Your City, Your Country',     // Change address
    businessesSupported: '100+',            // Update your stat
  },
  // ... rest of config
}
```

### 2. **Change Colors**

Colors are defined in `siteConfig.ts` under `colors`:

```typescript
colors: {
  primary: '#0066CC',        // Primary blue
  primaryDark: '#003D99',    // Darker blue
  accent: '#00AA44',         // Green (trust/success)
  accentDark: '#008833',     // Darker green
  neutral: {
    light: '#F5F7FA',        // Light background
    lighter: '#FFFFFF',      // White
    dark: '#1F2937',         // Dark text
    darker: '#111827',       // Very dark
    border: '#E5E7EB',       // Borders
    text: '#374151',         // Default text color
  },
}
```

All components use these colors via Tailwind classes. To change a color:
1. Update the hex value in `siteConfig.ts`
2. The entire site updates automatically

**Current Theme:**
- Primary: Professional Blue (#0066CC)
- Accent: Trusted Green (#00AA44)
- Neutrals: Clean grays and whites

### 3. **Change Page Content**

All text content is in `siteConfig.ts`:

#### Homepage Hero:
```typescript
hero: {
  headline: 'Your headline here',
  subheadline: 'Your subheadline here',
  ctaPrimary: 'Your button text',
  ctaSecondary: 'Secondary button text',
  badge: 'Your badge text',
}
```

#### Services:
```typescript
services: {
  items: [
    {
      id: 'service-unique-id',
      name: 'Service Name',
      slug: 'service-slug',           // Used in URLs
      shortDescription: '...',
      description: '...',
      benefits: ['Benefit 1', 'Benefit 2', ...],
      // ... more fields
    }
  ]
}
```

#### Pricing:
```typescript
pricing: {
  tiers: [
    {
      name: 'Starter',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        { text: 'Feature name', included: true },
        { text: 'Feature name', included: false },
      ]
    }
  ]
}
```

#### Testimonials:
```typescript
testimonials: {
  items: [
    {
      quote: 'What the client said...',
      author: 'Client Name',
      role: 'Job Title',
      company: 'Company Name',
      location: 'City, Country',
      rating: 5,
    }
  ]
}
```

### 4. **Change Component Colors & Styling**

Components accept props for customization:

```typescript
// In any page, you can override colors:
<Hero
  backgroundColor="bg-blue-900"
  textColor="text-white"
/>

<Pricing
  highlightColor="border-green-600 bg-green-50"
  accentColor="text-green-600"
/>
```

Available props (all components):
- `id`: Section ID (for linking)
- `backgroundColor`: Section background color class
- `accentColor`: Icon/primary color class
- `textColor`: Text color class

---

## 📝 Adding New Services

1. Open `/lib/siteConfig.ts`
2. Find the `services.items` array
3. Add a new service object:

```typescript
{
  id: 'service-new',
  name: 'New Service Name',
  slug: 'new-service-slug',
  shortDescription: 'Short description...',
  icon: 'BookOpen',  // From lucide-react icons
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
  description: 'Full description...',
  problemStatement: 'What problem does it solve?',
  process: ['Step 1', 'Step 2', 'Step 3'],
  outcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
}
```

4. The service automatically appears:
   - On the Services page
   - In the services grid
   - As a dedicated page at `/services/new-service-slug`

---

## 💰 Adding/Editing Pricing Tiers

1. Open `/lib/siteConfig.ts`
2. Find `pricing.tiers`
3. Edit existing tiers or add new ones:

```typescript
{
  id: 'tier-new',
  name: 'Tier Name',
  slug: 'tier-slug',
  monthlyPrice: 299,
  annualPrice: 2990,
  highlighted: true,  // Makes it stand out
  bestFor: 'Target audience',
  features: [
    { id: 'f1', text: 'Feature name', included: true },
    { id: 'f2', text: 'Feature name', included: false },
  ],
  cta: 'Button text',
  ctaVariant: 'primary' | 'secondary',
}
```

---

## 🧠 Sanity.io Ready Structure

All data types have Sanity.io-compatible IDs:

```typescript
// IDs follow Sanity.io naming convention:
id: 'service-email'              // Kebab-case, unique
id: 'testimonial-1'              // Easy to migrate
id: 'pricing-tier-professional'  // Descriptive
```

When you're ready to connect Sanity.io:
1. Create schemas matching `/lib/types.ts`
2. Update `siteConfig.ts` to fetch from Sanity API
3. Components won't change – they just get data from Sanity instead of config

---

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:

```env
NEXT_PUBLIC_BUSINESS_NAME=The Techie Guys
NEXT_PUBLIC_WHATSAPP_NUMBER=441610000000
NEXT_PUBLIC_SUPPORT_EMAIL=hello@thetechieguys.com
```

Then update `siteConfig.ts` to use:
```typescript
business: {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'The Techie Guys',
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'hello@thetechieguys.com',
}
```

---

## 🎯 Key Components Reference

### Hero Component
```typescript
<Hero
  headline="Your headline"
  subheadline="Your subheadline"
  ctaPrimary="Button text"
  badge="Trust badge"
/>
```

### Services Component
Automatically displays all services from `siteConfig.services.items`

### Pricing Component
Automatically displays all tiers from `siteConfig.pricing.tiers`

### Testimonials Component
Automatically displays from `siteConfig.testimonials.items`

All components are reusable and appear on:
- Homepage
- Individual service pages
- Case study pages
- Pricing page

---

## 🚀 Making Changes

**The Simple Way:**
1. Edit `/lib/siteConfig.ts`
2. Save
3. Next.js automatically reloads
4. See changes in preview

**No need to:**
- Edit component files
- Restart the server
- Rebuild CSS

---

## 📱 Responsive Design

All sections are mobile-first and responsive:
- Mobile (0-640px): Single column
- Tablet (641-1024px): 2-column
- Desktop (1025px+): 3-column or more

Tailwind CSS breakpoints:
- `md:` = 768px+
- `lg:` = 1024px+

---

## 🎨 Design System

**Typography:**
- Heading font: Inter (sans-serif)
- Body font: Inter (sans-serif)
- All text is readable and accessible

**Spacing:**
- Uses 8px base unit (Tailwind scales: px, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24, etc.)
- Padding: p-4, p-6, p-8
- Margins: m-4, m-6, m-8
- Gaps: gap-4, gap-6, gap-8

**Buttons:**
- Primary: Blue background
- Secondary: Bordered
- All buttons are 48px height (mobile-friendly)

---

## ❓ FAQ

**Q: How do I change the homepage sections order?**
A: Edit `/app/page.tsx` and reorder the `<Component />` lines.

**Q: Can I hide a section?**
A: Remove it from `/app/page.tsx` or comment it out.

**Q: How do I change button colors?**
A: Edit the `className` in components or the `colors.primary` in `siteConfig.ts`.

**Q: How do I add a new page?**
A: Create a new folder in `/app` with a `page.tsx` file.

**Q: Can I use different colors on different pages?**
A: Yes! Pass color props to components:
```typescript
<Hero backgroundColor="bg-purple-900" />
```

---

## 📞 Next Steps

1. **Customize content** in `siteConfig.ts`
2. **Update business info** (name, email, phone, etc.)
3. **Replace testimonials** with your real client quotes
4. **Update case studies** with your real projects
5. **Test all pages** across mobile, tablet, desktop
6. **Deploy** when ready!

---

## 🚀 When Ready for Sanity.io

Your site is architected for easy CMS integration:

1. Your data types in `/lib/types.ts` match Sanity.io schemas
2. All components accept data props
3. Simply fetch from Sanity API instead of `siteConfig`
4. No component rewrites needed

Example when using Sanity:
```typescript
// Before (current):
const services = siteConfig.services.items

// After (with Sanity):
const services = await client.fetch(`*[_type == "service"]`)

// Components work exactly the same!
<Services services={services} />
```

---

**Happy customizing! 🎉**
