import type React from "react"
import { useState } from "react"
import { CodeHighlighter } from "@src/components/ui/code-highlighter"

interface ComponentPreviewProps {
    title: string
    description?: string
    component: React.ReactNode
    code: string
    className?: string
}

export function ComponentPreview({ title, description, component, code, className }: ComponentPreviewProps) {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")

    return (
        <div
            className={`overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 ${className}`}
        >
            <div className="p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                {description && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>}
            </div>

            <div className="px-6">
                <div className="flex space-x-1 border-b border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={`inline-flex items-center border-b-2 px-4 py-2 text-sm font-medium ${activeTab === "preview"
                            ? "border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
                            }`}
                    >
                        Vista previa
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={`inline-flex items-center border-b-2 px-4 py-2 text-sm font-medium ${activeTab === "code"
                            ? "border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
                            }`}
                    >
                        Código
                    </button>
                </div>

                <div className="pt-4">
                    {activeTab === "preview" ? (
                        <div className="flex min-h-[150px] w-full items-center justify-center rounded-md border border-gray-200 p-8 dark:border-gray-700">
                            {component}
                        </div>
                    ) : (
                        <CodeHighlighter code={code} language="tsx" showLineNumbers={true} />
                    )}
                </div>
            </div>

            <div className="p-6"></div>
        </div>
    )
}
