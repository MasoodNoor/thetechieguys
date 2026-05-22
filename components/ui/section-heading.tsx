import { cn } from '@/lib/utils'
import { FadeInView } from '@/components/ui/fade-in-view'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <FadeInView
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-muted-foreground leading-relaxed text-pretty',
            align === 'center' && 'max-w-2xl mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeInView>
  )
}
