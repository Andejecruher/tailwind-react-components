import { createBrowserRouter } from "react-router-dom"
import RootLayout from "@src/components/layout"
import Home from "@src/pages/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, // App como layout base si deseas
        children: [
            { index: true, element: <Home /> },
            { path: "buttons", element: <div className="text-2xl">Aqui van los botones</div> },
            { path: "cards", element: <div className="text-2xl">Aqui van las tarjetas</div> },
            { path: "about", element: <div className="text-2xl">About Us</div> },
        ],
    },
])

export default router
