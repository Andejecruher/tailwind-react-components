import { createBrowserRouter } from "react-router-dom"
import RootLayout from "@src/components/layout/layout"
import ComponentLayout from "@src/components/layout/component-layout"
import NotFound from "@src/pages/not-found"
import UnderConstructionPage from "@src/pages/UnderConstruction"
// import DocumentationPage from "@src/pages/Documentation"
import AboutMePage from "@src/pages/AboutMe"
import Home from "@src/pages/Home"
import ButtonsPage from "@src/pages/Buttons"
import CardsPage from "@src/pages/Cards"
import FormsPage from "@src/pages/Forms"
import ModalsPage from "@src/pages/Modals"
import TypographyPage from "@src/pages/Typography"
import SignupPage from "@src/pages/Signup"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "sobre-mi", element: <AboutMePage /> },
            { path: "docs", element: <UnderConstructionPage /> },
            // Agrupamos rutas con ComponentLayout aquí
            {
                element: <ComponentLayout />,
                children: [
                    { path: "botones", element: <ButtonsPage /> },
                    { path: "tarjetas", element: <CardsPage /> },
                    { path: "formularios", element: <FormsPage /> },
                    { path: "modales", element: <ModalsPage /> },
                    { path: "tipografia", element: <TypographyPage /> },
                    { path: "inicios-de-sesion", element: <SignupPage /> },
                ],
            },
        ],
    },
])

export default router

