import { ComponentPreview } from "@src/components/ui/component-preview"

// Importing the components for the typography
import { Headings } from "@src/components/typography/headings"
import { Paragraphs } from "@src/components/typography/paragraphs"
import { Lists } from "@src/components/typography/lists"

// Importing the code for component preview
import headingsSource from "@src/components/typography/headings.tsx?raw"
import paragraphsSource from "@src/components/typography/paragraphs.tsx?raw"
import listsSource from "@src/components/typography/lists.tsx?raw"

export default function TypographyPage() {
  return (
    <div className="grid gap-8">
      <ComponentPreview
        id="encabezados"
        title="Encabezados"
        description="Diferentes niveles de encabezados para jerarquía visual."
        component={<Headings />}
        componentName="Headings"
        sourceCode={headingsSource} // Pass the source code as a prop
      />

      <ComponentPreview
        id="parrafos"
        title="Párrafos"
        description="Estilos para texto de párrafo y bloques de contenido."
        component={<Paragraphs />}
        componentName="Paragraphs"
        sourceCode={paragraphsSource} // Pass the source code as a prop
      />

      <ComponentPreview
        id="listas"
        title="Listas"
        description="Diferentes estilos de listas para organizar información."
        component={<Lists />}
        componentName="Lists"
        sourceCode={listsSource} // Pass the source code as a prop
      />
    </div>
  )
}
