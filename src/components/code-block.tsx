import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
    code: string
    language?: string
    className?: string
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)

        // Show toast notification
        const toast = document.createElement("div")
        toast.className =
            "flex items-center gap-2 rounded-md bg-gray-900 p-4 text-sm text-white dark:bg-gray-100 dark:text-gray-900"
        toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Código copiado al portapapeles</span>
    `

        const container = document.getElementById("toast-container")
        if (container) {
            container.appendChild(toast)

            // Remove toast after 2 seconds
            setTimeout(() => {
                container.removeChild(toast)
                setCopied(false)
            }, 2000)
        }
    }

    return (
        <div className={`relative rounded-md bg-gray-100 dark:bg-gray-800 ${className}`}>
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">{language}</div>
                <button
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                    onClick={copyToClipboard}
                    aria-label="Copiar código"
                >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
            </div>
            <pre className="overflow-x-auto p-4 text-sm">
                <code>{code}</code>
            </pre>
        </div>
    )
}
