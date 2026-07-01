import { motion } from 'framer-motion'
import React from 'react'

interface PremiumButtonProps {
  text: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function PremiumButton({
  text,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: PremiumButtonProps) {
  const baseStyles =
    'font-poppins font-semibold rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95'

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-opacity-90 shadow-lg',
    secondary: 'bg-secondary text-foreground hover:bg-opacity-90 border border-muted',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const Component = href ? 'a' : 'button'

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        target={href && href.startsWith('http') ? '_blank' : undefined}
        rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
      >
        {text}
      </Component>
    </motion.div>
  )
}
