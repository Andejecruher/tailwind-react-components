/* eslint-disable react-hooks/exhaustive-deps */
import type React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { ChevronRightIcon } from "@src/components/ui/icons"
import { motion, AnimatePresence } from "framer-motion"

interface ComponentCategory {
    title: string
    href: string
    metaTitle?: string
    description?: string
    items: {
        title: string
        href: string
    }[]
}

const componentCategories: ComponentCategory[] = [
    {
        title: "Botones",
        href: "/botones",
        metaTitle: "Botones - Galería de Componentes",
        description: "Descubre botones modernos y personalizables para tus proyectos web.",
        items: [
            { title: "Botón Primario", href: "/botones#boton-primario" },
            { title: "Botón Secundario", href: "/botones#boton-secundario" },
            { title: "Botón Outline", href: "/botones#boton-outline" },
            { title: "Botón Ghost", href: "/botones#boton-ghost" },
            { title: "Botón Destructivo", href: "/botones#boton-destructivo" },
            { title: "Botón Link", href: "/botones#boton-link" },
            { title: "Botón Pequeño", href: "/botones#boton-pequeno" },
            { title: "Botón Grande", href: "/botones#boton-grande" },
            { title: "Botón Compartir", href: "/botones#boton-compartir" },
        ],
    },
    {
        title: "Tarjetas",
        href: "/tarjetas",
        metaTitle: "Tarjetas - Galería de Componentes",
        description: "Explora tarjetas de diseño responsivo creadas con TailwindCSS y ReactJS.",
        items: [
            { title: "Tarjeta Básica", href: "/tarjetas#basica" },
            { title: "Tarjeta de Producto", href: "/tarjetas#producto" },
            { title: "Tarjeta de Usuario", href: "/tarjetas#usuario" },
        ],
    },
    {
        title: "Formularios",
        href: "/formularios",
        metaTitle: "Formularios - Galería de Componentes",
        description: "Encuentra formularios estilizados y funcionales para tus aplicaciones web.",
        items: [
            { title: "Formulario de Contacto", href: "/formularios#contacto" },
            { title: "Formulario de Registro", href: "/formularios#registro" },
        ],
    },
    {
        title: "Modales",
        href: "/modales",
        metaTitle: "Modales - Galería de Componentes",
        description: "Explora modales interactivos y personalizables para mejorar la experiencia del usuario.",
        items: [
            { title: "Diálogo Básico", href: "/modales#basico" },
            { title: "Diálogo de Alerta", href: "/modales#alerta" },
            { title: "Drawer (Cajón)", href: "/modales#drawer" },
        ],
    },
    {
        title: "Tipografía",
        href: "/tipografia",
        metaTitle: "Tipografía - Galería de Componentes",
        description: "Descubre estilos tipográficos modernos y elegantes para tus proyectos.",
        items: [
            { title: "Encabezados", href: "/tipografia#encabezados" },
            { title: "Párrafos", href: "/tipografia#parrafos" },
            { title: "Listas", href: "/tipografia#listas" },
        ],
    },
    {
        title: "Inicios de Sesión",
        href: "/inicios-de-sesion",
        metaTitle: "Inicios de Sesión - Galería de Componentes",
        description: "Descubre inicios de sesión estilizados y funcionales para tus aplicaciones.",
        items: [
            { title: "Inicio de Sesión Básico", href: "/inicios-de-sesion#signup-flower-basic" },
        ],
    },
]

export function SidebarNav({ setBreadcrumbItems }: { setBreadcrumbItems: React.Dispatch<React.SetStateAction<{ title: string; description: string; href: string }[]>> }) {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
        // Inicialmente expandir la categoría activa
        const expanded: Record<string, boolean> = {}
        const currentCategory = componentCategories.find((category) => pathname.startsWith(category.href))
        if (currentCategory) {
            expanded[currentCategory.href] = true
        }
        return expanded
    })

    // Actualizar categorías expandidas cuando cambia la ruta
    useEffect(() => {
        const currentCategory = componentCategories.find((category) => pathname.startsWith(category.href))
        if (currentCategory) {
            setExpandedCategories((prev) => ({
                ...prev,
                [currentCategory.href]: true,
            }))
        }
    }, [pathname, setBreadcrumbItems])

    // Manejar el scroll al componente cuando se carga la página con un hash
    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                scrollToComponent(window.location.hash.substring(1))
            }, 300) // Pequeño retraso para asegurar que el DOM esté listo
        }
    }, [pathname])

    const toggleCategory = (href: string) => {
        // Si hay otras categorías abiertas, cerrarlas
        Object.keys(expandedCategories).forEach((key) => {
            if (key !== href) {
                expandedCategories[key] = false
            }
        })
        // Si la categoría ya está expandida, solo navegamos
        if (expandedCategories[href]) {
            navigate(href)
            return
        }
        // Si no está expandida, navegamos y la expandimos
        navigate(href)
        // Alternar la categoría expandida
        setExpandedCategories((prev) => ({
            ...prev,
            [href]: !prev[href],
        }))
        const breadcrumbItem = componentCategories.find((category) => category.href === href);
        // Actualizar breadcrumbItems
        if (breadcrumbItem) {
            setBreadcrumbItems([{
                title: breadcrumbItem.title,
                description: breadcrumbItem.description || "",
                href: breadcrumbItem.href,
            }])
        }
    }

    // Función para hacer scroll al componente
    const scrollToComponent = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            // Calcular la posición considerando un offset para el header fijo
            const headerOffset = 100 // Ajustar según la altura del header
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            // Scroll suave a la posición
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })

            // Añadir un efecto de resaltado temporal
            element.classList.add("highlight-component")
            setTimeout(() => {
                element.classList.remove("highlight-component")
            }, 2000)
        }
    }

    // Manejar clic en enlaces de componentes
    const handleComponentClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()

        // Extraer el ID del componente del hash
        const hash = href.split("#")[1]
        if (!hash) return

        // actualizar el breadcrumbItems
        const breadcrumbItem = componentCategories.find((category) => category.href === pathname)
        if (breadcrumbItem) {
            setBreadcrumbItems([{
                title: breadcrumbItem.title,
                description: breadcrumbItem.description || "",
                href: breadcrumbItem.href,
            }])
        }
        // Si estamos en la misma página, solo hacemos scroll
        if (pathname === href.split("#")[0]) {
            scrollToComponent(hash)
            // Actualizar la URL sin recargar la página
            window.history.pushState({}, "", href)
        } else {
            // Si es otra página, navegamos y luego haremos scroll cuando se cargue
            navigate(href)
        }
    }

    useEffect(() => {
        // Añadir el efecto de resaltado a los componentes al cargar la página        
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })

        // Setear el breadcrumbItems al cargar la página
        const breadcrumbItem = componentCategories.find((category) => pathname.startsWith(category.href))
        if (breadcrumbItem) {
            setBreadcrumbItems([{
                title: breadcrumbItem.title,
                description: breadcrumbItem.description || "",
                href: breadcrumbItem.href,
            }])
        }
    }, [pathname])

    return (
        <div className="w-full">
            <nav className="space-y-1.5">
                {componentCategories.map((category) => {
                    const isActive = pathname.startsWith(category.href)
                    const isExpanded = expandedCategories[category.href]

                    return (
                        <div key={category.href} className="overflow-hidden rounded-lg">
                            <button
                                onClick={() => toggleCategory(category.href)}
                                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive
                                    ? "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 shadow-sm dark:from-gray-700 dark:to-gray-800 dark:text-white"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-white"
                                    }`}
                            >
                                <span>{category.title}</span>
                                <motion.span
                                    animate={{ rotate: isExpanded ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white/80 shadow-sm dark:bg-gray-700/80"
                                >
                                    <ChevronRightIcon className="h-3.5 w-3.5" />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-200 pl-3 dark:border-gray-700">
                                            {category.items.map((item) => {
                                                const itemHref = item.href.split("#")[0]
                                                const itemHash = item.href.split("#")[1]
                                                const itemIsActive = pathname === itemHref && window.location.hash === `#${itemHash}`

                                                return (
                                                    <a
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={(e) => handleComponentClick(e, item.href)}
                                                        className={`group flex items-center rounded-lg px-4 py-2 text-sm transition-all ${itemIsActive
                                                            ? "bg-white font-medium text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                                                            : "text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-sm dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                            }`}
                                                    >
                                                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors group-hover:bg-gray-900 dark:bg-gray-600 dark:group-hover:bg-gray-300"></span>
                                                        {item.title}
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </nav>
        </div>
    )
}
