import { LoadingScreen } from '@/shared/components/LoadingScreen'
import { StatusMessage } from '@/shared/components/StatusMessage'
import { About } from '@/features/about/components/About'
import { Contact } from '@/features/contact/components/Contact'
import { Experience } from '@/features/experience/components/Experience'
import { Hero } from '@/features/hero/components/Hero'
import { AuroraBackground } from '@/features/layout/components/AuroraBackground'
import { Footer } from '@/features/layout/components/Footer'
import { Navbar } from '@/features/layout/components/Navbar'
import { ScrollProgress } from '@/features/layout/components/ScrollProgress'
import { usePortfolio } from '@/features/portfolio/hooks/usePortfolio'
import { Projects } from '@/features/projects/components/Projects'
import { Skills } from '@/features/skills/components/Skills'

export const PortfolioPage = () => {
  const { data, isPending, isError } = usePortfolio()

  if (isPending) return <LoadingScreen />

  if (isError || !data.profile) {
    return (
      <StatusMessage
        title="Portfolio unavailable"
        description="The API could not be reached. Please make sure the backend is running and try again."
      />
    )
  }

  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
