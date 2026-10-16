import { Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { GithubIcon, LinkedinIcon } from '@/shared/components/BrandIcons'
import { Reveal } from '@/shared/components/Reveal'
import { Section } from '@/shared/components/Section'
import { SpotlightCard } from '@/shared/components/SpotlightCard'
import { ContactForm } from '@/features/contact/components/ContactForm'
import { useProfile } from '@/features/portfolio/hooks/usePortfolioSections'

interface ContactLinkProps {
  icon: ReactNode
  label: string
  href?: string
}

const ContactLink = ({ icon, label, href }: ContactLinkProps) => {
  const content = (
    <span className="flex items-center gap-3 text-muted transition-colors group-hover:text-ink">
      <span className="text-accent">{icon}</span>
      {label}
    </span>
  )

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group block">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  )
}

export const Contact = () => {
  const profile = useProfile()

  if (!profile) return null

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="Have a project, a role or a question? Send a message and I'll get back to you."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <SpotlightCard className="h-full space-y-5 p-8">
            <ContactLink icon={<Mail size={18} />} label={profile.email} href={`mailto:${profile.email}`} />
            {profile.phone && (
              <ContactLink icon={<Phone size={18} />} label={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            )}
            <ContactLink icon={<MapPin size={18} />} label={profile.location} />
            {profile.github_url && (
              <ContactLink icon={<GithubIcon size={18} />} label="GitHub" href={profile.github_url} />
            )}
            {profile.linkedin_url && (
              <ContactLink icon={<LinkedinIcon size={18} />} label="LinkedIn" href={profile.linkedin_url} />
            )}
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="p-8">
            <ContactForm />
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  )
}
