'use client'

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { BEDURA } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24)
  })

  const navLinks = [
    { label: 'Why Bedura', href: '#why-bedura' },
    { label: 'Collection', href: '#collection' },
    { label: 'Essentials', href: '#essentials' },
    { label: 'Showroom', href: '#showroom' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-border shadow-[0_1px_24px_rgba(107,47,160,0.08)]'
          : 'bg-white/40 backdrop-blur-md border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-bedura">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <img
  src="/images/logo/logo.jpg"
  alt="BEDURA Logo"
  className="h-12 w-12 rounded-full object-cover"
  draggable={false}
/>
            <span className="font-playfair font-semibold text-xl text-primary tracking-tight">
              BEDURA
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline font-poppins text-[13.5px] font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp Button */}
          <motion.a
            href={BEDURA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:inline-flex items-center text-white px-5 py-2.5 rounded-full font-poppins text-sm font-medium shadow-[0_4px_16px_rgba(107,47,160,0.25)]"
            style={{
              background: 'linear-gradient(135deg, #6B2FA0 0%, #7D3DB8 100%)',
            }}
          >
            WhatsApp Us
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={22} className="text-foreground" />
            ) : (
              <Menu size={22} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-6 border-t border-border overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pt-4 flex flex-col">
                {navLinks.map((link, i) => (
  <motion.button
    key={link.label}
    type="button"
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.05 }}
    className="py-2.5 text-left font-poppins text-sm font-medium text-foreground hover:text-primary"
    onClick={() => {
      setIsOpen(false)

      setTimeout(() => {
        const section = document.querySelector(link.href)

        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 200)
    }}
  >
    {link.label}
  </motion.button>
))}
                <a
                  href={BEDURA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-white px-5 py-3 rounded-full font-poppins font-medium text-sm text-center"
                  style={{
                    background: 'linear-gradient(135deg, #6B2FA0 0%, #7D3DB8 100%)',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}