import type { ComponentPropsWithoutRef, MouseEvent } from 'react'
import { cn } from '@/shared/utils/cn'

export const SpotlightCard = ({ className, onMouseMove, ...props }: ComponentPropsWithoutRef<'div'>) => {
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - bounds.top}px`)
    onMouseMove?.(event)
  }

  return (
    <div
      className={cn('spotlight glass rounded-3xl transition-colors hover:border-accent/40', className)}
      onMouseMove={handleMouseMove}
      {...props}
    />
  )
}
