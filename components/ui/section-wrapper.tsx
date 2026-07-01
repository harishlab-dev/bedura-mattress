'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: 'white' | 'light' | 'gray'
  tight?: boolean
}

const backgrounds = {
  white: 'bg-background',
  light: 'bg-light-section',
  gray: 'bg-light-gray',
}

export function SectionWrapper({
  children,
  id,
  className = '',
  background = 'white',
  tight = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-120px' }}
      className={`w-full ${tight ? 'section-tight' : 'section'} ${backgrounds[background]} ${className}`}
    >
      <div className="container-bedura">{children}</div>
    </motion.section>
  )
}