import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent to-glow"
      style={{ scaleX }}
    />
  )
}
