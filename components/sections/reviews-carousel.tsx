'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel"
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Best mattress I have ever owned. The customization option was perfect for my needs. Highly recommended!',
    role: 'Coimbatore',
  },
  {
    id: 2,
    name: 'Priya Singh',
    rating: 5,
    text: 'Amazing quality and customer service. Delivery was quick and the mattress is incredibly comfortable.',
    role: 'Coimbatore',
  },
  {
    id: 3,
    name: 'Vikram Nair',
    rating: 5,
    text: 'Finally found the perfect mattress! The natural latex material is fantastic. Worth every penny.',
    role: 'Coimbatore',
  },
  {
    id: 4,
    name: 'Aisha Mehta',
    rating: 5,
    text: 'Excellent experience from start to finish. The team was very helpful in selecting the right mattress.',
    role: 'Coimbatore',
  },
  {
    id: 5,
    name: 'David Chen',
    rating: 5,
    text: 'Superior comfort and durability. My sleep quality has improved significantly. Highly satisfied!',
    role: 'Coimbatore',
  },
]

export function ReviewsCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
const emblaRef = useRef<EmblaCarouselType | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  useEffect(() => {
    if (!carouselRef.current) return

    const embla = EmblaCarousel(carouselRef.current, {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    })

    emblaRef.current = embla

    const updateButtonStates = () => {
      setCanScrollPrev(embla.canScrollPrev())
      setCanScrollNext(embla.canScrollNext())
    }

    updateButtonStates()
    embla.on('select', updateButtonStates)

    return () => {
      embla.destroy()
    }
  }, [])

  const handlePrevClick = () => emblaRef.current?.scrollPrev()
  const handleNextClick = () => emblaRef.current?.scrollNext()

  return (
    <SectionWrapper background="light">
      <motion.div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-poppins text-lg text-muted-foreground"
        >
          What our happy customers have to say
        </motion.p>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={carouselRef}>
          <div className="flex">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-full sm:min-w-1/2 lg:min-w-1/3 px-4"
              >
                <motion.div
                  className="
                    bg-white dark:bg-card rounded-xl p-6 shadow-lg
                    h-full flex flex-col border border-muted
                  "
                  whileHover={{ y: -5 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-poppins text-muted-foreground mb-4 flex-grow">
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-muted pt-4">
                    <h4 className="font-playfair font-bold text-foreground">
                      {review.name}
                    </h4>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          className="flex gap-4 mt-8 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handlePrevClick}
            disabled={!canScrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              p-2 rounded-full bg-primary text-white disabled:opacity-50
              hover:bg-opacity-90 transition-all
            "
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={handleNextClick}
            disabled={!canScrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              p-2 rounded-full bg-primary text-white disabled:opacity-50
              hover:bg-opacity-90 transition-all
            "
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
