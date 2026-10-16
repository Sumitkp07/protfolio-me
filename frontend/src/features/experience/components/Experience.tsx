import { Section } from '@/shared/components/Section'
import { ExperienceItem } from '@/features/experience/components/ExperienceItem'
import { useExperiences } from '@/features/portfolio/hooks/usePortfolioSections'

export const Experience = () => {
  const experiences = useExperiences()

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've been building."
      description="From a React trainee to owning production platforms."
    >
      <div className="relative space-y-6">
        <span className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-accent via-line/20 to-transparent" />
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Section>
  )
}
