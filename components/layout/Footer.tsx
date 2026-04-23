/**
 * Footer Component
 * Displays company info, links, and contact details
 */

import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

interface FooterProps {
  businessName?: string;
  businessDescription?: string;
  email?: string;
  phone?: string;
  address?: string;
  whatsapp?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function Footer({
  businessName = siteConfig.business.name,
  businessDescription = siteConfig.business.description,
  email = siteConfig.business.email,
  phone = siteConfig.business.phone,
  address = siteConfig.business.address,
  whatsapp = siteConfig.business.whatsapp,
  backgroundColor = 'bg-gray-900',
  textColor = 'text-gray-100',
}: FooterProps) {
  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'about', label: 'About', href: '/about' },
  ]
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${backgroundColor} ${textColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="font-bold text-lg">{businessName}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{businessDescription}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h4 className="font-bold mb-6">About</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {siteConfig.business.description}
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {email}
                </a>
                {/* <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {phone}
                </a> */}
                {/* <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  {address}
                </div> */}
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} {businessName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
