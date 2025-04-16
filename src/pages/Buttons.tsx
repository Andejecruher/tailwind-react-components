import { ComponentPreview } from "@src/components/ui/component-preview"

// Importing the components for the buttons
import { SharedButton } from "@src/components/buttons/shared-button"
import { Button } from "@src/components/buttons/button"

// Importing the code for component preview
import buttonSource from "@components/buttons/button.tsx?raw";
import sharedButtonSource from "@components/buttons/shared-button.tsx?raw";

export default function ButtonsPage() {
  return (
    <div className="grid gap-8">
      <ComponentPreview
        title="Botón Primario"
        description="El botón principal para acciones destacadas."
        component={<Button variant="primary">Botón Primario</Button>}
        componentName="Button"
        componentProps={{ variant: "primary", children: "Botón Primario" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-primario"
      />

      <ComponentPreview
        title="Botón Secundario"
        description="Variante secundaria para acciones menos prominentes."
        component={<Button variant="secondary">Botón Secundario</Button>}
        componentName="Button"
        componentProps={{ variant: "secondary", children: "Botón Secundario" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-secundario"
      />

      <ComponentPreview
        title="Botón Outline"
        description="Botón con borde y fondo transparente."
        component={<Button variant="outline">Botón Outline</Button>}
        componentName="Button"
        componentProps={{ variant: "outline", children: "Botón Outline" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-outline"
      />

      <ComponentPreview
        title="Botón Ghost"
        description="Botón sin fondo ni borde, solo visible al interactuar."
        component={<Button variant="ghost">Botón Ghost</Button>}
        componentName="Button"
        componentProps={{ variant: "ghost", children: "Botón Ghost" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-ghost"
      />

      <ComponentPreview
        title="Botón Destructivo"
        description="Para acciones peligrosas o irreversibles."
        component={<Button variant="destructive">Eliminar</Button>}
        componentName="Button"
        componentProps={{ variant: "destructive", children: "Eliminar" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-destructivo"
      />

      <ComponentPreview
        title="Botón Link"
        description="Botón con apariencia de enlace."
        component={<Button variant="link">Botón Link</Button>}
        componentName="Button"
        componentProps={{ variant: "link", children: "Botón Link" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-link"
      />

      <ComponentPreview
        title="Botón Pequeño"
        description="Variante de tamaño pequeño."
        component={<Button size="sm">Botón Pequeño</Button>}
        componentName="Button"
        componentProps={{ size: "sm", children: "Botón Pequeño" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-pequeno"
      />

      <ComponentPreview
        title="Botón Grande"
        description="Variante de tamaño grande."
        component={<Button size="lg">Botón Grande</Button>}
        componentName="Button"
        componentProps={{ size: "lg", children: "Botón Grande" }}
        sourceCode={buttonSource} // Pass the source code as a prop
        id="boton-grande"
      />

      <ComponentPreview
        title="Botón Compartir"
        description="Botón de compartir con iconos de redes sociales."
        component={<SharedButton label="Shared" disabled={false} />}
        componentName="SharedButton"
        componentProps={{ label: "Shared", disabled: false }}
        sourceCode={sharedButtonSource} // Pass the source code as a prop
        id="boton-compartir"
      />

    </div>
  )
}
