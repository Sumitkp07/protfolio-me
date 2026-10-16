import { Reveal } from '@/shared/components/Reveal'
import { SpotlightCard } from '@/shared/components/SpotlightCard'
import { formatPeriod } from '@/shared/utils/date'
import type { Experience } from '@/features/portfolio/types/portfolio'

interface ExperienceItemProps {
  experience: Experience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => (
  <Reveal className="relative pl-10">
    <span className="absolute left-0 top-8 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-base">
      {experience.is_current && <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />}
    </span>
    <SpotlightCard className="p-7">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-xl font-semibold">{experience.role}</h3>
          <p className="text-accent">
            {experience.company} · {experience.location}
          </p>
        </div>
        <p className="font-mono text-sm text-muted">
          {formatPeriod(experience.started_on, experience.ended_on)}
        </p>
      </div>
      <ul className="mt-5 space-y-3 text-muted">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  </Reveal>
)
