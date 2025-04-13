interface LogoProps {
    className?: string
    textClassName?: string
    showText?: boolean
}

export function Logo({ className = "h-8 w-8", textClassName = "text-xl", showText = true }: LogoProps) {
    return (
        <div className="flex items-center gap-2">
            <div className={`relative ${className}`}>
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    {/* Base shape - rounded square */}
                    <rect
                        x="2"
                        y="2"
                        width="60"
                        height="60"
                        rx="12"
                        className="fill-gray-100 stroke-gray-900 stroke-2 dark:fill-gray-800 dark:stroke-gray-100"
                    />

                    {/* Component blocks */}
                    <rect x="12" y="12" width="18" height="18" rx="4" className="fill-gray-900 dark:fill-gray-100" />
                    <rect x="34" y="12" width="18" height="18" rx="4" className="fill-gray-300 dark:fill-gray-600" />
                    <rect x="12" y="34" width="18" height="18" rx="4" className="fill-gray-300 dark:fill-gray-600" />
                    <rect x="34" y="34" width="18" height="18" rx="4" className="fill-gray-900 dark:fill-gray-100" />

                    {/* Connecting lines */}
                    <path d="M30 21H34" className="stroke-gray-900 stroke-2 dark:stroke-gray-100" strokeLinecap="round" />
                    <path d="M21 30V34" className="stroke-gray-900 stroke-2 dark:stroke-gray-100" strokeLinecap="round" />
                    <path d="M43 30V34" className="stroke-gray-900 stroke-2 dark:stroke-gray-100" strokeLinecap="round" />
                    <path d="M30 43H34" className="stroke-gray-900 stroke-2 dark:stroke-gray-100" strokeLinecap="round" />

                    {/* Letter "A" accent */}
                    <path d="M24 18L20 26H28L24 18Z" className="fill-gray-100 dark:fill-gray-800" strokeLinecap="round" />
                </svg>
            </div>

            {showText && (
                <span className={`font-semibold tracking-tight ${textClassName}`}>
                    <span className="text-gray-900 dark:text-gray-100">Ande</span>
                    <span className="text-gray-500 dark:text-gray-400">je</span>
                    <span className="text-gray-900 dark:text-gray-100">cru</span>
                    <span className="text-gray-500 dark:text-gray-400">her</span>
                </span>
            )}
        </div>
    )
}
