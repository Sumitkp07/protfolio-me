import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/shared/utils/cn'

type Variant = 'primary' | 'ghost'

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-accent/50',
  ghost: 'glass text-ink hover:-translate-y-0.5 hover:border-accent/50',
}

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => (
  <a
    className={cn(
      'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300',
      variants[variant],
      className,
    )}
    {...props}
  />
)
