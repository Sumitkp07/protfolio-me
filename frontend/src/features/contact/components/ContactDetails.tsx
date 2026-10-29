import { MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { GithubIcon, LinkedinIcon } from '@/shared/components/BrandIcons'
import { SpotlightCard } from '@/shared/components/SpotlightCard'
import type { Profile } from '@/features/portfolio/types/portfolio'

interface DetailRowProps {
  icon: ReactNode
  label: string
  href?: string
}

const DetailRow = ({ icon, label, href }: DetailRowProps) => {
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

interface ContactDetailsProps {
  profile: Profile
}

export const ContactDetails = ({ profile }: ContactDetailsProps) => (
  <SpotlightCard className="h-full space-y-5 p-8 sm:p-10">
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Find me online</p>
    {profile.linkedin_url && (
      <DetailRow icon={<LinkedinIcon size={18} />} label="LinkedIn" href={profile.linkedin_url} />
    )}
    {profile.github_url && <DetailRow icon={<GithubIcon size={18} />} label="GitHub" href={profile.github_url} />}
    {profile.phone && (
      <DetailRow icon={<Phone size={18} />} label={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
    )}
    <DetailRow icon={<MapPin size={18} />} label={profile.location} />
  </SpotlightCard>
)
