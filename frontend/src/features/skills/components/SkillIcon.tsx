import { resolveSkillIcon } from '@/features/skills/icons/skillIconRegistry'

interface SkillIconProps {
  skill: string
  size?: number
}

export const SkillIcon = ({ skill, size = 18 }: SkillIconProps) => {
  const source = resolveSkillIcon(skill)

  if (source.kind === 'generic') {
    const Icon = source.icon
    return <Icon size={size} strokeWidth={1.75} aria-hidden="true" />
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={source.icon.path} />
    </svg>
  )
}
