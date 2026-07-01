'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { PremiumButton } from '@/components/ui/premium-button'
import { MATTRESS_COLLECTION } from '@/lib/constants'

export function MattressCollectionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const [currentImages, setCurrentImages] = useState(
  Array(MATTRESS_COLLECTION.length).fill(0)
)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImages((prev) =>
      prev.map((value) => (value === 0 ? 1 : 0))
    )
  }, 4000)

  return () => clearInterval(interval)
}, [])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <SectionWrapper id="collection" background="white">
      {/* Section Heading */}
      <motion.div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-playfair text-5xl sm:text-6xl font-bold text-foreground mb-4"
        >
          Premium Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-poppins text-lg text-foreground/60 max-w-2xl mx-auto"
        >
          Six expertly engineered mattresses, each crafted for ultimate comfort and longevity
        </motion.p>
      </motion.div>

      {/* Apple-style alternating sections */}
      <div className="space-y-24">
        {MATTRESS_COLLECTION.map((mattress, idx) => (
          <motion.div
            key={mattress.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? 'lg:grid-cols-2' : ''
            }`}
          >
            {/* Image Container */}
            <motion.div
              className={`relative h-96 sm:h-[500px] overflow-hidden rounded-2xl ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-full">
  <Image
    key={currentImages[idx]}
    src={mattress.images[currentImages[idx]]}
    alt={mattress.name}
    fill
    className="object-cover transition-all duration-1000"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>
              {/* Warranty Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="font-poppins font-semibold text-primary">{mattress.warranty}</p>
                <p className="font-poppins text-xs text-foreground/60">Warranty</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}
              initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <motion.h3
                    className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {mattress.name}
                  </motion.h3>
                  
                  {/* Accent line */}
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                <motion.p
                  className="font-poppins text-lg text-foreground/70 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {mattress.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <PremiumButton
                    text={
                      mattress.id % 2 === 0 ? 'Discover Comfort' : 'Explore Collection'
                    }
                    href="#contact"
                    variant="primary"
                    size="lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
