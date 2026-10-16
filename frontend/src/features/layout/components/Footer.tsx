import { Container } from '@/shared/components/Container'
import { useProfile } from '@/features/portfolio/hooks/usePortfolioSections'

export const Footer = () => {
  const profile = useProfile()

  return (
    <footer className="border-t border-line/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile?.name}. All rights reserved.
        </p>
        <p className="font-mono">Built with React, TypeScript and Laravel</p>
      </Container>
    </footer>
  )
}
