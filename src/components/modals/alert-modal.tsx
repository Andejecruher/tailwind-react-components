interface AlertDialogProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    onConfirm: () => void
    title: string
    description: string
}


export function AlertModal({ isOpen, setIsOpen, onConfirm, title, description }: AlertDialogProps) {

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:bg-red-600 dark:text-white dark:hover:bg-red-700"
            >
                Eliminar cuenta
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
                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => { onConfirm(); }}
                                className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:bg-red-600 dark:text-white dark:hover:bg-red-700"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}