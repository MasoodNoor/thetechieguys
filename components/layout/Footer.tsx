import { Mail, MessageCircle, Facebook, Instagram } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { mainNavItems } from '@/lib/navigation'

interface FooterProps {
  businessName?: string
  businessDescription?: string
  email?: string
  phone?: string
  address?: string
  whatsapp?: string
}

export function Footer({
  businessName = siteConfig.business.name,
  businessDescription = siteConfig.business.description,
  email = siteConfig.business.email,
  phone = siteConfig.business.phone,
  address = siteConfig.business.address,
  whatsapp = siteConfig.business.whatsapp,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border text-card-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/icon.svg"
                  alt={businessName}
                  className="w-10 h-10"
                  width={40}
                  height={40}
                />
                <span className="font-bold text-lg">{businessName}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {businessDescription}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {mainNavItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">About</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {siteConfig.business.description}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  {email}
                </a>
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-emerald-500 text-sm transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                {siteConfig.business.social?.facebook && (
                  <a
                    href={siteConfig.business.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                )}
                {siteConfig.business.social?.instagram && (
                  <a
                    href={siteConfig.business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 text-sm transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                &copy; {currentYear} {businessName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
