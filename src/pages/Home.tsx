import { Link } from "react-router-dom"
import { ChevronRight, Layers, Layout, Square, Type, Code, ScanEye } from "lucide-react"

export default function Home() {
    const categories = [
        {
            title: "Botones",
            description: "Diferentes estilos y variantes de botones para diversas acciones.",
            icon: <Square className="h-6 w-6" />,
            href: "/botones",
        },
        {
            title: "Tarjetas",
            description: "Contenedores versátiles para mostrar contenido de manera organizada.",
            icon: <Layout className="h-6 w-6" />,
            href: "/tarjetas",
        },
        {
            title: "Formularios",
            description: "Elementos de formulario con validación y estilos consistentes.",
            icon: <Code className="h-6 w-6" />,
            href: "/formularios",
        },
        {
            title: "Modales",
            description: "Ventanas emergentes para interacciones focalizadas.",
            icon: <Layers className="h-6 w-6" />,
            href: "/modales",
        },
        {
            title: "Tipografía",
            description: "Estilos de texto y componentes tipográficos.",
            icon: <Type className="h-6 w-6" />,
            href: "/tipografia",
        },
        {
            title: "Inicios de Sesión",
            description: "Componentes para facilitar el inicio de sesión de usuarios.",
            icon: <ScanEye className="h-6 w-6" />,
            href: "/inicios-de-sesion",
        }
    ]

    return (
        <div className="container mx-auto px-4 py-10">
            <section className="mx-auto max-w-4xl space-y-6 py-10 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Galería de Componentes</h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-500 dark:text-gray-400">
                    Una colección de componentes React con TailwindCSS, diseñados para ser reutilizables, accesibles y fáciles de
                    integrar en tus proyectos.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/botones"
                        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Explorar Componentes
                    </Link>
                    <Link
                        to="https://github.com/Andejecruher/tailwind-react-components"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                        Ver en GitHub
                    </Link>
                </div>
            </section>

            <section className="py-12">
                <h2 className="mb-8 text-center text-3xl font-bold">Componentes</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                        >
                            <div className="mb-5 space-y-2">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                            </div>
                            <div className="pt-4">
                                <Link
                                    to={category.href}
                                    className="inline-flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                                >
                                    Explorar <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
