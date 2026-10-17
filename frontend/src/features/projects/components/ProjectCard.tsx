import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SpotlightCard } from '@/shared/components/SpotlightCard'
import { Tag } from '@/shared/components/Tag'
import { cn } from '@/shared/utils/cn'
import type { Project } from '@/features/portfolio/types/portfolio'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasHighlights = project.highlights.length > 0

  return (
    <SpotlightCard className="flex h-full flex-col p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {project.category}
            {project.period && ` · ${project.period}`}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{project.title}</h3>
        </div>
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line/10 text-muted transition-all hover:border-accent hover:bg-brand hover:text-white"
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>

      <p className="mt-4 text-muted">{project.summary}</p>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-3 overflow-hidden pt-5 text-sm text-muted"
          >
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {hasHighlights && (
        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          className="mt-5 inline-flex items-center gap-1 self-start text-sm font-medium text-accent"
        >
          {isExpanded ? 'Hide details' : 'View details'}
          <ChevronDown size={16} className={cn('transition-transform', isExpanded && 'rotate-180')} />
        </button>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    </SpotlightCard>
  )
}
