import type { ReactNode } from 'react'
import { Container } from '@/shared/components/Container'
import { Reveal } from '@/shared/components/Reveal'
import { cn } from '@/shared/utils/cn'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  className?: string
  children: ReactNode
}

export const Section = ({ id, eyebrow, title, description, className, children }: SectionProps) => (
  <section id={id} className={cn('relative py-24 sm:py-32', className)}>
    <Container>
      <Reveal className="mb-14 max-w-2xl">
        <p className="mb-3 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">{title}</h2>
        {description && <p className="mt-4 text-lg text-muted">{description}</p>}
      </Reveal>
      {children}
    </Container>
  </section>
)
