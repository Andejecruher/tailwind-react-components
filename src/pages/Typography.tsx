import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"

export default function TypographyPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={[{ title: "Tipografía", href: "/tipografia" }]} className="mb-6" />
            <PageHeader title="Tipografía" description="Estilos de texto y componentes tipográficos." className="mb-10" />

            <div className="grid gap-8 md:grid-cols-2">
                <ComponentPreview
                    title="Encabezados"
                    description="Diferentes niveles de encabezados para jerarquía visual."
                    component={
                        <div className="space-y-4">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Encabezado 1</h1>
                            <h2 className="scroll-m-20 border-b border-gray-200 pb-2 text-3xl font-semibold tracking-tight dark:border-gray-700">
                                Encabezado 2
                            </h2>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Encabezado 3</h3>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Encabezado 4</h4>
                            <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">Encabezado 5</h5>
                            <h6 className="scroll-m-20 text-base font-semibold tracking-tight">Encabezado 6</h6>
                        </div>
                    }
                    code={`export function Headings() {
  return (
    <div className="space-y-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Encabezado 1
      </h1>
      <h2 className="scroll-m-20 border-b border-gray-200 pb-2 text-3xl font-semibold tracking-tight dark:border-gray-700">
        Encabezado 2
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Encabezado 3
      </h3>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Encabezado 4
      </h4>
    </div>
  )
}`}
                />

                <ComponentPreview
                    title="Párrafos"
                    description="Estilos para texto de párrafo y bloques de contenido."
                    component={
                        <div className="space-y-4">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Este es un párrafo estándar con un tamaño de texto base y un espaciado de línea adecuado para una buena
                                legibilidad.
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Este es un párrafo más pequeño con un color más claro, ideal para texto secundario o menos importante.
                            </p>
                            <p className="text-lg font-medium">
                                Este es un párrafo más grande y con mayor peso visual, útil para destacar información importante.
                            </p>
                            <blockquote className="mt-6 border-l-2 border-gray-300 pl-6 italic dark:border-gray-600">
                                "Este es un bloque de cita que puede utilizarse para destacar testimonios o citas importantes en el
                                contenido."
                            </blockquote>
                        </div>
                    }
                    code={`export function Paragraphs() {
  return (
    <div className="space-y-4">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Este es un párrafo estándar con un tamaño de texto base y un espaciado de línea adecuado para una buena legibilidad.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Este es un párrafo más pequeño con un color más claro, ideal para texto secundario o menos importante.
      </p>
      <p className="text-lg font-medium">
        Este es un párrafo más grande y con mayor peso visual, útil para destacar información importante.
      </p>
      <blockquote className="mt-6 border-l-2 border-gray-300 pl-6 italic dark:border-gray-600">
        "Este es un bloque de cita que puede utilizarse para destacar testimonios o citas importantes en el contenido."
      </blockquote>
    </div>
  )
}`}
                />

                <ComponentPreview
                    title="Listas"
                    description="Diferentes estilos de listas para organizar información."
                    component={
                        <div className="space-y-6">
                            <div>
                                <h4 className="mb-2 text-lg font-medium">Lista ordenada</h4>
                                <ol className="list-decimal space-y-1 pl-6">
                                    <li>Primer elemento de la lista</li>
                                    <li>Segundo elemento de la lista</li>
                                    <li>Tercer elemento de la lista</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="mb-2 text-lg font-medium">Lista no ordenada</h4>
                                <ul className="list-disc space-y-1 pl-6">
                                    <li>Elemento de la lista</li>
                                    <li>Otro elemento de la lista</li>
                                    <li>Un elemento más de la lista</li>
                                </ul>
                            </div>
                        </div>
                    }
                    code={`export function Lists() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-lg font-medium">Lista ordenada</h4>
        <ol className="list-decimal space-y-1 pl-6">
          <li>Primer elemento de la lista</li>
          <li>Segundo elemento de la lista</li>
          <li>Tercer elemento de la lista</li>
        </ol>
      </div>
      <div>
        <h4 className="mb-2 text-lg font-medium">Lista no ordenada</h4>
        <ul className="list-disc space-y-1 pl-6">
          <li>Elemento de la lista</li>
          <li>Otro elemento de la lista</li>
          <li>Un elemento más de la lista</li>
        </ul>
      </div>
    </div>
  )
}`}
                />
            </div>
        </div>
    )
}
