import '@src/styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, Theme } from "@src/context/theme-provider"
import router from './router/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme={localStorage.getItem("theme") as Theme || "system"} enableSystem>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
