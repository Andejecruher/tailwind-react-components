import { Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbProps {
    items: {
        title: string
        href: string
    }[]
    className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center text-sm text-gray-500 dark:text-gray-400 ${className || ""}`}
        >
            <ol className="flex items-center space-x-2">
                <li>
                    <Link to="/" className="flex items-center hover:text-gray-900 dark:hover:text-gray-100">
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Inicio</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4" />
                        <Link
                            to={item.href}
                            className={`hover:text-gray-900 dark:hover:text-gray-100 ${index === items.length - 1 ? "text-gray-900 font-medium dark:text-gray-100" : ""
                                }`}
                            aria-current={index === items.length - 1 ? "page" : undefined}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
