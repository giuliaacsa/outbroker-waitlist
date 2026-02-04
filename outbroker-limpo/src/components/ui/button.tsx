import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            'default': "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg active:scale-[0.98]",
            'secondary': "bg-secondary text-white hover:bg-secondary/90",
            'ghost': "hover:bg-gray-100",
            'outline': "border border-gray-300 bg-transparent hover:bg-gray-50",
          }[variant],
          {
            'default': "h-10 px-4 py-2",
            'sm': "h-8 rounded-md px-3",
            'lg': "h-12 rounded-xl px-8 text-base",
            'icon': "h-10 w-10",
          }[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }