export function Paragraphs() {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 p-4">
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
}