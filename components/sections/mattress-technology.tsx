'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Check,
} from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const slides = [
  {
    title: 'Premium HR Latex Construction',
    image: '/images/technology/technology-3.jpg',
    description:
      'Natural latex combined with premium HR foam delivers exceptional comfort, pressure relief and long-lasting durability.',

    features: [
      'Organic Cotton Fabric',
      '100% Natural Latex',
      'High Resilience Foam',
      'Premium Quilted Finish',
    ],
  },

  {
    title: 'Latex + Memory Foam',

    image: '/images/technology/technology-1.jpg',

    description:
      'Designed to combine cooling memory foam with breathable natural latex for superior comfort and balanced support.',

    features: [
      'Premium Quilted Fabric',
      'Natural Latex',
      'Cooling Memory Foam',
      'Rebonded Support Base',
    ],
  },

  {
    title: 'Pocket Spring Technology',

    image: '/images/technology/technology-2.jpg',

    description:
      'Individually wrapped springs reduce motion transfer while maintaining excellent airflow and spinal alignment.',

    features: [
      'Independent Pocket Springs',
      'Latex Comfort Layer',
      'Motion Isolation',
      'Better Airflow',
    ],
  },

  {
    title: 'Memory Foam Construction',

    image: '/images/technology/technology-4.jpg',

    description:
      'Adaptive memory foam gently conforms to the body while maintaining proper spinal support.',

    features: [
      'Core Support Foam',
      'Comfort Memory Foam',
      'Soft Outer Cover',
    ],
  },
]

export function MattressTechnologySection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)



useEffect(() => {
  if (paused) return

  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, 5000)

  return () => clearInterval(timer)
}, [paused])

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setCurrent((prev) => (prev + 1) % slides.length)
    }

    if (e.key === 'ArrowLeft') {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  window.addEventListener('keydown', handleKeyDown)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }
}, [])


  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length)

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    return (
    <SectionWrapper background="light">
      <div
        className="max-w-7xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Inside Every BEDURA Mattress
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-muted-foreground font-poppins leading-relaxed">
            Every BEDURA mattress is thoughtfully engineered using premium
            materials and advanced layer technology to provide exceptional
            comfort, durability, breathability and long-lasting support.
          </p>
        </motion.div>

        {/* Technology Tabs */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                rounded-full
                px-6
                py-3
                transition-all
                duration-300
                border
                font-medium
                backdrop-blur-xl

                ${
                  current === index
                    ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20'
                    : 'bg-white/80 border-primary/10 hover:border-primary/30 hover:bg-primary/5'
                }
              `}
            >
              {slide.title}
            </button>
          ))}
        </motion.div>
                {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -30, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  border
                  border-primary/10
                  shadow-2xl
                  shadow-primary/10
                "
              >
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  fill
                  priority
                
                  sizes="(max-width:768px)100vw,50vw"
                  className="
                    object-contain
                    p-6
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Side */}

          <AnimatePresence mode="wait">
            <motion.div
              key={current + '-content'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-primary/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-primary
                "
              >
                Mattress Construction
              </span>

              <h3
                className="
                  mt-5
                  font-playfair
                  text-4xl
                  font-bold
                  text-foreground
                "
              >
                {slides[current].title}
              </h3>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-muted-foreground
                  font-poppins
                "
              >
                {slides[current].description}
              </p>

              <div className="mt-10 grid gap-4">
                {slides[current].features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      bg-white/80
                      border
                      border-primary/10
                      p-4
                      shadow-sm
                    "
                  >
                    <Check
                      className="text-primary"
                      size={20}
                    />

                    <span
                      className="
                        font-poppins
                        text-base
                        font-medium
                      "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
                {/* Navigation */}

        <div className="mt-12 flex items-center justify-center gap-4">

          <button
            onClick={prevSlide}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-primary/15
              bg-white
              shadow-lg
              transition-all
              hover:scale-105
              hover:bg-primary
              hover:text-white
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}

          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-3 rounded-full transition-all duration-300

                  ${
                    current === index
                      ? 'w-10 bg-primary'
                      : 'w-3 bg-primary/20 hover:bg-primary/40'
                  }
                `}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-primary/15
              bg-white
              shadow-lg
              transition-all
              hover:scale-105
              hover:bg-primary
              hover:text-white
            "
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl
              border border-primary/10
              bg-white/80
              backdrop-blur-xl
              p-7
              shadow-xl
              shadow-primary/5
            "
          >
            <Leaf className="mb-5 text-primary" size={34} />

            <h4 className="font-playfair text-2xl font-semibold">
              Natural Latex
            </h4>

            <p className="mt-3 text-muted-foreground leading-7">
              Naturally breathable, hypoallergenic and engineered to regulate
              temperature for a cooler, healthier sleep.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl
              border border-primary/10
              bg-white/80
              backdrop-blur-xl
              p-7
              shadow-xl
              shadow-primary/5
            "
          >
            <ShieldCheck className="mb-5 text-primary" size={34} />

            <h4 className="font-playfair text-2xl font-semibold">
              Orthopedic Support
            </h4>

            <p className="mt-3 text-muted-foreground leading-7">
              Carefully engineered layers help maintain proper spinal alignment
              while evenly distributing body weight.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl
              border border-primary/10
              bg-white/80
              backdrop-blur-xl
              p-7
              shadow-xl
              shadow-primary/5
            "
          >
            <Sparkles className="mb-5 text-primary" size={34} />

            <h4 className="font-playfair text-2xl font-semibold">
              Premium Materials
            </h4>

            <p className="mt-3 text-muted-foreground leading-7">
              Crafted using carefully selected fabrics, latex, foams and support
              systems for exceptional durability and lasting comfort.
            </p>
          </motion.div>

        </div>
              </div>
    </SectionWrapper>
  )
}