'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Accordion } from '@/components/ui/accordion'
import { FAQS } from '@/lib/constants'

export function FAQSection() {
  return (
      <SectionWrapper background="light">
      <motion.div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Everything you need to know about BEDURA mattresses
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Accordion items={FAQS} />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
