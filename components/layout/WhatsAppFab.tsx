'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { cn } from '@/lib/utils'

const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '')

const defaultMessage =
  'Hi! I have a question about your business email setup services.'

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        'fixed bottom-6 right-6 z-40',
        'flex h-14 w-14 items-center justify-center rounded-full',
        'bg-[#25D366] text-white shadow-lg',
        'motion-safe:transition-all motion-safe:duration-300',
        'hover:scale-110 hover:shadow-xl',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  )
}
