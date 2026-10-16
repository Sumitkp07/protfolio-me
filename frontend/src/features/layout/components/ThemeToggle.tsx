import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/shared/hooks/useTheme'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-line/10 hover:text-ink"
    >
      <Icon size={18} />
    </button>
  )
}
