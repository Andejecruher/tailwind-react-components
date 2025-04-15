import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"


// Importing the components for the buttons
import { SharedButton } from "@src/components/buttons/shared-button"
import { Button } from "@src/components/buttons/button"

// Importing the code for component preview
import buttonSource from "@components/buttons/button.tsx?raw";
import sharedButtonSource from "@components/buttons/shared-button.tsx?raw";

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
          component={<Button variant="primary">Botón Primario</Button>}
          componentName="Button"
          componentProps={{ variant: "primary", children: "Botón Primario" }}
          sourceCode={buttonSource} // Pass the source code as a prop
        />

        <ComponentPreview
          title="Botón Secundario"
          description="Variante secundaria para acciones menos prominentes."
          component={<Button variant="secondary">Botón Secundario</Button>}
          componentName="Button"
          componentProps={{ variant: "secondary", children: "Botón Secundario" }}
          sourceCode={buttonSource} // Pass the source code as a prop
        />

        <ComponentPreview
          title="Botón Outline"
          description="Botón con borde y fondo transparente."
          component={<Button variant="outline">Botón Outline</Button>}
          componentName="Button"
          componentProps={{ variant: "outline", children: "Botón Outline" }}
          sourceCode={buttonSource} // Pass the source code as a prop
        />

        <ComponentPreview
          title="Botón Ghost"
          description="Botón sin fondo ni borde, solo visible al interactuar."
          component={<Button variant="ghost">Botón Ghost</Button>}
          componentName="Button"
          componentProps={{ variant: "ghost", children: "Botón Ghost" }}
          sourceCode={buttonSource} // Pass the source code as a prop
        />

        <ComponentPreview
          title="Botón Destructivo"
          description="Para acciones peligrosas o irreversibles."
          component={<Button variant="destructive">Eliminar</Button>}
          componentName="Button"
          componentProps={{ variant: "destructive", children: "Eliminar" }}
        />

        <ComponentPreview
          title="Botón Link"
          description="Botón con apariencia de enlace."
          component={<Button variant="link">Botón Link</Button>}
          componentName="Button"
          componentProps={{ variant: "link", children: "Botón Link" }}
        />

        <ComponentPreview
          title="Botón Pequeño"
          description="Variante de tamaño pequeño."
          component={<Button size="sm">Botón Pequeño</Button>}
          componentName="Button"
          componentProps={{ size: "sm", children: "Botón Pequeño" }}
        />

        <ComponentPreview
          title="Botón Grande"
          description="Variante de tamaño grande."
          component={<Button size="lg">Botón Grande</Button>}
          componentName="Button"
          componentProps={{ size: "lg", children: "Botón Grande" }}

        />

        <ComponentPreview
          title="Botón Compartir"
          description="Botón de compartir con iconos de redes sociales."
          component={<SharedButton label="Shared" disabled={false} />}
          componentName="SharedButton"
          componentProps={{ label: "Shared", disabled: false }}
          sourceCode={sharedButtonSource} // Pass the source code as a prop
        />

      </div>
    </div>
  )
}
