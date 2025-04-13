import { createBrowserRouter } from "react-router-dom"
import RootLayout from "@src/components/layout/layout"
import NotFound from "@src/pages/not-found"
import Home from "@src/pages/Home"
import ButtonsPage from "@src/pages/Buttons"
import CardsPage from "@src/pages/Cards"
import FormsPage from "@src/pages/Forms"
import ModalsPage from "@src/pages/Modals"
import TypographyPage from "@src/pages/Typography"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, // App como layout base si deseas
        errorElement: <NotFound />, // Componente de error
        children: [
            { index: true, element: <Home /> },
            { path: "botones", element: <ButtonsPage /> },
            { path: "tarjetas", element: <CardsPage /> },
            { path: "formularios", element: <FormsPage /> },
            { path: "modales", element: <ModalsPage /> },
            { path: "tipografia", element: <TypographyPage /> },
        ],
    },
])

export default router
