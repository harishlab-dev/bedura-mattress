'use client'

import { motion } from 'framer-motion'
import { Wind, Weight, Thermometer, Heart } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { PremiumButton } from '@/components/ui/premium-button'

export function FindPerfectMattressSection() {
  const factors = [
    {
      icon: Wind,
      title: 'Sleep Position',
      description: 'Side, back, or stomach sleeper',
    },
    {
      icon: Weight,
      title: 'Body Weight',
      description: 'Affects support and firmness',
    },
    {
      icon: Thermometer,
      title: 'Temperature',
      description: 'Hot or cold sleeper preferences',
    },
    {
      icon: Heart,
      title: 'Comfort Level',
      description: 'Soft, medium, or firm preference',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
  return (
        <SectionWrapper background="light">
        <motion.div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-playfair text-5xl sm:text-6xl font-bold text-foreground mb-4"
        >
          Find Your Perfect Mattress
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-poppins text-lg text-foreground/60 max-w-2xl mx-auto"
        >
          We consider multiple factors to recommend the best mattress for your unique needs
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {factors.map((factor, idx) => {
          const IconComponent = factor.icon
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="
                backdrop-blur-md bg-gradient-to-br from-primary/5 to-secondary/5 
                border border-primary/10 rounded-xl p-6
                hover:border-primary/30 hover:bg-primary/10 transition-all text-center
              "
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <motion.div
                className="inline-block p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <IconComponent size={28} className="text-primary" />
              </motion.div>
              <h3 className="font-playfair text-lg font-bold text-foreground mb-2">{factor.title}</h3>
              <p className="font-poppins text-sm text-foreground/60">{factor.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <PremiumButton
          text="Chat With Our Experts"
          href="https://wa.me/919843383700"
          variant="primary"
          size="lg"
        />
      </motion.div>
    </SectionWrapper>
  )
}
