import Navbar from "@src/components/ui/navbar"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 bg-background">
                    <Outlet />
                </main>
                <footer className="border-t py-6">
                    <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
                            &copy; {new Date().getFullYear()} Andejecruher. Todos los derechos reservados.
                        </p>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-right">
                            Construido con ReactJS y TailwindCSS
                        </p>
                    </div>
                </footer>
            </div>
            <div id="toast-container" className="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>
        </>
    )
}
