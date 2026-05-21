import { siteConfig } from '@/lib/siteConfig'

/** Shared homepage nav — used in Navbar and Footer */
export const mainNavItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: siteConfig.services.id, label: 'Services', href: `#${siteConfig.services.id}` },
  { id: 'packages', label: 'Packages', href: '#packages' },
  {
    id: siteConfig.testimonials.id,
    label: 'Testimonials',
    href: `#${siteConfig.testimonials.id}`,
  },
  { id: siteConfig.faq.id, label: 'FAQ', href: `#${siteConfig.faq.id}` },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const
