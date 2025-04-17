import type React from "react"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Clock, Mail, AlertTriangle, Construction, Hammer, Wrench } from "lucide-react"
import { useState, useEffect } from "react"

interface UnderConstructionProps {
    title?: string
    description?: string
    estimatedCompletion?: string
    showHomeLink?: boolean
    showNotifyOption?: boolean
}

export default function UnderConstruction({
    title = "Página en Construcción",
    description = "Estamos trabajando para ofrecerte una experiencia excepcional. Esta sección estará disponible pronto.",
    estimatedCompletion = "Próximamente",
    showHomeLink = true,
    showNotifyOption = true,
}: UnderConstructionProps) {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    // Efecto para iniciar la animación de las herramientas
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 1000)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica para guardar el email
        setIsSubmitted(true)
        setEmail("")
    }

    // Variantes para animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    }

    const toolsVariants = {
        idle: { rotate: 0 },
        animate: { rotate: [0, -15, 15, -5, 5, 0], transition: { duration: 1 } },
    }

    const progressVariants = {
        initial: { width: "0%" },
        animate: {
            width: "70%",
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const,
            },
        },
    }

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            <div className="relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-90 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTIxMjQiIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAwIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

                    {/* Decorative elements */}
                    <motion.div
                        className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-amber-500/5 dark:bg-amber-500/5"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.2, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/5 dark:bg-amber-500/5"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </div>

                <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16">
                    {showHomeLink && (
                        <Link
                            to="/"
                            className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gray-100/50 px-4 py-2 text-sm text-gray-600 backdrop-blur-sm transition-colors hover:bg-gray-200/80 hover:text-gray-900 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/80 dark:hover:text-white md:left-8 md:top-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Volver al inicio
                        </Link>
                    )}

                    <motion.div
                        className="mx-auto max-w-3xl text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Construction animation */}
                        <motion.div
                            className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-white p-4 shadow-lg dark:bg-gray-800 sm:h-40 sm:w-40"
                            variants={pulseVariants}
                            animate="pulse"
                        >
                            <div className="relative">
                                <motion.div
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-600 dark:text-amber-500"
                                    variants={toolsVariants}
                                    animate={isAnimating ? "animate" : "idle"}
                                >
                                    <Construction className="h-12 w-12 sm:h-16 sm:w-16" />
                                </motion.div>
                                <motion.div
                                    className="absolute -right-4 -top-4 text-amber-600 dark:text-amber-500"
                                    variants={toolsVariants}
                                    animate={isAnimating ? "animate" : "idle"}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Hammer className="h-6 w-6 sm:h-8 sm:w-8" />
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-4 -left-4 text-amber-600 dark:text-amber-500"
                                    variants={toolsVariants}
                                    animate={isAnimating ? "animate" : "idle"}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Wrench className="h-6 w-6 sm:h-8 sm:w-8" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Title and description */}
                        <motion.h1
                            className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
                            variants={itemVariants}
                        >
                            {title}
                        </motion.h1>

                        <motion.div
                            className="mb-8 h-1 w-24 rounded-full bg-amber-600 mx-auto dark:bg-amber-500"
                            variants={itemVariants}
                        />

                        <motion.p className="mb-8 text-lg text-gray-600 dark:text-gray-300" variants={itemVariants}>
                            {description}
                        </motion.p>

                        {/* Progress bar */}
                        <motion.div className="mb-8 w-full max-w-md mx-auto" variants={itemVariants}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">Progreso</span>
                                <span className="text-sm text-amber-600 dark:text-amber-500">70%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-500 dark:to-amber-400"
                                    variants={progressVariants}
                                    initial="initial"
                                    animate="animate"
                                />
                            </div>
                        </motion.div>

                        {/* Estimated completion */}
                        <motion.div
                            className="mb-8 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300"
                            variants={itemVariants}
                        >
                            <Clock className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                            <span>
                                Fecha estimada de finalización:{" "}
                                <span className="font-medium text-gray-900 dark:text-white">{estimatedCompletion}</span>
                            </span>
                        </motion.div>

                        {/* Notification form */}
                        {showNotifyOption && (
                            <motion.div className="w-full max-w-md mx-auto" variants={itemVariants}>
                                {!isSubmitted ? (
                                    <>
                                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                            Déjanos tu correo y te notificaremos cuando esta página esté lista
                                        </p>
                                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="tu@email.com"
                                                required
                                                className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-amber-600 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500"
                                            />
                                            <button
                                                type="submit"
                                                className="rounded-lg bg-amber-600 px-6 py-2 font-medium text-white transition-colors hover:bg-amber-700 dark:bg-amber-500 dark:text-gray-900 dark:hover:bg-amber-400"
                                            >
                                                Notificarme
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <p className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500">
                                            <Mail className="h-5 w-5" />
                                            <span>¡Gracias! Te notificaremos cuando la página esté lista.</span>
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {/* Warning message */}
                        <motion.div
                            className="mt-12 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                            variants={itemVariants}
                        >
                            <div className="flex items-center gap-3">
                                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Mientras tanto, puedes explorar otras secciones de nuestro sitio que ya están disponibles.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
