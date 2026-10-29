import { Reveal } from '@/shared/components/Reveal'
import { Section } from '@/shared/components/Section'
import { ContactDetails } from '@/features/contact/components/ContactDetails'
import { ContactEmailCard } from '@/features/contact/components/ContactEmailCard'
import { useProfile } from '@/features/portfolio/hooks/usePortfolioSections'

export const Contact = () => {
  const profile = useProfile()

  if (!profile) return null

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about the role."
      description="Hiring for a MERN or full stack position? Email me and I'll reply promptly."
    >
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ContactEmailCard email={profile.email} />
        </Reveal>
        <Reveal delay={0.1}>
          <ContactDetails profile={profile} />
        </Reveal>
      </div>
    </Section>
  )
}
