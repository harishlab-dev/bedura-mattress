'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import { useInView } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const stats = [
  { label: 'Years Warranty', value: 15, suffix: '+' },
  { label: 'Mattress Types', value: 6, suffix: '' },
  { label: 'Happy Customers', value: 80, suffix: '+' },
]

function IntCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [isInView, to, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

function DecimalCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => v.toFixed(1))

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [isInView, to, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export function StatisticsSection() {
  return (
    <SectionWrapper id="statistics" background="white">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Featured rating panel */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.94 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
          whileHover={{ scale: 1.015 }}
          className="relative overflow-hidden rounded-3xl p-10 lg:p-12 flex flex-col items-center justify-center text-center"
          style={{ background: 'linear-gradient(150deg, #6B2FA0 0%, #7D3DB8 60%, #57258A 100%)' }}
        >
          {/* Drifting glow */}
          <motion.div
            className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full opacity-25 blur-3xl"
            style={{ background: '#F48B1F' }}
            animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />

          {/* Star fill row */}
          <motion.div
            className="flex gap-1.5 mb-5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0, rotate: -45 },
                  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 18 } },
                }}
              >
                <Star size={20} fill="#F8C98A" stroke="none" />
              </motion.div>
            ))}
          </motion.div>

          <p className="font-playfair text-6xl lg:text-7xl font-medium text-white leading-none mb-2 relative">
            <DecimalCounter to={4.9} />
          </p>
          <p className="font-poppins text-sm text-white/65 relative">
            Google Rating · 80+ Reviews
          </p>
        </motion.div>

        {/* Stacked stat rows */}
        <motion.div
          className="flex flex-col justify-center gap-1"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, x: 24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group flex items-center justify-between py-5 border-b border-border last:border-b-0 cursor-default"
            >
              <span className="font-poppins text-[14.5px] text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </span>
              <span className="font-playfair text-3xl text-primary leading-none">
                <IntCounter to={stat.value} suffix={stat.suffix} />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}