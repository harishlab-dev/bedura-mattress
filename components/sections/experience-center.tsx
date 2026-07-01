'use client'

import { motion } from 'framer-motion'
import { Headset, MapPinned, Sofa } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const highlights = [
  { icon: Sofa, label: 'All 6 mattress types on display' },
  { icon: Headset, label: 'Expert consultation, every visit' },
  { icon: MapPinned, label: 'Easy to find, easy to park' },
]

export function ExperienceCenterSection() {
  return (
    <SectionWrapper id="experience-center" background="light">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-eyebrow mb-4">Experience Center</p>

          <h2 className="text-headline text-foreground mb-3">
            Experience better sleep,
            <br />
            in person
          </h2>

          <motion.div
            className="w-14 h-1 rounded-full mb-6"
            style={{ background: 'linear-gradient(90deg, #6B2FA0, #7D3DB8)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <p className="text-body-lg text-muted-foreground mb-8 max-w-md">
            Visit our showroom and feel the comfort difference firsthand.
            Test our mattresses, find your fit, and let our team guide you to
            the right choice.
          </p>

          {/* Feature highlights */}
          <motion.div
            className="space-y-4 mb-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-center gap-3.5"
                >
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(107,47,160,0.1)' }}
                  >
                    <Icon size={17} strokeWidth={1.75} className="text-primary" />
                  </span>
                  <span className="font-poppins text-[14.5px] text-foreground">
                    {item.label}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.google.com/maps/place/BEDURA+MATTRESS/@11.0593244,77.0124868,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857aa481f3f81:0xe6d46d9cac3fc635!8m2!3d11.0593191!4d77.0150617!16s%2Fg%2F11w4dh1nzj?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gradient" size="lg">
                Get Directions
              </Button>
            </a>
            <a href="#showroom">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Image — glass-framed, purple-tinted, matches Hero's treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-full opacity-35 blur-3xl"
            style={{ background: 'radial-gradient(circle, #7D3DB8, transparent 70%)' }}
            aria-hidden="true"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="image-mask relative rounded-[1.75rem] p-2.5 glass-surface shadow-[0_24px_50px_-12px_rgba(107,47,160,0.3)]">
              <div className="relative h-96 lg:h-[28rem] w-full overflow-hidden rounded-[1.4rem]">
                <Image
  src="/images/showroom/showroom-1.png"
  alt="BEDURA Showroom"
  fill
  priority
  className="object-cover"
/>
              </div>
            </div>

            {/* Floating warranty-style badge, purple, ties to Hero/Collection badge language */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-3.5 shadow-[0_12px_30px_-8px_rgba(107,47,160,0.4)]"
              style={{ background: 'linear-gradient(135deg, #6B2FA0, #7D3DB8)' }}
            >
              <p className="font-playfair text-lg font-semibold text-white leading-none">
                Open Daily
              </p>
              <p className="font-poppins text-[11px] text-white/75 mt-0.5">
                10 AM – 9:30 PM
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}