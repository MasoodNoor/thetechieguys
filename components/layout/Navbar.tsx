/**
 * Navigation Bar Component
 * Responsive header with mobile menu
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/siteConfig';

interface NavbarProps {
  businessName?: string;
  primaryCta?: string;
  primaryCtaHref?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function Navbar({
  businessName = siteConfig.business.name,
  primaryCta = 'Get In Touch',
  primaryCtaHref = '#contact',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
}: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'packages', label: 'Packages', href: '#packages' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${backgroundColor} border-b border-gray-200 sticky top-0 z-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className={`font-bold text-lg hidden sm:inline ${textColor}`}>{businessName}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium ${textColor} hover:text-blue-600 transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href={primaryCtaHref}>{primaryCta}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${textColor}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`block text-sm font-medium ${textColor} hover:text-blue-600 transition-colors px-4`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
