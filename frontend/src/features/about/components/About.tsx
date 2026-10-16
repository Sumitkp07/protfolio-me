import { Briefcase, GraduationCap, MapPin, Rocket } from 'lucide-react'
import { Reveal } from '@/shared/components/Reveal'
import { Section } from '@/shared/components/Section'
import { SpotlightCard } from '@/shared/components/SpotlightCard'
import { formatPeriod } from '@/shared/utils/date'
import {
  useEducations,
  useProfile,
  useProjects,
} from '@/features/portfolio/hooks/usePortfolioSections'

export const About = () => {
  const profile = useProfile()
  const educations = useEducations()
  const projects = useProjects()

  if (!profile) return null

  const education = educations[0]

  return (
    <Section
      id="about"
      eyebrow="About"
      title="Architecture to deployment, end to end."
      description="I own features from the database schema to the production server."
    >
      <div className="grid gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <SpotlightCard className="h-full p-8">
            <p className="text-lg leading-8 text-muted">{profile.summary}</p>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between p-8">
            <Briefcase className="text-accent" />
            <div>
              <p className="font-display text-5xl font-bold">{profile.years_experience}+</p>
              <p className="mt-1 text-sm text-muted">Years at Duskbyte, trainee to full stack developer</p>
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between gap-6 p-8">
            <MapPin className="text-accent" />
            <div>
              <p className="font-display text-xl font-semibold">{profile.location}</p>
              <p className="mt-1 text-sm text-muted">Hindi (Native), English (Professional)</p>
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between gap-6 p-8">
            <Rocket className="text-accent" />
            <div>
              <p className="font-display text-xl font-semibold">{projects.length} projects shipped</p>
              <p className="mt-1 text-sm text-muted">Client platforms, internal tools and AI products</p>
            </div>
          </SpotlightCard>
        </Reveal>

        {education && (
          <Reveal delay={0.25} className="md:col-span-2">
            <SpotlightCard className="flex h-full flex-col justify-between gap-6 p-8">
              <GraduationCap className="text-accent" />
              <div>
                <p className="font-display text-xl font-semibold">{education.degree}</p>
                <p className="mt-1 text-sm text-muted">
                  {education.institution}
                  <br />
                  {formatPeriod(education.started_on, education.ended_on)}
                  {education.grade && ` · ${education.grade}`}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
