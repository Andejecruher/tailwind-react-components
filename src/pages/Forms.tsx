import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"

// Importing the components for the forms
import { ContactForm } from "@src/components/forms/contact-form"
import { RegisterForm } from "@src/components/forms/register-form"

// Importing the code for component preview
import contactFormSource from "@src/components/forms/contact-form.tsx?raw"
import registerFormSource from "@src/components/forms/register-form.tsx?raw"

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
          component={<ContactForm />}
          componentName="ContactForm"
          sourceCode={contactFormSource} // Pass the source code as a prop
        />

        <ComponentPreview
          title="Formulario de Registro"
          description="Formulario para crear una nueva cuenta de usuario."
          component={<RegisterForm />}
          componentName="RegisterForm"
          sourceCode={registerFormSource}
        />
      </div>
    </div>
  )
}
