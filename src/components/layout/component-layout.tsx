import type React from "react"

import { useState, useEffect } from "react"
import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { SidebarNav } from "@src/components/ui/sidebar-nav"
import { MenuIcon, XIcon } from "@src/components/ui/icons"
import { motion, AnimatePresence } from "framer-motion"
import { Outlet } from "react-router-dom"


export default function ComponentLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detectar si es móvil
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkIfMobile()
        window.addEventListener("resize", checkIfMobile)

        return () => {
            window.removeEventListener("resize", checkIfMobile)
        }
    }, [])

    // Cerrar sidebar al cambiar a desktop
    useEffect(() => {
        if (!isMobile) {
            setSidebarOpen(false)
        }
    }, [isMobile])

    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={[]} className="mb-6" />

            {/* Header con efecto de gradiente */}
            <div className="relative mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 dark:from-gray-900 dark:to-gray-800">
               /* Título y descripción */

                {/* Elementos decorativos */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-gray-200/40 to-transparent dark:from-gray-700/40"></div>
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-tr from-gray-200/40 to-transparent dark:from-gray-700/40"></div>
                <div className="absolute bottom-4 right-8 h-16 w-16 rounded-full bg-gradient-to-tl from-gray-200/60 to-transparent dark:from-gray-700/60"></div>
            </div>

            <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
                {/* Sidebar para móvil (botón) */}
                {isMobile && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-4 shadow-sm transition-all hover:shadow-md dark:from-gray-800 dark:to-gray-900"
                        >
                            <span className="font-medium">Navegación de componentes</span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-700">
                                {sidebarOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
                            </span>
                        </button>
                    </motion.div>
                )}

                {/* Sidebar para móvil (expandible) */}
                <AnimatePresence>
                    {isMobile && sidebarOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 overflow-hidden"
                        >
                            <div className="rounded-xl bg-white p-5 shadow-lg dark:bg-gray-800">
                                <SidebarNav />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Sidebar para desktop (siempre visible) */}
                <div className="hidden lg:block">
                    <div className="sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-xl bg-white p-5 shadow-lg dark:bg-gray-800"
                        >
                            <h3 className="mb-4 px-3 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                Navegación
                            </h3>
                            <SidebarNav />
                        </motion.div>
                    </div>
                </div>

                {/* Contenido principal */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Outlet />
                </motion.div>
            </div>
        </div>
    )
}
