'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { BEDURA } from '@/lib/constants'

const checklist = [
  'All 6 mattress types available to test',
  'Sleep essentials and accessories showcase',
  'Expert consultation available daily',
  'Special discounts for showroom visitors',
]

export function ShowroomExperienceSection() {
  return (
    <SectionWrapper id="showroom" background="white">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Image — glass-framed, mirrors Experience Center's treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative order-1"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-full opacity-35 blur-3xl"
            style={{ background: 'radial-gradient(circle, #6B2FA0, transparent 70%)' }}
            aria-hidden="true"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="relative"
          >
            <div className="image-mask relative rounded-[1.75rem] p-2.5 glass-surface shadow-[0_24px_50px_-12px_rgba(107,47,160,0.3)]">
              <div className="relative h-96 lg:h-[28rem] w-full overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/showroom/showroom-2.png"
                  alt="BEDURA showroom interior with mattress display"
                  fill
                  className="image-hover-zoom object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-eyebrow mb-4">Showroom Experience</p>

          <h2 className="text-headline text-foreground mb-3">
            Explore comfort like
            <br />
            never before
          </h2>

          <motion.div
            className="w-14 h-1 rounded-full mb-6"
            style={{ background: 'linear-gradient(90deg, #6B2FA0, #7D3DB8)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <p className="text-body-lg text-muted-foreground mb-7 max-w-md">
            Walk through our curated collection of premium mattresses and
            accessories. Every mattress is on display for you to test.
          </p>

          <motion.ul
            className="space-y-3.5 mb-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            {checklist.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex items-center gap-3.5"
              >
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
                  style={{ background: 'rgba(107,47,160,0.1)' }}
                >
                  <Check size={14} strokeWidth={2.5} className="text-primary" />
                </span>
                <span className="font-poppins text-[14.5px] text-foreground">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a
  href={BEDURA.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="gradient" size="lg">
    Book Visit
  </Button>
</a>

<a href={`tel:${BEDURA.phone}`}>
  <Button variant="outline" size="lg">
    Call Now
  </Button>
</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}