import type { LucideIcon } from 'lucide-react'
import type { SimpleIcon } from 'simple-icons'

export type SkillIconSource =
  | { kind: 'brand'; icon: SimpleIcon }
  | { kind: 'generic'; icon: LucideIcon }
