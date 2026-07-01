'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { SectionWrapper } from '@/components/ui/section-wrapper'
import { EssentialsGalleryModal } from '@/components/essentials/essentials-gallery-modal'
import { SLEEP_ESSENTIALS } from '@/lib/constants'

export function SleepEssentialsSection() {
  const [selectedItem, setSelectedItem] =
    useState<(typeof SLEEP_ESSENTIALS)[number] | null>(null)

  const galleries: Record<number, string[]> = {
    1: [
      '/images/essentials/pillow.jpeg',
      '/images/essentials/pillow.jpeg',
      '/images/essentials/pillow.jpeg',
    ],

    2: [
     '/images/essentials/bedspread/1.jpeg',
     '/images/essentials/bedspread/2.jpeg',
      'images/essentials/bedspread/bed spread.jpeg',
    ],

    3: [
      '/images/essentials/comfoter.jpeg',
      '/images/essentials/comfoter.jpeg',
      '/images/essentials/comfoter.jpeg',
    ],

    4: [
      '/images/essentials/topper.jpeg',
      '/images/essentials/topper.jpeg',
      '/images/essentials/topper.jpeg',
    ],

    5: [
      '/images/essentials/water.jpeg',
      '/images/essentials/water.jpeg',
      '/images/essentials/water.jpeg',
    ],
  }

  return (
    <SectionWrapper id="essentials" background="white">
      <motion.div className="text-center mb-15">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="font-playfair text-5xl sm:text-6xl font-bold text-foreground mb-3"
        >
          Premium Sleep Essentials
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .1 }}
          viewport={{ once: true }}
          className="font-poppins text-lg text-foreground/60 max-w-2xl mx-auto"
        >
          Elevate your sleep experience with our thoughtfully curated
          collection of premium accessories.
        </motion.p>
      </motion.div>

      <div className="space-y-24">

        {SLEEP_ESSENTIALS.map((item) => (

          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className={`
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
              items-center

              ${item.position === 'right'
                ? 'lg:grid-flow-col-dense'
                : ''}
            `}
          >
                        {/* Image */}

            <motion.div
  className={`
    relative
    h-96
    sm:h-[300px]
    lg:h-[340px]
    rounded-2xl
    overflow-hidden
    bg-[#fafafa]
    flex
    items-center
    justify-center

    ${
      item.position === 'right'
        ? 'lg:col-start-2'
        : ''
    }
  `}
              initial={{ opacity: 0, scale: .95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >
              <Image
  src={item.image}
  alt={item.title}
  fill
  
  sizes="(max-width:500px)100vw,50vw"
  className="
    object-cover
    transition-transform
    duration-700
    hover:scale-105
  "
/>
            </motion.div>

            {/* Content */}

            <motion.div
              className={`flex flex-col justify-center ${
                item.position === 'right'
                  ? 'lg:col-start-1'
                  : ''
              }`}
              initial={{
                opacity: 0,
                x: item.position === 'left' ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">

                <div>

                  <h3 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>

<div className="w-15 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
                </div>

                <p className="font-poppins text-lg leading-relaxed text-foreground/70">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">

                  <button
                    onClick={() => setSelectedItem(item)}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      px-8
                      py-4
                      text-white
                      font-medium
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-2xl
                      hover:shadow-primary/25
                    "
                  >
                    View More Images
                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        ))}

      </div>

      {/* Gallery Modal */}

      <EssentialsGalleryModal
  open={selectedItem !== null}
  onClose={() => setSelectedItem(null)}
  title={selectedItem?.title ?? ''}
  folder={
    selectedItem
      ? {
          1: 'pillow',
          2: 'bedspread',
          3: 'comforter',
          4: 'topper',
          5: 'protector',
        }[selectedItem.id] ?? ''
      : ''
  }
/>

    </SectionWrapper>
  )
}