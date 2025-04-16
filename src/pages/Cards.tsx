import { Breadcrumb } from "@src/components/ui/breadcrumb"
import { ComponentPreview } from "@src/components/ui/component-preview"
import { PageHeader } from "@src/components/ui/page-header"

// Importing the components for the cards
import { BasicCard } from "@src/components/cards/basic-card"
import { ProductCard } from "@src/components/cards/product-card"

// Importing the code for component preview
import basicCardSource from "@src/components/cards/basic-card.tsx?raw"
import productCardSource from "@src/components/cards/product-card.tsx?raw"

export default function CardsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Breadcrumb items={[{ title: "Tarjetas", href: "/tarjetas" }]} className="mb-6" />
      <PageHeader
        title="Tarjetas"
        description="Componentes de tarjeta para mostrar contenido de manera organizada."
        className="mb-10"
      />

      <div className="grid gap-8 md:grid-cols-2">
        <ComponentPreview
          title="Tarjeta Básica"
          description="Tarjeta simple con título, descripción y contenido."
          component={
            <BasicCard
              title="Título de la Tarjeta"
              description="Descripción breve de la tarjeta."
              content="Contenido adicional que puede incluir texto, imágenes, etc."
              actionLabel="Acción"
              action={() => alert("Acción realizada")}
            />
          }
          componentName="BasicCard"
          componentProps={{
            title: "Título de la Tarjeta",
            description: "Descripción breve de la tarjeta.",
            content: "Contenido adicional que puede incluir texto, imágenes, etc.",
            actionLabel: "Acción",
            action: () => alert("Acción realizada"),
          }}
          sourceCode={basicCardSource} // Pass the source code as a prop
        />

        <ComponentPreview
          title="Tarjeta de Producto"
          description="Tarjeta para mostrar información de un producto."
          component={
            <ProductCard
              title="Nombre del Producto"
              price="$99.99"
              description="Descripción detallada del producto."
              imageUrl="https://via.placeholder.com/150"
              onViewDetails={() => alert("Ver detalles")}
              onBuyNow={() => alert("Comprar ahora")}
            />
          }
          componentName="ProductCard"
          componentProps={{
            title: "Nombre del Producto",
            price: "$99.99",
            description: "Descripción detallada del producto.",
            imageUrl: "https://via.placeholder.com/250",
            onViewDetails: () => alert("Ver detalles"),
            onBuyNow: () => alert("Comprar ahora"),
            labelActionViewDetails: "Ver detalles",
            labelActionBuyNow: "Comprar ahora",
          }}
          sourceCode={productCardSource} // Pass the source code as a prop
        />
      </div>
    </div>
  )
}
