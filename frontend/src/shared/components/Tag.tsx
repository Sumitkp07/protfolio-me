import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/shared/utils/cn'

export const Tag = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-line/10 bg-line/5 px-3 py-1 font-mono text-xs text-muted',
      className,
    )}
    {...props}
  />
)
