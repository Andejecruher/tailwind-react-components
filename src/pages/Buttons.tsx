import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"

export default function ButtonsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={[{ title: "Botones", href: "/botones" }]} className="mb-6" />
            <PageHeader
                title="Botones"
                description="Componentes de botón con diferentes estilos y variantes."
                className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
                <ComponentPreview
                    title="Botón Primario"
                    description="El botón principal para acciones destacadas."
                    component={
                        <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                            Botón Primario
                        </button>
                    }
                    code={`export function PrimaryButton() {
  return (
    <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
      Botón Primario
    </button>
  )
}`}
                />

                <ComponentPreview
                    title="Botón Secundario"
                    description="Variante secundaria para acciones menos prominentes."
                    component={
                        <button className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                            Botón Secundario
                        </button>
                    }
                    code={`export function SecondaryButton() {
  return (
    <button className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
      Botón Secundario
    </button>
  )
}`}
                />

                <ComponentPreview
                    title="Botón Outline"
                    description="Botón con borde y fondo transparente."
                    component={
                        <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                            Botón Outline
                        </button>
                    }
                    code={`export function OutlineButton() {
  return (
    <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
      Botón Outline
    </button>
  )
}`}
                />

                <ComponentPreview
                    title="Botón Ghost"
                    description="Botón sin fondo ni borde, solo visible al interactuar."
                    component={
                        <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100">
                            Botón Ghost
                        </button>
                    }
                    code={`export function GhostButton() {
  return (
    <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100">
      Botón Ghost
    </button>
  )
}`}
                />

                <ComponentPreview
                    title="Botón Destructivo"
                    description="Para acciones peligrosas o irreversibles."
                    component={
                        <button className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:bg-red-600 dark:text-white dark:hover:bg-red-700">
                            Eliminar
                        </button>
                    }
                    code={`export function DestructiveButton() {
  return (
    <button className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:bg-red-600 dark:text-white dark:hover:bg-red-700">
      Eliminar
    </button>
  )
}`}
                />

                <ComponentPreview
                    title="Botón Link"
                    description="Botón con apariencia de enlace."
                    component={
                        <button className="inline-flex items-center justify-center text-sm font-medium text-blue-600 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:text-blue-400">
                            Botón Link
                        </button>
                    }
                    code={`export function LinkButton() {
  return (
    <button className="inline-flex items-center justify-center text-sm font-medium text-blue-600 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:text-blue-400">
      Botón Link
    </button>
  )
}`}
                />
            </div>
        </div>
    )
}
