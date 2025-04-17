import { ComponentPreview } from "@src/components/ui/component-preview"

// Importing the components for the forms
import { ContactForm } from "@src/components/forms/contact-form"
import { RegisterForm } from "@src/components/forms/register-form"

// Importing the code for component preview
import contactFormSource from "@src/components/forms/contact-form.tsx?raw"
import registerFormSource from "@src/components/forms/register-form.tsx?raw"

export default function FormsPage() {
  return (
    <div className="grid gap-8">
      <ComponentPreview
        id="contacto"
        title="Formulario de Contacto"
        description="Formulario básico para recopilar información de contacto."
        component={<ContactForm />}
        componentName="ContactForm"
        sourceCode={contactFormSource} // Pass the source code as a prop
      />

      <ComponentPreview
        id="registro"
        title="Formulario de Registro"
        description="Formulario para crear una nueva cuenta de usuario."
        component={<RegisterForm />}
        componentName="RegisterForm"
        sourceCode={registerFormSource}
      />
    </div>
  )
}
