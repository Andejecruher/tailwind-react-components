"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { ArrowLeft, Home, Search } from "lucide-react"

export default function NotFound() {
    const [mounted, setMounted] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Handle mouse movement for the parallax effect
    useEffect(() => {
        setMounted(true)

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    if (!mounted) return null

    return (
        <div className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-4 py-16">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"></div>

                {/* Decorative circles */}
                <div
                    className="absolute -left-20 -top-20 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-gray-200/20 to-transparent dark:from-gray-800/20"
                    style={{
                        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                        transition: "transform 0.2s ease-out",
                    }}
                ></div>
                <div
                    className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tl from-gray-200/30 to-transparent dark:from-gray-800/30"
                    style={{
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                        transition: "transform 0.2s ease-out",
                    }}
                ></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIiBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzBDNjAgNDYuNTY5IDQ2LjU2OSA2MCAzMCA2MCAxMy40MzEgNjAgMCA0Ni41NjkgMCAzMCAwIDEzLjQzMSAxMy40MzEgMCAzMCAweiIvPjwvZz48L3N2Zz4=')] bg-center opacity-30 dark:opacity-10"></div>
            </div>

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
                {/* 404 Text with modern styling */}
                <div className="relative mb-8 select-none text-center">
                    <h1 className=" text-[10rem] font-black leading-none tracking-tighter text-gray-900 opacity-10 dark:text-white sm:text-[12rem]">
                        404
                    </h1>
                    <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Página no encontrada
                    </h2>
                </div>

                {/* Description */}
                <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-300">
                    No pudimos encontrar el componente que estás buscando. Quizás quieras explorar nuestras otras secciones.
                </p>

                {/* Search bar (decorative) */}
                <div className="group mb-8 flex w-full max-w-md items-center overflow-hidden rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <Search className="mr-2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar componentes..."
                        className="w-full bg-transparent py-1 text-gray-700 placeholder-gray-400 outline-none dark:text-gray-200"
                        onKeyDown={(e) => e.key === "Enter" && window.location.assign("/")}
                    />
                </div>

                {/* Navigation buttons with modern styling */}
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Ir al inicio
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/80 px-6 py-2.5 text-sm font-medium text-gray-900 backdrop-blur transition-all hover:bg-gray-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-gray-700/90"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver atrás
                    </button>
                </div>

                {/* Component suggestions with modern styling */}
                <div className="mt-12 w-full max-w-lg">
                    <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Explorar categorías</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            { name: "Botones", href: "/botones", color: "from-rose-500 to-orange-500" },
                            { name: "Tarjetas", href: "/tarjetas", color: "from-blue-500 to-cyan-500" },
                            { name: "Formularios", href: "/formularios", color: "from-violet-500 to-purple-500" },
                            { name: "Modales", href: "/modales", color: "from-emerald-500 to-green-500" },
                            { name: "Tipografía", href: "/tipografia", color: "from-amber-500 to-yellow-500" },
                        ].map((component) => (
                            <Link
                                key={component.href}
                                to={component.href}
                                className={`group relative overflow-hidden rounded-full bg-gradient-to-r ${component.color} p-[1px] transition-all hover:shadow-md`}
                            >
                                <div className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900 transition-all group-hover:bg-opacity-90 dark:bg-gray-900 dark:text-white">
                                    {component.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
