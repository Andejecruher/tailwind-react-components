import { Link } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"
import { Logo } from "@src/components/ui/logo"
import { motion } from "framer-motion"

export default function NotFound() {
    return (
        <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
            {/* Logo animation */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                }}
                className="mb-8"
            >
                <Logo className="h-16 w-16 sm:h-20 sm:w-20" textClassName="text-2xl sm:text-3xl" />
            </motion.div>

            {/* Error message with animation */}
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">404</h1>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-700 dark:text-gray-300">
                    Componente no encontrado
                </h2>
                <p className="mb-8 max-w-md text-gray-500 dark:text-gray-400">
                    Lo sentimos, no pudimos encontrar el componente que estás buscando. Puede que haya sido movido o eliminado.
                </p>
            </motion.div>

            {/* Buttons with animation */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
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
            </motion.div>

            {/* Component suggestions with staggered animation */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 w-full max-w-lg"
            >
                <h3 className="mb-4 text-lg font-medium">Componentes populares</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {[
                        { name: "Botones", href: "/botones", color: "from-rose-500 to-orange-500" },
                        { name: "Tarjetas", href: "/tarjetas", color: "from-blue-500 to-cyan-500" },
                        { name: "Formularios", href: "/formularios", color: "from-violet-500 to-purple-500" },
                        { name: "Modales", href: "/modales", color: "from-emerald-500 to-green-500" },
                        { name: "Tipografía", href: "/tipografia", color: "from-amber-500 to-yellow-500" },
                    ].map((component, index) => (
                        <motion.div
                            className="flex items-center justify-center"
                            key={component.href}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.5 + index * 0.1,
                            }}
                        >
                            <Link
                                to={component.href}
                                className={`group relative overflow-hidden rounded-full bg-gradient-to-r ${component.color} p-[1px] transition-all hover:shadow-md`}
                            >
                                <div className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900 transition-all group-hover:bg-opacity-90 dark:bg-gray-900 dark:text-white">
                                    {component.name}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Decorative element with animation */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-16 grid w-full max-w-sm grid-cols-4 gap-2"
            >
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        className={`h-8 w-full rounded-md ${i % 3 === 0
                            ? "bg-gray-900 dark:bg-gray-100"
                            : i % 3 === 1
                                ? "bg-gray-300 dark:bg-gray-700"
                                : "bg-gray-100 dark:bg-gray-800"
                            }`}
                    ></motion.div>
                ))}
            </motion.div>
        </div>
    )
}
