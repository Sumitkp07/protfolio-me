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
      className={cn('spotlight glass rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_24px_48px_-20px_rgb(var(--accent)/0.55)]', className)}
      onMouseMove={handleMouseMove}
      {...props}
    />
  )
}
