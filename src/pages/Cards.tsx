import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"

export default function CardsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={[{ title: "Tarjetas", href: "/tarjetas" }]} className="mb-6" />
            <PageHeader
                title="Tarjetas"
                description="Componentes de tarjeta para mostrar contenido de manera organizada."
                className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
                <ComponentPreview
                    title="Tarjeta Básica"
                    description="Tarjeta simple con título, descripción y contenido."
                    component={
                        <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Tarjeta Básica</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Descripción de la tarjeta</p>
                            </div>
                            <div className="px-6 py-4">
                                <p>Contenido de la tarjeta con información relevante.</p>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
                                <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                                    Acción
                                </button>
                            </div>
                        </div>
                    }
                    code={`export function BasicCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="p-6">
        <h3 className="text-xl font-semibold">Tarjeta Básica</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Descripción de la tarjeta</p>
      </div>
      <div className="px-6 py-4">
        <p>Contenido de la tarjeta con información relevante.</p>
      </div>
      <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
        <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
          Acción
        </button>
      </div>
    </div>
  )
}`}
                />

                <ComponentPreview
                    title="Tarjeta de Producto"
                    description="Tarjeta para mostrar información de un producto."
                    component={
                        <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Producto Premium</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">$99.99</p>
                            </div>
                            <div className="px-6 py-4">
                                <div className="mb-4 aspect-video w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
                                <p>Descripción detallada del producto con sus características principales.</p>
                            </div>
                            <div className="flex justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-700">
                                <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                                    Ver detalles
                                </button>
                                <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                                    Comprar ahora
                                </button>
                            </div>
                        </div>
                    }
                    code={`export function ProductCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="p-6">
        <h3 className="text-xl font-semibold">Producto Premium</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">$99.99</p>
      </div>
      <div className="px-6 py-4">
        <div className="mb-4 aspect-video w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
        <p>Descripción detallada del producto con sus características principales.</p>
      </div>
      <div className="flex justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-700">
        <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
          Ver detalles
        </button>
        <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
          Comprar ahora
        </button>
      </div>
    </div>
  )
}`}
                />
            </div>
        </div>
    )
}
