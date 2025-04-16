interface ProductCardProps {
    title: string;
    price: string;
    description: string;
    imageUrl: string;
    onViewDetails: () => void;
    onBuyNow: () => void;
    labelActionViewDetails?: string;
    labelActionBuyNow?: string;
}

export function ProductCard({ title, price, description, imageUrl, onViewDetails, onBuyNow, labelActionViewDetails, labelActionBuyNow }: ProductCardProps) {
    return (
        <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{price}</p>
            </div>
            <div className="px-6 py-4">
                <div className="mb-4 aspect-video w-full rounded-md bg-gray-200 dark:bg-gray-700" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}></div>
                <p>{description}</p>
            </div>
            <div className="flex justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-700">
                <button onClick={onViewDetails} className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                    {labelActionViewDetails || "Ver detalles"}
                </button>
                <button onClick={onBuyNow} className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                    {labelActionBuyNow || "Comprar ahora"}
                </button>
            </div>
        </div>
    )
}