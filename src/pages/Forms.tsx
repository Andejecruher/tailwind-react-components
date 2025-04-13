import { useState } from "react"
import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"


export default function FormsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={[{ title: "Formularios", href: "/formularios" }]} className="mb-6" />
            <PageHeader
                title="Formularios"
                description="Componentes de formulario para recopilar información del usuario."
                className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
                <ComponentPreview
                    title="Formulario de Contacto"
                    description="Formulario básico para recopilar información de contacto."
                    component={
                        <form className="w-full max-w-sm space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    placeholder="Tu nombre"
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Tu mensaje..."
                                    className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    }
                    code={`export function ContactForm() {
  return (
    <form className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Nombre
        </label>
        <input
          id="name"
          placeholder="Tu nombre"
          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Mensaje
        </label>
        <textarea
          id="message"
          placeholder="Tu mensaje..."
          className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Enviar mensaje
      </button>
    </form>
  )
}`}
                />

                <ComponentPreview
                    title="Formulario de Registro"
                    description="Formulario para crear una nueva cuenta de usuario."
                    component={<RegisterForm />}
                    code={`import { useState } from "react"

export function RegisterForm() {
  const [selectedRole, setSelectedRole] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <form className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Nombre de usuario
        </label>
        <input
          id="username"
          placeholder="usuario123"
          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="role" className="text-sm font-medium leading-none">
          Rol
        </label>
        <div className="relative">
          <button
            type="button"
            className="flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedRole || "Selecciona un rol"}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white text-base shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="p-1">
                {["Usuario", "Administrador", "Editor"].map((role) => (
                  <div
                    key={role}
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 hover:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                    onClick={() => {
                      setSelectedRole(role)
                      setIsOpen(false)
                    }}
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            role="checkbox"
            aria-checked={isChecked}
            data-state={isChecked ? "checked" : "unchecked"}
            onClick={() => setIsChecked(!isChecked)}
            className={\`peer h-4 w-4 shrink-0 rounded-sm border border-gray-200 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-700 dark:ring-offset-gray-900 dark:data-[state=checked]:bg-gray-50 dark:data-[state=checked]:text-gray-900 \${
              isChecked ? "bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900" : ""
            }\`}
          >
            {isChecked && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Acepto los términos y condiciones
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Crear cuenta
      </button>
    </form>
  )
}`}
                />
            </div>
        </div>
    )
}

function RegisterForm() {
    const [selectedRole, setSelectedRole] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    return (
        <form className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
                <label
                    htmlFor="username"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Nombre de usuario
                </label>
                <input
                    id="username"
                    placeholder="usuario123"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                />
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                />
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Contraseña
                </label>
                <input
                    id="password"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium leading-none">
                    Rol
                </label>
                <div className="relative">
                    <button
                        type="button"
                        className="flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedRole || "Selecciona un rol"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 opacity-50"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white text-base shadow-lg dark:border-gray-700 dark:bg-gray-800">
                            <div className="p-1">
                                {["Usuario", "Administrador", "Editor"].map((role) => (
                                    <div
                                        key={role}
                                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 hover:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                        onClick={() => {
                                            setSelectedRole(role)
                                            setIsOpen(false)
                                        }}
                                    >
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        role="checkbox"
                        aria-checked={isChecked}
                        data-state={isChecked ? "checked" : "unchecked"}
                        onClick={() => setIsChecked(!isChecked)}
                        className={`peer h-4 w-4 shrink-0 rounded-sm border border-gray-200 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-700 dark:ring-offset-gray-900 dark:data-[state=checked]:bg-gray-50 dark:data-[state=checked]:text-gray-900 ${isChecked ? "bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900" : ""
                            }`}
                    >
                        {isChecked && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        )}
                    </button>
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Acepto los términos y condiciones
                    </label>
                </div>
            </div>
            <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
                Crear cuenta
            </button>
        </form>
    )
}
