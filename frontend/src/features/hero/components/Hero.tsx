import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/shared/components/BrandIcons'
import { Button } from '@/shared/components/Button'
import { Container } from '@/shared/components/Container'
import { Marquee } from '@/shared/components/Marquee'
import { HERO_FACTS } from '@/features/hero/constants'
import { CodeCard } from '@/features/hero/components/CodeCard'
import { useProfile, useSkillCategories } from '@/features/portfolio/hooks/usePortfolioSections'

const heroStack = ['React.js', 'Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Docker']

export const Hero = () => {
  const profile = useProfile()
  const skillCategories = useSkillCategories()

  if (!profile) return null

  const marqueeItems = skillCategories.flatMap((category) => category.skills).slice(0, 18)
  const firstName = profile.name.split(' ')[0]

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center pt-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.years_experience}+ years shipping production apps
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{firstName}</span>.
            <br />
            {profile.title}.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">
              View my work <ArrowDown size={16} />
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail size={16} /> Get in touch
            </Button>
            {profile.github_url && (
              <Button href={profile.github_url} variant="ghost" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={16} />
              </Button>
            )}
            {profile.linkedin_url && (
              <Button href={profile.linkedin_url} variant="ghost" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </Button>
            )}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6"
          >
            {HERO_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-3xl font-bold">{fact.value}</dt>
                <dd className="mt-1 text-xs text-muted">{fact.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:block"
        >
          <CodeCard profile={profile} stack={heroStack} />
        </motion.div>
      </Container>

      <div className="mt-20">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}
