'use client'

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const display = useTransform(rounded, (val) => `${prefix}${val.toLocaleString('en-IN')}${suffix}`)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [isInView, to, duration, count])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}