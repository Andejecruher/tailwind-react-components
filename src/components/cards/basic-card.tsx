
interface BasicCardProps {
    title: string;
    description: string;
    content: string;
    actionLabel: string;
    action: () => void;
}

export function BasicCard({ title, description, content, actionLabel, action }: BasicCardProps) {
    return (
        <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            <div className="px-6 py-4">
                <p>{content}</p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
                <button
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                    onClick={action}
                >
                    {actionLabel}
                </button>
            </div>
        </div>
    )
}