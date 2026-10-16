import { Reveal } from '@/shared/components/Reveal'
import { Section } from '@/shared/components/Section'
import { SpotlightCard } from '@/shared/components/SpotlightCard'
import { Tag } from '@/shared/components/Tag'
import { useSkillCategories } from '@/features/portfolio/hooks/usePortfolioSections'

export const Skills = () => {
  const categories = useSkillCategories()

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolkit."
      description="Technologies I use to design, build, test and deploy."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.06}>
            <SpotlightCard className="h-full p-7">
              <h3 className="font-display text-lg font-semibold">{category.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
