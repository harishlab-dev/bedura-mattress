'use client'

import { motion } from 'framer-motion'
import { Headset, Leaf, ShieldCheck, SlidersHorizontal, Tag, Truck } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const features = [
  {
    title: 'Premium Materials',
    description: '100% natural latex and high-quality components',
    icon: Leaf,
  },
  {
    title: 'Customised Mattresses',
    description: 'Tailored to your specific comfort needs',
    icon: SlidersHorizontal,
  },
  {
    title: 'Long Warranty',
    description: 'Protection up to 15 years',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Guidance',
    description: 'Professional consultation for the perfect fit',
    icon: Headset,
  },
  {
    title: 'Fast Delivery',
    description: 'Quick delivery across the region',
    icon: Truck,
  },
  {
    title: 'Direct Pricing',
    description: 'No intermediaries, manufacturer direct',
    icon: Tag,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
}

export function WhyBeduraSection() {
  return (
    <SectionWrapper id="why-bedura" background="light">
      {/* Reduced mb-16 to mb-10 to pull the grid closer to the text */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-eyebrow mb-3"
        >
          Why Bedura
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-headline text-foreground"
        >
          Built around your sleep
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-subtitle mt-3"
        >
          Premium quality, customisation, and direct pricing — for sleep that
          actually restores you.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              // Tightened py-10 to py-7, and px-7 to px-6. 
              // Removed the useless isLastCol/isLastRow conditional logic.
              className="group relative border-b border-r border-border px-6 py-7 transition-colors duration-300 hover:bg-light-section"
            >
              <Icon
                size={24} // Slightly scaled down icon to match tighter padding
                strokeWidth={1.5}
                className="text-primary transition-transform duration-500 group-hover:-translate-y-0.5"
              />
              {/* Reduced mt-5 to mt-4 to pull the title closer to the icon */}
              <h3 className="text-title mb-1.5 mt-4 text-[1.25rem] sm:text-[1.375rem]">
                {feature.title}
              </h3>
              <p className="text-body-lg text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}