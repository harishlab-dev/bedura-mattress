'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { BEDURA } from '@/lib/constants'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={BEDURA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BEDURA on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full p-4 text-white shadow-[0_8px_30px_rgba(107,47,160,0.35)]"
      style={{
        background: 'linear-gradient(135deg, #6B2FA0 0%, #7D3DB8 100%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      {/* Ambient pulse ring — draws the eye without being loud */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: '#6B2FA0' }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.35, 0, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MessageCircle size={24} className="relative z-10" />
    </motion.a>
  )
}