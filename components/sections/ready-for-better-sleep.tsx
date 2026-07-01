'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { BEDURA } from '@/lib/constants'

export function ReadyForBetterSleepSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const ctas = [
    {
      icon: MessageCircle,
      label: 'WhatsApp Us',
      description: 'Chat with our team',
      href: BEDURA.whatsapp,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: MapPin,
      label: 'Visit Experience Center',
      description: 'Experience in person',
      href: 'https://www.google.com/maps/place/BEDURA+MATTRESS/@11.0593244,77.0124868,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857aa481f3f81:0xe6d46d9cac3fc635!8m2!3d11.0593191!4d77.0150617!16s%2Fg%2F11w4dh1nzj?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D',
      color: 'bg-primary hover:bg-opacity-90',
    },
    {
      icon: Phone,
      label: 'Call Now',
      description: 'Speak with an expert',
      href: `tel:${BEDURA.phone}`,
      color: 'bg-accent hover:bg-opacity-90',
    },
  ]

  return (
    <section
      className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6A2EA0 0%, #5a1e8f 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, white, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Ready For Better Sleep?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-poppins text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Let our experts help you find your perfect mattress and transform your sleep
          </motion.p>
        </motion.div>

        {/* CTA Buttons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {ctas.map((cta) => {
            const Icon = cta.icon
            return (
              <motion.a
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex flex-col items-center gap-4 p-8 rounded-2xl
                  bg-white/10 backdrop-blur-lg border border-white/20
                  hover:bg-white/20 transition-all duration-300
                  text-white group cursor-pointer
                `}
              >
                <motion.div
                  className={`${cta.color} p-4 rounded-full transition-all`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={28} className="text-white" />
                </motion.div>

                <div className="text-center">
                  <h3 className="font-playfair text-xl font-bold">{cta.label}</h3>
                  <p className="font-poppins text-sm text-white/70">{cta.description}</p>
                </div>

                <motion.div
                  className="text-white/70 group-hover:text-white transition-colors"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
