'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { siteConfig } from '@/lib/siteConfig'
import { mainNavItems } from '@/lib/navigation'
import { cn } from '@/lib/utils'

interface NavbarProps {
  businessName?: string
  primaryCta?: string
  primaryCtaHref?: string
}

export function Navbar({
  businessName = siteConfig.business.name,
  primaryCta = 'Get In Touch',
  primaryCtaHref = '#contact',
}: NavbarProps) {
  const navItems = mainNavItems
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 border-b border-border/60',
        'bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70',
        'transition-colors duration-300',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="#home"
            className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/icon.svg"
              alt={businessName}
              className="w-10 h-10"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg hidden sm:inline text-foreground">
              {businessName}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm">
              <a href={primaryCtaHref}>{primaryCta}</a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 rounded-md transition-colors duration-300 hover:bg-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-out',
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0',
          )}
        >
          <div className="space-y-1 pt-2">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  'block text-sm font-medium text-foreground/90 hover:text-primary',
                  'px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-accent/50',
                  'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2',
                )}
                style={{ animationDelay: isOpen ? `${index * 50}ms` : undefined }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <Button asChild className="w-full" size="sm">
                <a href={primaryCtaHref} onClick={() => setIsOpen(false)}>
                  {primaryCta}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
