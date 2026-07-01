'use client'

import { motion } from 'framer-motion'
import { Factory, Heart, ShieldCheck, SlidersHorizontal } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { BEDURA_PROMISE } from '@/lib/constants'

const ICONS = [Factory, SlidersHorizontal, ShieldCheck, Heart]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
}

export function BeduraPromiseSection() {
  return (
    <SectionWrapper background="white" className="!py-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[2rem] section my-[var(--section-y)]"
        style={{
          background:
            'linear-gradient(135deg, #6B2FA0 0%, #7D3DB8 55%, #57258A 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: '#F48B1F' }}
          aria-hidden="true"
        />

        <div className="container-bedura relative">
          <div className="text-center mb-14 max-w-xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-eyebrow mb-4"
              style={{ color: '#F8C98A' }}
            >
              The Bedura Promise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-headline text-white"
            >
              What makes us different
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-body-lg text-white/70 mt-4"
            >
              Four commitments that haven&apos;t changed since day one.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {BEDURA_PROMISE.map((promise, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <motion.div
                  key={promise.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-xl"
                >
                  <Icon size={24} strokeWidth={1.5} style={{ color: '#F8C98A' }} />
                  <h3 className="font-playfair text-lg font-medium text-white mt-5 mb-2">
                    {promise.title}
                  </h3>
                  <p className="font-poppins text-[13.5px] leading-relaxed text-white/70">
                    {promise.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}