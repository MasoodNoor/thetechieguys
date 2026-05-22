import { cn } from '@/lib/utils'
import { FadeInView } from '@/components/ui/fade-in-view'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'article' | 'a'
  href?: string
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  as: Component = 'div',
  href,
}: AnimatedCardProps) {
  const cardClassName = cn(
    'rounded-xl border border-border bg-card p-8 shadow-sm',
    'motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out',
    'hover:shadow-lg hover:-translate-y-1 hover:border-primary/25',
    'dark:hover:shadow-primary/5',
    className,
  )

  return (
    <FadeInView delay={delay}>
      {Component === 'a' && href ? (
        <a href={href} className={cn(cardClassName, 'block h-full')}>
          {children}
        </a>
      ) : (
        <Component className={cardClassName}>{children}</Component>
      )}
    </FadeInView>
  )
}
