import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/shared/utils/cn'

export const Container = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)} {...props} />
)
