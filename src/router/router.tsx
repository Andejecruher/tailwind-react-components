import { createBrowserRouter } from "react-router-dom"
import App from "../App" // Layout principal si lo usas

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App como layout base si deseas
        children: [
            { index: true, element: <div className="text-2xl">Home</div> },
            { path: "buttons", element: <div className="text-2xl">Aqui van los botones</div> },
            { path: "cards", element: <div className="text-2xl">Aqui van las tarjetas</div> },
            { path: "about", element: <div className="text-2xl">About Us</div> },
        ],
    },
])

export default router
