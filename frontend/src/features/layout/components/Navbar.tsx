import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useActiveSection } from '@/shared/hooks/useActiveSection'
import { cn } from '@/shared/utils/cn'
import { NAV_ITEMS, NAV_SECTION_IDS } from '@/features/layout/constants'
import { ThemeToggle } from '@/features/layout/components/ThemeToggle'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(NAV_SECTION_IDS)

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="glass relative flex w-full max-w-2xl items-center justify-between rounded-full py-2 pl-5 pr-2 shadow-xl shadow-black/5"
      >
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          sumit<span className="text-accent">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  'rounded-full px-3 py-1.5 text-sm transition-colors',
                  activeId === item.id ? 'bg-accent/15 text-accent' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass absolute inset-x-0 top-14 flex flex-col gap-1 rounded-3xl p-3 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm text-muted hover:bg-line/10 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
