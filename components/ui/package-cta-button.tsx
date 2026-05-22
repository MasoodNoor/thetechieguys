'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { getPackageEnquiryHref } from '@/lib/package-enquiry'
import { cn } from '@/lib/utils'

interface PackageCtaButtonProps {
  slug: string
  label: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function PackageCtaButton({
  slug,
  label,
  variant = 'primary',
  className,
}: PackageCtaButtonProps) {
  const router = useRouter()

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    router.push(getPackageEnquiryHref(slug))
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.dispatchEvent(new CustomEvent('package-selected', { detail: { slug } }))
  }

  return (
    <Button
      asChild
      className={cn('w-full mb-8', className)}
      variant={variant === 'primary' ? 'default' : 'outline'}
      size="lg"
    >
      <a href={getPackageEnquiryHref(slug)} onClick={handleClick}>
        {label}
      </a>
    </Button>
  )
}
