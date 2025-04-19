import type React from "react"

import type { ReactNode } from "react"
import { useState, useRef, useCallback, useEffect } from "react"
import { CodeIcon, EyeIcon, FileCodeIcon, Smartphone, Tablet, Monitor, Maximize2 } from "lucide-react"
import { formatComponentCode } from "@src/lib/utils"
import { motion } from "framer-motion"
import { CodeHighlighter } from "@src/components/ui/code-highlighter"
// import { ClassModifier } from "@src/components/ui/class-modifier"
import { useTransformTailwindClasses } from "@src/hooks/useTransformTailwindClasses";

interface ComponentCodePreviewProps {
    title: string
    description?: string
    component: ReactNode
    componentName: string
    componentProps?: Record<string, unknown>
    sourceCode?: string
    className?: string
    id?: string
    code?: string
    resizable?: boolean
}

// Definimos los breakpoints estándar de Tailwind CSS
const TAILWIND_BREAKPOINTS = {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
}

type BreakpointKey = keyof typeof TAILWIND_BREAKPOINTS

export function ComponentPreview({
    title,
    description,
    component,
    componentName,
    componentProps = {},
    sourceCode,
    className,
    id,
    code,
    resizable = true,
}: ComponentCodePreviewProps) {
    useTransformTailwindClasses(`${id}-preview`);
    const [activeTab, setActiveTab] = useState<"preview" | "code" | "source">("preview")
    const usageCode = code || formatComponentCode(componentName, componentProps)
    const [activeBreakpoint, setActiveBreakpoint] = useState<BreakpointKey | null>(null)
    const [previewWidth, setPreviewWidth] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [maxWidth, setMaxWidth] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const previewRef = useRef<HTMLDivElement>(null)
    const previewContainerRef = useRef<HTMLDivElement>(null)

    const updateMaxWidth = useCallback(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.getBoundingClientRect().width
            setMaxWidth(containerWidth)
            if (previewWidth === 0 || previewWidth > containerWidth) {
                setPreviewWidth(containerWidth)
            }
        }
    }, [previewWidth])

    // Determinar el breakpoint activo basado en el ancho actual
    useEffect(() => {
        const determineBreakpoint = () => {
            const breakpointEntries = Object.entries(TAILWIND_BREAKPOINTS) as [BreakpointKey, number][]
            // Ordenamos de mayor a menor para encontrar el breakpoint más grande que sea menor o igual al ancho actual
            const sortedBreakpoints = [...breakpointEntries].sort((a, b) => b[1] - a[1])

            const currentBreakpoint = sortedBreakpoints.find(([, width]) => previewWidth >= width)?.[0] || "xs"
            setActiveBreakpoint(currentBreakpoint as BreakpointKey)
        }

        if (previewWidth > 0) {
            determineBreakpoint()
        }
    }, [previewWidth])

    useEffect(() => {
        updateMaxWidth()
        window.addEventListener("resize", updateMaxWidth)
        return () => window.removeEventListener("resize", updateMaxWidth)
    }, [updateMaxWidth])

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (isDragging && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect()
                const containerCenter = containerRect.left + containerRect.width / 2
                // Calcular el ancho basado en la distancia desde el centro
                const distanceFromCenter = e.clientX - containerCenter
                // Multiplicar por 2 para obtener el ancho total
                const newWidth = Math.min(Math.max(320, Math.abs(distanceFromCenter) * 2), maxWidth)
                setPreviewWidth(newWidth)
            }
        },
        [isDragging, maxWidth],
    )

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove)
            window.addEventListener("mouseup", handleMouseUp)
            document.body.style.cursor = "ew-resize"
        } else {
            document.body.style.cursor = ""
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
            document.body.style.cursor = ""
        }
    }, [isDragging, handleMouseMove, handleMouseUp])

    const setBreakpoint = (width: number) => {
        setPreviewWidth(Math.min(width, maxWidth))
        setActiveBreakpoint(
            (Object.entries(TAILWIND_BREAKPOINTS) as [BreakpointKey, number][]).find(([, w]) => w === width)?.[0] || null,
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id={id}
            className={`scroll-mt-24 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 ${className}`}
        >
            <div className="p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                {description && <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>}
            </div>

            <div className="px-6">
                <div className="flex space-x-1 overflow-x-auto border-b border-gray-100 dark:border-gray-800">
                    <TabButton
                        active={activeTab === "preview"}
                        onClick={() => setActiveTab("preview")}
                        icon={<EyeIcon className="h-4 w-4" />}
                        label="Vista previa"
                    />
                    <TabButton
                        active={activeTab === "code"}
                        onClick={() => setActiveTab("code")}
                        icon={<CodeIcon className="h-4 w-4" />}
                        label="Uso"
                    />
                    {sourceCode && (
                        <TabButton
                            active={activeTab === "source"}
                            onClick={() => setActiveTab("source")}
                            icon={<FileCodeIcon className="h-4 w-4" />}
                            label="Código fuente"
                        />
                    )}
                </div>

                <div className="py-6">
                    {activeTab === "preview" ? (
                        <div ref={containerRef} className="relative">
                            {resizable && activeTab === "preview" && (
                                <div className="mb-4 flex items-center justify-between overflow-x-auto">
                                    <div className="flex items-center space-x-2">
                                        <BreakpointButton
                                            onClick={() => setBreakpoint(320)}
                                            icon={<Smartphone className="h-4 w-4" />}
                                            label="320px"
                                            isActive={previewWidth === 320}
                                        />
                                        <BreakpointButton
                                            onClick={() => setBreakpoint(375)}
                                            icon={<Smartphone className="h-4 w-4" />}
                                            label="375px"
                                            isActive={previewWidth === 375}
                                        />
                                        <BreakpointButton
                                            onClick={() => setBreakpoint(768)}
                                            icon={<Tablet className="h-4 w-4" />}
                                            label="768px"
                                            isActive={previewWidth === 768}
                                        />
                                        <BreakpointButton
                                            onClick={() => setBreakpoint(1280)}
                                            icon={<Monitor className="h-4 w-4" />}
                                            label="1280px"
                                            isActive={previewWidth === 1280}
                                        />
                                        <BreakpointButton
                                            onClick={() => setBreakpoint(maxWidth)}
                                            icon={<Maximize2 className="h-4 w-4" />}
                                            label="100%"
                                            isActive={previewWidth === maxWidth}
                                        />
                                    </div>
                                    <div className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                        {Math.round(previewWidth)}px
                                    </div>
                                </div>
                            )}
                            <div
                                ref={previewContainerRef}
                                className="relative flex justify-center overflow-visible rounded-xl bg-gray-50 dark:bg-gray-800/50"
                                style={{ minHeight: "200px", paddingRight: "20px" }}
                            >
                                {/* Fondo cuadriculado para indicar transparencia */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjlmYWZiIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmOWZhZmIiLz48cmVjdCB4PSIxMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjBmMGYwIi8+PHJlY3QgeD0iMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==')] opacity-50 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjAyMDIwIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiMyMDIwMjAiLz48cmVjdCB4PSIxMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMmQyZDJkIi8+PHJlY3QgeD0iMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzJkMmQyZCIvPjwvc3ZnPg==')] dark:opacity-30"></div>

                                {/* Contenedor del componente con ancho ajustable */}
                                <div className="relative flex justify-center w-full">
                                    <div
                                        ref={previewRef}
                                        className="@container relative z-10 flex items-center justify-center p-8 transition-all duration-200"
                                        style={{
                                            width: resizable && activeTab === "preview" ? `${previewWidth}px` : "100%",
                                            maxWidth: `${previewWidth}px`,
                                            boxShadow: isDragging ? "0 0 0 2px rgba(99, 102, 241, 0.4)" : "none",
                                        }}
                                    >
                                        <div data-breakpoint={activeBreakpoint} className="w-full flex justify-center items-center" id={`${id}-preview`} >
                                            {component}
                                        </div>
                                    </div>
                                </div>

                                {/* Control de resize - Siempre visible */}
                                {resizable && activeTab === "preview" && (
                                    <div
                                        className={`absolute bottom-0 top-0 z-30 flex cursor-ew-resize items-center justify-center transition-all duration-200 ${isDragging
                                            ? "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
                                            : "hover:bg-indigo-500/5 text-gray-400 hover:text-indigo-600 dark:text-gray-500 dark:hover:text-indigo-400 dark:hover:bg-indigo-500/10"
                                            }`}
                                        style={{
                                            left: `calc(50% + ${previewWidth / 2}px)`,
                                            width: "30px",
                                            transform: "translateX(-50%)",
                                        }}
                                        onMouseDown={handleMouseDown}
                                    >
                                        <div className="flex flex-col items-center gap-1.5 rounded-full bg-white p-1.5 shadow-md dark:bg-gray-800">
                                            <div
                                                className={`h-6 w-1.5 rounded-full ${isDragging ? "bg-indigo-500 dark:bg-indigo-400" : "bg-gray-300 dark:bg-gray-600"
                                                    }`}
                                            ></div>
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-700">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18 8L22 12L18 16"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M6 8L2 12L6 16"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : activeTab === "code" ? (
                        <CodeHighlighter code={usageCode} language="tsx" showLineNumbers={true} />
                    ) : (
                        sourceCode && (
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                                <div className="max-h-[500px] overflow-auto">
                                    <CodeHighlighter code={sourceCode} language="tsx" showLineNumbers={true} />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </motion.div>
    )
}

interface TabButtonProps {
    active: boolean
    onClick: () => void
    icon: ReactNode
    label: string
}

function TabButton({ active, onClick, icon, label }: TabButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`group cursor-pointer relative inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${active
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
        >
            {icon}
            {label}
            {active && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </button>
    )
}

interface BreakpointButtonProps {
    onClick: () => void
    icon: ReactNode
    label: string
    isActive: boolean
}

function BreakpointButton({ onClick, icon, label, isActive }: BreakpointButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`group cursor-pointer flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${isActive
                ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    )
}
