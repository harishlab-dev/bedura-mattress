'use client'

import { motion } from 'framer-motion'
import { Clock, Share2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { BEDURA } from '@/lib/constants'

const services = [
  'HR + Memory Foam',
  'Coir + Latex',
  'Ortho + Latex',
  'Pocketed Spring + Latex',
  'HR + Latex',
  'Full Latex',
  'Sleep Essentials',
  'Not sure yet',
]

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const lines = [
      `Hi BEDURA, I'd like to enquire about a mattress.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.service ? `Interested in: ${form.service}` : null,
      ``,
      `Message: ${form.message}`,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    const phoneDigits = BEDURA.whatsapp.match(/\d+/g)?.join('') ?? ''
    window.open(`https://wa.me/${phoneDigits}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <SectionWrapper id="contact" background="white">
      {/* Reduced mb-16 to mb-10 */}
      <motion.div className="mx-auto mb-10 max-w-2xl text-center">
        {/* Reduced mb-4 to mb-3 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 text-headline text-foreground"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-subtitle"
        >
          Reach out to our team. We're here to help you find your perfect mattress.
        </motion.p>
      </motion.div>

      {/* Tightened grid gaps from gap-8/10 to gap-6/8 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
        
        {/* LEFT — Enquiry form */}
        {/* Reduced padding from p-7/10 to p-6/8 */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-surface rounded-3xl p-6 md:p-8"
          style={{ background: 'rgba(107,47,160,0.03)', borderColor: 'rgba(107,47,160,0.12)' }}
        >
          {/* Reduced text margins */}
          <p className="mb-2 text-eyebrow">Send a Message</p>
          <h3 className="mb-2 text-title">Let's start your perfect sleep</h3>
          <p className="mb-6 text-body-lg text-muted-foreground">
            Have questions about our mattresses? Want to customise your
            comfort? Fill in the details below and we'll open a WhatsApp
            chat with your enquiry — quick, easy, and direct.
          </p>

          {/* Reduced form field spacing from space-y-5 to space-y-4 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Reduced grid gap from gap-5 to gap-4 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                {/* Reduced label margin from mb-2 to mb-1.5 */}
                <label htmlFor="name" className="mb-1.5 block font-poppins text-xs font-medium text-foreground">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Kumar"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 font-poppins text-[14.5px] text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block font-poppins text-xs font-medium text-foreground">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 font-poppins text-[14.5px] text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block font-poppins text-xs font-medium text-foreground">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 font-poppins text-[14.5px] text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block font-poppins text-xs font-medium text-foreground">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-white px-4 py-3 font-poppins text-[14.5px] text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">— Select a mattress type —</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-poppins text-xs font-medium text-foreground">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your needs — sleep position, firmness preference, budget..."
                className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 font-poppins text-[14.5px] text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Reduced button padding slightly from py-4 to py-3.5 */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 font-poppins text-[15px] font-medium text-white shadow-[0_8px_24px_-6px_rgba(107,47,160,0.4)]"
              style={{ background: 'linear-gradient(135deg, #6B2FA0 0%, #7D3DB8 100%)' }}
            >
              <MessageCircle size={18} />
              Send via WhatsApp
            </motion.button>

            <p className="text-center font-poppins text-[11.5px] text-muted-foreground">
              Clicking will open WhatsApp with your message pre-filled.{' '}
              <span className="font-medium text-primary">No app download needed on desktop.</span>
            </p>
          </form>
        </motion.div>

        {/* RIGHT — Contact sidebar */}
        {/* Reduced sidebar gaps from gap-5 to gap-4 */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {/* Contact details */}
          {/* Reduced padding from p-7 to p-6 */}
          <div className="rounded-3xl border border-border bg-light-section p-6">
            {/* Reduced mb-5 to mb-4 */}
            <p className="mb-4 text-eyebrow">Contact Details</p>
            {/* Reduced space-y-5 to space-y-4 */}
            <div className="space-y-4">
              {/* Reduced gap from 3.5 to 3 */}
              <div className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(107,47,160,0.1)' }}
                >
                  <Phone size={16} className="text-primary" />
                </span>
                <div>
                  <p className="mb-0.5 font-poppins text-xs font-medium text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${BEDURA.phone}`}
                    className="font-poppins text-[14.5px] text-foreground transition-colors hover:text-primary"
                  >
                    {BEDURA.phone}
                  </a>
                  <p className="mt-0.5 font-poppins text-[11px] text-muted-foreground">Call us anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(107,47,160,0.1)' }}
                >
                  <Mail size={16} className="text-primary" />
                </span>
                <div>
                  <p className="mb-0.5 font-poppins text-xs font-medium text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${BEDURA.email}`}
                    className="break-all font-poppins text-[14.5px] text-foreground transition-colors hover:text-primary"
                  >
                    {BEDURA.email}
                  </a>
                  <p className="mt-0.5 font-poppins text-[11px] text-muted-foreground">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(107,47,160,0.1)' }}
                >
                  <MapPin size={16} className="text-primary" />
                </span>
                <div>
                  <p className="mb-0.5 font-poppins text-xs font-medium text-muted-foreground">Address</p>
                  <a
                    href="https://www.google.com/maps/place/BEDURA+MATTRESS/@11.0593244,77.0124868,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857aa481f3f81:0xe6d46d9cac3fc635!8m2!3d11.0593191!4d77.0150617!16s%2Fg%2F11w4dh1nzj?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed font-poppins text-[14.5px] text-foreground transition-colors hover:text-primary"
                  >
                    {BEDURA.address}
                  </a>
                  <p className="mt-0.5 font-poppins text-[11px] text-muted-foreground">Experience Center</p>
                </div>
              </div>

              <a
                href={BEDURA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 pt-1"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(216,77,132,0.1)' }}
                >
                  <Share2 size={16} style={{ color: '#D84D84' }} />
                </span>
                <p className="font-poppins text-[14.5px] text-foreground transition-colors hover:text-primary">
                  @beduramattress
                </p>
              </a>
            </div>
          </div>

          {/* Working hours */}
          {/* Reduced padding from p-7 to p-6 */}
          <div className="rounded-3xl border border-border p-6">
            {/* Reduced mb-4 to mb-3 */}
            <div className="mb-3 flex items-center gap-2">
              <Clock size={15} className="text-primary" />
              <p className="text-eyebrow">Working Hours</p>
            </div>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-poppins text-[14.5px] text-foreground">Mon – Sat</span>
              <span className="font-poppins text-[14.5px] font-medium text-primary">10 AM – 9:30 PM</span>
            </div>
            <p className="pt-3 border-t border-border font-poppins text-[12.5px] leading-relaxed text-muted-foreground">
              Closed on Sundays.
            </p>
          </div>

          {/* WhatsApp callout */}
          {/* Reduced padding from p-7 to p-6 */}
          <motion.a
            href={BEDURA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="relative flex items-center gap-4 overflow-hidden rounded-3xl p-6 text-white"
            style={{ background: 'linear-gradient(135deg, #6B2FA0 0%, #7D3DB8 100%)' }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
              <MessageCircle size={22} />
            </span>
            <div className="flex-1">
              <p className="font-playfair text-lg font-medium leading-tight">Chat on WhatsApp</p>
              <p className="mt-0.5 font-poppins text-xs text-white/70">Get instant replies from our team</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}