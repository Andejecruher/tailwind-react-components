import { useState } from "react"
import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"

export default function ModalsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={[{ title: "Modales", href: "/modales" }]} className="mb-6" />
            <PageHeader title="Modales" description="Ventanas emergentes para interacciones focalizadas." className="mb-10" />

            <div className="grid gap-8 md:grid-cols-2">
                <ComponentPreview
                    title="Diálogo Básico"
                    description="Modal simple para mostrar información o solicitar una acción."
                    component={<BasicDialog />}
                    code={`import { useState } from "react"

export function BasicDialog() {
  const [isOpen, setIsOpen] = useState(false)

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
              <h3 className="text-lg font-semibold">Título del diálogo</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Esta es una descripción del propósito de este diálogo.
              </p>
            </div>
            <div className="py-4">
              <p>Contenido del diálogo con información relevante para el usuario.</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}`}
                />

                <ComponentPreview
                    title="Diálogo de Alerta"
                    description="Modal para confirmar acciones importantes o potencialmente peligrosas."
                    component={<AlertDialog />}
                    code={`import { useState } from "react"

export function AlertDialog() {
  const [isOpen, setIsOpen] = useState(false)

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
              <h3 className="text-lg font-semibold">¿Estás absolutamente seguro?</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                y todos los datos asociados a ella.
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
                onClick={() => setIsOpen(false)}
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
}`}
                />

                <ComponentPreview
                    title="Drawer (Cajón)"
                    description="Panel deslizante que aparece desde un borde de la pantalla."
                    component={<DrawerDemo />}
                    code={`import { useState } from "react"

export function DrawerDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      >
        Abrir cajón
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
          <div className="fixed bottom-0 left-0 right-0 z-50 mt-12 flex h-[80vh] flex-col rounded-t-[10px] bg-white dark:bg-gray-800">
            <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Título del cajón</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Este es un panel deslizante que aparece desde la parte inferior de la pantalla.
                </p>
              </div>
              <div className="p-4">
                <p>Contenido del cajón con información o controles adicionales.</p>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}`}
                />
            </div>
        </div>
    )
}

function BasicDialog() {
    const [isOpen, setIsOpen] = useState(false)

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
                            <h3 className="text-lg font-semibold">Título del diálogo</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Esta es una descripción del propósito de este diálogo.
                            </p>
                        </div>
                        <div className="py-4">
                            <p>Contenido del diálogo con información relevante para el usuario.</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

function AlertDialog() {
    const [isOpen, setIsOpen] = useState(false)

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
                            <h3 className="text-lg font-semibold">¿Estás absolutamente seguro?</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta y todos los datos asociados a
                                ella.
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
                                onClick={() => setIsOpen(false)}
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

function DrawerDemo() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            >
                Abrir cajón
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
                    <div className="fixed bottom-0 left-0 right-0 z-50 mt-12 flex h-[80vh] flex-col rounded-t-[10px] bg-white dark:bg-gray-800">
                        <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                        <div className="p-6">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold">Título del cajón</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Este es un panel deslizante que aparece desde la parte inferior de la pantalla.
                                </p>
                            </div>
                            <div className="p-4">
                                <p>Contenido del cajón con información o controles adicionales.</p>
                            </div>
                            <div className="mt-4 flex justify-end space-x-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                                >
                                    Guardar cambios
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
