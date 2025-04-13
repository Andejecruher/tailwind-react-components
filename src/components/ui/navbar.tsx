import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@src/components/ui/theme-toggle"

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Botones", href: "/botones" },
    { name: "Tarjetas", href: "/tarjetas" },
    { name: "Formularios", href: "/formularios" },
    { name: "Modales", href: "/modales" },
    { name: "Tipografía", href: "/tipografia" },
]

export default function Navbar() {
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-700 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="font-bold">Galería de Componentes</span>
                    </Link>
                    <nav className="hidden gap-6 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${pathname === item.href ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:hidden dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                        aria-label="Menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-gray-900 md:hidden">
                    <nav className="container mx-auto px-4 flex flex-col gap-4 pt-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${pathname === item.href ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
