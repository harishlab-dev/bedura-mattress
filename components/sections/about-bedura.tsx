'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const values = [
  {
    number: '01',
    title: 'Quality First',
    description: 'We never compromise on material quality and craftsmanship',
    style: 'gradient-purple' as const,
  },
  {
    number: '02',
    title: 'Customer Focus',
    description: 'Your comfort and satisfaction is our top priority',
    style: 'light' as const,
  },
  {
    number: '03',
    title: 'Direct Pricing',
    description: 'No intermediaries — quality and value straight from us to you',
    style: 'light' as const,
  },
  {
    number: '04',
    title: 'Innovation',
    description: 'Continuously improving mattress technology',
    style: 'gradient-accent' as const,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const panelVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
}

export function AboutBeduraSection() {
  return (
    <SectionWrapper id="about" background="white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-2xl mb-12"
      >
        <p className="text-eyebrow mb-4">About Bedura</p>
        <h2 className="text-headline text-foreground mb-5">Sleep, made personal</h2>
        <p className="text-body-lg text-muted-foreground">
          FBEDURA was founded with a simple mission: to deliver premium-quality mattresses directly from the manufacturer to customers, offering superior comfort, better value, and personalized sleep solutions.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {values.map((value, i) => {
          const isGradient = value.style !== 'light'
          const gradientBg =
            value.style === 'gradient-purple'
              ? 'linear-gradient(150deg, #6B2FA0 0%, #7D3DB8 100%)'
              : value.style === 'gradient-accent'
              ? 'linear-gradient(150deg, #D84D84 0%, #F48B1F 100%)'
              : undefined

          return (
            <motion.div
              key={value.title}
              variants={panelVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="relative overflow-hidden rounded-2xl p-6 min-h-[170px] flex flex-col justify-between"
              style={{
                background: gradientBg ?? 'var(--light-section)',
              }}
            >
              {isGradient && (
                <motion.div
                  className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                />
              )}

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                viewport={{ once: true }}
                className="font-playfair text-3xl font-medium leading-none relative"
                style={{
                  color: isGradient ? 'rgba(255,255,255,0.38)' : '#C9C4DC',
                }}
              >
                {value.number}
              </motion.p>

              <div className="relative">
                <h3
                  className="font-playfair text-[15px] font-medium mb-1.5"
                  style={{ color: isGradient ? '#FFFFFF' : 'var(--foreground)' }}
                >
                  {value.title}
                </h3>
                <p
                  className="font-poppins text-[11.5px] leading-relaxed"
                  style={{
                    color: isGradient ? 'rgba(255,255,255,0.72)' : 'var(--muted-foreground)',
                  }}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}