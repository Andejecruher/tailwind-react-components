interface PageHeaderProps {
    title: string
    description?: string
    className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
    return (
        <div className={`space-y-2 ${className}`}>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            {description && <p className="text-lg text-gray-500 dark:text-gray-400">{description}</p>}
        </div>
    )
}
