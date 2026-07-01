'use client'

import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BEDURA } from '@/lib/constants'

// Explicitly define the type as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

// Explicitly define the type and cast the ease array as a 4-number tuple
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    } 
  },
}

const stats = [
  { value: '15+', label: 'Years Warranty' },
  { value: '100%', label: 'Natural Latex' },
  { value: 'Direct', label: 'From Manufacturer' },
  { value: 'Custom', label: 'Built For You' },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#FCFAFF]">
      {/* Background wash */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(107,47,160,.12), transparent 35%),
            radial-gradient(circle at 80% 25%, rgba(125,61,184,.08), transparent 38%),
            radial-gradient(circle at 50% 90%, rgba(107,47,160,.05), transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Left glow */}
      <motion.div
        className="absolute -left-48 top-0 z-0 h-[700px] w-[700px] pointer-events-none rounded-full blur-[120px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
        style={{ background: 'radial-gradient(circle, rgba(107,47,160,.14), transparent 70%)' }}
      />

      {/* Right glow */}
      <motion.div
        className="absolute -right-40 bottom-0 z-0 h-[650px] w-[650px] pointer-events-none rounded-full blur-[120px]"
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 18, repeat: Infinity }}
        style={{ background: 'radial-gradient(circle, rgba(125,61,184,.10), transparent 70%)' }}
      />

      {/* Center glow */}
      <motion.div
        className="absolute inset-0 z-0 flex pointer-events-none items-center justify-center"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <div
          className="h-[900px] w-[900px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(107,47,160,.10), transparent 75%)' }}
        />
      </motion.div>

      {/* Watermark logo */}
      <motion.div
        className="absolute inset-0 z-0 flex pointer-events-none items-center justify-center overflow-hidden"
        animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/images/logo/logo-transparent.png"
          alt=""
          draggable={false}
          className="h-auto w-[900px] max-w-[120vw] select-none object-contain opacity-[0.22]"
          style={{
            mixBlendMode: 'multiply',
            filter: 'grayscale(100%) sepia(100%) hue-rotate(240deg) saturate(160%) brightness(1.08)',
          }}
        />
      </motion.div>

      {/* Noise */}
      <svg className="absolute inset-0 z-0 h-full w-full pointer-events-none mix-blend-overlay opacity-[0.025]">
        <filter id="hero-noise-2">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise-2)" />
      </svg>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-6 pb-32 pt-24 lg:pt-28">
        <motion.div
          className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Premium Label */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-5 py-2 shadow-lg backdrop-blur-xl"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-poppins text-sm font-medium tracking-wide text-primary">
              Premium Sleep Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-6xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-[6.8rem]"
          >
            Your Perfect
            <br />
            Sleep Awaits
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="mx-auto my-7 h-[4px] w-28 rounded-full lg:mx-0"
            style={{ background: 'linear-gradient(90deg,#6B2FA0,#7D3DB8,#9C6ADE)' }}
          />

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl font-poppins text-lg leading-relaxed text-foreground/70 sm:text-xl lg:mx-0"
          >
            Handcrafted premium mattresses designed for exceptional comfort,
            orthopedic support, and restful sleep — directly from the
            manufacturer.
          </motion.p>

          {/* CTAs - Removed `asChild` and wrapped Buttons in anchor tags */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a href={BEDURA.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
            <a href="#collection">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Collection
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-16 grid w-full max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4 lg:mx-0 lg:mt-20"
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="text-center lg:text-left"
              >
                <h3 className="font-playfair text-2xl font-semibold text-primary sm:text-3xl">
                  {item.value}
                </h3>
                <p className="mt-1 font-poppins text-xs tracking-wide text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-poppins text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Scroll
          </span>
          <div className="flex h-12 w-7 justify-center rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm">
            <motion.div
              className="mt-2 h-2.5 w-2.5 rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}