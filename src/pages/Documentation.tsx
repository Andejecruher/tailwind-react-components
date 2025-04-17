"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Book, Code } from "lucide-react"
import { useState } from "react"

export default function DocumentacionPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>("getting-started")

    const categories = [
        {
            id: "getting-started",
            title: "Primeros Pasos",
            icon: <Book className="h-5 w-5" />,
            articles: [
                { title: "Instalación", slug: "instalacion" },
                { title: "Estructura del Proyecto", slug: "estructura" },
                { title: "Configuración", slug: "configuracion" },
            ],
        },
        {
            id: "components",
            title: "Componentes",
            icon: <Code className="h-5 w-5" />,
            articles: [
                { title: "Botones", slug: "botones" },
                { title: "Tarjetas", slug: "tarjetas" },
                { title: "Formularios", slug: "formularios" },
                { title: "Modales", slug: "modales" },
                { title: "Tipografía", slug: "tipografia" },
            ],
        },
    ]

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-90 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTIxMjQiIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAwIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 py-24 text-center">
                    <Link
                        to="/"
                        className="mb-8 inline-flex items-center gap-2 rounded-full bg-gray-100/50 px-4 py-2 text-sm text-gray-600 backdrop-blur-sm transition-colors hover:bg-gray-200/80 hover:text-gray-900 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/80 dark:hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver al inicio
                    </Link>

                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            Documentación
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                            Guías completas y recursos para ayudarte a construir con nuestros componentes.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
                                <h3 className="mb-4 text-lg font-semibold text-amber-600 dark:text-amber-500">Categorías</h3>
                                <nav className="space-y-1">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${activeCategory === category.id
                                                ? "bg-gray-100 text-amber-600 dark:bg-gray-700 dark:text-amber-500"
                                                : "text-gray-600 hover:bg-gray-100 hover:text-amber-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-amber-500"
                                                }`}
                                        >
                                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-50 dark:bg-gray-900">
                                                {category.icon}
                                            </span>
                                            {category.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {categories.map((category) => (
                            <div key={category.id} className={`space-y-8 ${activeCategory === category.id ? "block" : "hidden"}`}>
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-50 dark:bg-gray-900">
                                            {category.icon}
                                        </span>
                                        {category.title}
                                    </h2>

                                    <div className="prose prose-gray max-w-none dark:prose-invert">
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Explora nuestra documentación detallada sobre {category.title.toLowerCase()} para aprender cómo
                                            integrar y utilizar nuestros componentes de manera efectiva en tus proyectos.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {category.articles.map((article) => (
                                        <motion.div
                                            key={article.slug}
                                            initial="hidden"
                                            animate="visible"
                                            variants={fadeInUp}
                                            transition={{ duration: 0.3 }}
                                            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:border-amber-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-amber-600/30"
                                        >
                                            <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                                                {article.title}
                                            </h3>
                                            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                                Guía detallada sobre {article.title.toLowerCase()} y su implementación.
                                            </p>
                                            <Link
                                                to={`/documentacion/${category.id}/${article.slug}`}
                                                className="inline-flex items-center text-sm font-medium text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400"
                                            >
                                                Leer más
                                                <svg
                                                    className="ml-1 h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Simple Getting Started Guide */}
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Guía Rápida de Inicio</h2>

                    <div className="prose prose-gray max-w-none dark:prose-invert">
                        <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-500">Instalación</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Para comenzar a utilizar nuestra biblioteca de componentes, instala el paquete usando npm:
                        </p>

                        <div className="my-4 rounded-md bg-gray-50 p-4 dark:bg-gray-900">
                            <code className="text-amber-600 dark:text-amber-500">npm install @andejecruher/component-gallery</code>
                        </div>

                        <h3 className="mt-8 text-xl font-semibold text-amber-600 dark:text-amber-500">Uso Básico</h3>
                        <p className="text-gray-600 dark:text-gray-300">Importa los componentes que necesites en tu aplicación:</p>

                        <div className="my-4 rounded-md bg-gray-50 p-4 dark:bg-gray-900">
                            <code className="text-gray-700 dark:text-gray-300">
                                import {"{"} Button {"}"} from '@andejecruher/component-gallery';
                                <br />
                                <br />
                                function App() {"{"}
                                <br />
                                &nbsp;&nbsp;return (<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button variant="primary"&gt;Click Me&lt;/Button&gt;
                                <br />
                                &nbsp;&nbsp;);
                                <br />
                                {"}"}
                            </code>
                        </div>

                        <p className="mt-6 text-gray-600 dark:text-gray-300">
                            Para obtener información más detallada sobre cada componente y sus opciones de configuración, consulta las
                            secciones específicas en la documentación.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
