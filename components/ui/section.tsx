import { cn } from '@/lib/utils'

const sectionVariants = {
  default: 'bg-background',
  muted: 'bg-muted/40',
  accent: 'bg-primary/5 dark:bg-primary/10',
} as const

type SectionVariant = keyof typeof sectionVariants

interface SectionProps {
  id?: string
  variant?: SectionVariant
  className?: string
  children: React.ReactNode
}

export function Section({
  id,
  variant = 'default',
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        sectionVariants[variant],
        'py-16 md:py-24 transition-colors duration-300',
        className,
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
