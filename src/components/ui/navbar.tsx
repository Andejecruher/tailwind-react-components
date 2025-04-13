import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@src/components/ui/theme-toggle"
import { Logo } from "@src/components/ui/logo"
import { motion } from "framer-motion"

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
    const [scrolled, setScrolled] = useState(false)

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80" : "bg-white dark:bg-gray-900"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                            <Logo />
                        </Link>
                        <nav className="hidden md:block">
                            <ul className="flex space-x-1">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <li key={item.href} className="relative">
                                            <Link
                                                to={item.href}
                                                className={`relative flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors ${isActive
                                                    ? "text-gray-900 dark:text-white"
                                                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                                    }`}
                                            >
                                                {item.name}
                                                {isActive && (
                                                    <motion.div
                                                        className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800"
                                                        layoutId="navbar-active-indicator"
                                                        transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
                                                        style={{ zIndex: -1 }}
                                                    />
                                                )}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden items-center gap-2 md:flex">
                            <Link
                                to="https://github.com/Andejecruher/tailwind-react-components"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-github"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <ThemeToggle />
                        </div>

                        <div className="flex md:hidden">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                aria-label="Menu"
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-x-0 top-16 z-50 border-b border-t border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:hidden"
                >
                    <nav className="container mx-auto px-4">
                        <ul className="space-y-1 py-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <li key={item.href}>
                                        <Link
                                            to={item.href}
                                            className={`flex h-12 items-center rounded-lg px-4 text-sm font-medium transition-colors ${isActive
                                                ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                            <li>
                                <Link
                                    to="https://github.com/andejecruher/component-gallery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 items-center gap-2 rounded-lg px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-github"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </header>
    )
}
