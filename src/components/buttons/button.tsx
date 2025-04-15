import type React from "react"
import { forwardRef } from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@src/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary: "bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200",
                secondary:
                    "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                outline:
                    "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
                ghost:
                    "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100",
                destructive: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-700",
                link: "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400",
            },
            size: {
                sm: "h-8 px-3 py-1",
                md: "h-10 px-4 py-2",
                lg: "h-12 px-6 py-3",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})

Button.displayName = "Button"

export { Button }
