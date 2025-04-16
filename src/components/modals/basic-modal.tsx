interface DialogProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    title: string
    description: string
    content: string
    actionLabel: string
}

export function BasicModal({ isOpen, setIsOpen, title, description, content, actionLabel }: DialogProps) {

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
                Abrir diálogo
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
                    <div className="z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">{title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                        </div>
                        <div className="py-4">
                            <p>{content}</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                            >
                                {actionLabel || "Aceptar"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}