import type React from "react"
import { useState } from "react"
import { CodeHighlighter } from "@src/components/ui/code-highlighter"
import { formatComponentCode } from "@src/lib/utils"
import { Eye, Code, FileCode } from "lucide-react"

interface ComponentCodePreviewProps {
    title: string
    description?: string
    component: React.ReactNode
    componentName: string
    componentProps?: Record<string, string | number | boolean | (() => void) | undefined>
    className?: string
    sourceCode?: string
}

export function ComponentPreview({
    title,
    description,
    component,
    componentName,
    componentProps = {},
    className,
    sourceCode,
}: ComponentCodePreviewProps) {
    const [activeTab, setActiveTab] = useState<"preview" | "code" | "source">("preview")
    const useCode = formatComponentCode(componentName, componentProps)

    return (
        <div
            className={`overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 ${className}`}
        >
            <div className="p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                {description && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>}
            </div>

            <div className="px-6">
                <div className="flex space-x-1 overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "preview"
                            ? "border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300"
                            }`}
                    >
                        <Eye className="h-4 w-4" />
                        Vista previa
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "code"
                            ? "border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300"
                            }`}
                    >
                        <Code className="h-4 w-4" />
                        Uso
                    </button>
                    {sourceCode && (
                        <button
                            onClick={() => setActiveTab("source")}
                            className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "source"
                                ? "border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300"
                                }`}
                        >
                            <FileCode className="h-4 w-4" />
                            Código fuente
                        </button>
                    )}
                </div>


                <div className="pt-4">
                    {activeTab === "preview" ? (
                        <div className="flex min-h-[100px] w-full items-center justify-center rounded-md border-1 border-dashed border-gray-400 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
                            {component}
                        </div>
                    ) : activeTab === "code" ? (
                        <CodeHighlighter code={useCode} language="tsx" showLineNumbers={true} />
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

            <div className="p-6"></div>
        </div>
    )
}
