import { useState } from 'react'
import { Reveal } from '@/shared/components/Reveal'
import { Section } from '@/shared/components/Section'
import { cn } from '@/shared/utils/cn'
import { ProjectCard } from '@/features/projects/components/ProjectCard'
import { useProjects } from '@/features/portfolio/hooks/usePortfolioSections'

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'featured', label: 'Featured' },
] as const

type FilterId = (typeof filters)[number]['id']

export const Projects = () => {
  const projects = useProjects()
  const [filter, setFilter] = useState<FilterId>('all')

  const visibleProjects = filter === 'featured' ? projects.filter((project) => project.is_featured) : projects

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've shipped."
      description="Client platforms, internal tools and AI products running in production."
    >
      <Reveal className="mb-8 flex gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={cn(
              'rounded-full px-4 py-2 text-sm transition-colors',
              filter === item.id ? 'bg-accent text-white' : 'glass text-muted hover:text-ink',
            )}
          >
            {item.label}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <Reveal key={project.slug} className={cn(project.is_featured && 'md:col-span-2', 'h-full')}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
