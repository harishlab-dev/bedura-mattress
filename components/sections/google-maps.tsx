'use client'

import { motion } from 'framer-motion'
import { PremiumButton } from '@/components/ui/premium-button'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export function GoogleMapsSection() {
  return (
    <SectionWrapper background="gray">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-purple-600 mb-2">
            Visit Our Showroom
          </h2>
          <p className="font-poppins text-lg text-black-300">
            2/31, Gandhi St, Vishweshwara Nagar, Villankurichi, Coimbatore, Tamil Nadu-641035
          </p>
        </motion.div>

        {/* Large Map Container */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{ height: '500px' }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4046505555557!2d76.96589472346755!3d11.018194854886825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f8c8c8c8c8c9%3A0x0!2s2%2F31%20Gandhi%20Street%2C%20Villankurichi!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PremiumButton
            text="Open In Google Maps"
            href="https://www.google.com/maps/place/BEDURA+MATTRESS/@11.0593244,77.0124868,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857aa481f3f81:0xe6d46d9cac3fc635!8m2!3d11.0593191!4d77.0150617!16s%2Fg%2F11w4dh1nzj?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
            variant="primary"
            size="lg"
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
