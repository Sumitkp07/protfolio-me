import { SkillIcon } from '@/features/skills/components/SkillIcon'

interface SkillBadgeProps {
  skill: string
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <li className="group flex items-center gap-2.5 rounded-2xl border border-line/10 bg-line/5 px-3.5 py-2.5 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-ink">
    <span className="text-accent transition-transform duration-300 group-hover:scale-110">
      <SkillIcon skill={skill} />
    </span>
    {skill}
  </li>
)
