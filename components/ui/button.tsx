import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/85',
        gradient:
          'text-white shadow-[0_4px_18px_rgba(107,47,160,0.28)] hover:shadow-[0_6px_24px_rgba(107,47,160,0.38)] bg-[linear-gradient(135deg,#6B2FA0_0%,#7D3DB8_100%)]',
        outline:
          'border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-white hover:border-primary',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/85',
        ghost: 'hover:bg-muted hover:text-foreground',
        link: 'rounded-none text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 gap-1.5 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4',
        sm: 'h-9 gap-1 px-4 text-[0.8rem]',
        lg: 'h-12 gap-2 px-7 text-[0.9375rem]',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }