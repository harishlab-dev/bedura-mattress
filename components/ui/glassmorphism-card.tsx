'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
}

/**
 * Glass surface for the Contact/Enquiry split layout — not a
 * general-purpose feature card. See globals.css `.glass-surface`.
 */
export function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-surface rounded-3xl p-8 md:p-10 ${className}`}
    >
      {children}
    </motion.div>
  )
}

/**
 * @deprecated Kept temporarily so existing imports (e.g.
 * bedura-promise.tsx) don't break the build. This is the old
 * icon+title+description card pattern — generic and card-heavy,
 * which the design brief asks to move away from. Once
 * bedura-promise.tsx (and any other caller) is reviewed and
 * rebuilt with an asymmetrical image-led layout, delete this
 * export and this comment block.
 */
export function GlassmorphismCard({
  title,
  description,
  icon,
  children,
  className = '',
}: {
  title: string
  description: string
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`glass-surface rounded-2xl p-6 ${className}`}
    >
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-title mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      {children}
    </motion.div>
  )
}