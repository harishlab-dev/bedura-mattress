'use client'

import { motion } from 'framer-motion'
import { BEDURA } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Collection', href: '#collection' },
    { label: 'Showroom', href: '#showroom' },
    { label: 'Contact', href: '#contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <footer
      className="text-white"
      style={{
        background: 'linear-gradient(180deg, #2A1640 0%, #1A0E28 100%)',
      }}
    >
      <div className="section-tight container-bedura">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1.3fr_0.8fr_1fr] gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-title mb-3">BEDURA</h3>
            <p className="font-poppins text-white/60 text-sm leading-relaxed max-w-xs">
              Premium natural latex mattresses, customised for your perfect sleep.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-eyebrow mb-5 text-white/80">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline font-poppins text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-eyebrow mb-5 text-white/80">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BEDURA.phone}`}
                className="block font-poppins text-white/60 hover:text-white transition-colors"
              >
                {BEDURA.phone}
              </a>
              <a
                href={`mailto:${BEDURA.email}`}
                className="block font-poppins text-white/60 hover:text-white transition-colors"
              >
                {BEDURA.email}
              </a>
              <p className="font-poppins text-white/40 text-xs leading-relaxed pt-1">
                {BEDURA.address}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-white/10 origin-left mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="font-poppins text-xs text-white/40"
          >
            © {currentYear} BEDURA Mattress. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href={BEDURA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BEDURA Mattress on Instagram"
              className="inline-flex items-center justify-center text-white/70 transition-colors hover:text-[#D84D84]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.324c-2.3 0-4.162-1.862-4.162-4.162 0-2.301 1.861-4.162 4.162-4.162 2.301 0 4.162 1.861 4.162 4.162 0 2.3-1.861 4.162-4.162 4.162z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>

            <p className="font-poppins text-xs text-white/40">
              Built with{' '}
              <span className="text-[#D84D84]">❤</span> by{' '}
              <a
                href={BEDURA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-white/70 hover:text-white transition-colors font-medium"
              >
                Harish M
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}