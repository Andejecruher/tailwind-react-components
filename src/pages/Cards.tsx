import { ComponentPreview } from "@src/components/ui/component-preview"

// Importing the components for the cards
import { BasicCard } from "@src/components/cards/basic-card"
import { ProductCard } from "@src/components/cards/product-card"
import { CardUserTeam } from "@src/components/cards/card-user-team"
import BreakpointDemo from "@src/components/breackpoint-demo"

// // Importing the code for component preview
import basicCardSource from "@src/components/cards/basic-card.tsx?raw"
import productCardSource from "@src/components/cards/product-card.tsx?raw"
import cardUserTeamSource from "@src/components/cards/card-user-team.tsx?raw"
import sourceBreackpointDemo from "@src/components/breackpoint-demo.tsx?raw"

// import assets for the components
import logoGoogle from "@src/assets/logos/google.png";

export default function CardsPage() {
  return (
    <div className="grid gap-8">

      {/* Breackpoint Demo */}
      <ComponentPreview
        id="breackpoint-demo"
        title="Demostración de Breackpoint"
        description="Ejemplo de cómo se comportan los componentes en diferentes tamaños de pantalla."
        component={<BreakpointDemo />}
        componentName="BreakpointDemo"
        componentProps={{}}
        sourceCode={sourceBreackpointDemo} // Pass the source code as a prop
      />

      {/* Card Basic */}
      <ComponentPreview
        id="basica"
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

      {/* Card Producto */}
      <ComponentPreview
        id="producto"
        title="Tarjeta de Producto"
        description="Tarjeta para mostrar información de un producto."
        component={
          <ProductCard
            title="Nombre del Producto"
            price="$99.99"
            description="Descripción detallada del producto."
            imageUrl="https://placehold.co/150"
            onViewDetails={() => alert("Ver detalles")}
            onBuyNow={() => alert("Comprar ahora")}
          />
        }
        componentName="ProductCard"
        componentProps={{
          title: "Nombre del Producto",
          price: "$99.99",
          description: "Descripción detallada del producto.",
          imageUrl: "https://placehold.co/250",
          onViewDetails: () => alert("Ver detalles"),
          onBuyNow: () => alert("Comprar ahora"),
          labelActionViewDetails: "Ver detalles",
          labelActionBuyNow: "Comprar ahora",
        }}
        sourceCode={productCardSource} // Pass the source code as a prop
      />

      {/* Card Usuario y Equipo */}
      <ComponentPreview
        id="usuario"
        title="Tarjeta de Usuario y Equipo"
        description="Tarjeta para mostrar información de un usuario y su equipo."
        component={
          <CardUserTeam
            companyName="Google"
            companyLogo={logoGoogle}
            positionLevel="Senior"
            positionTitle="Visual Designer"
            location="London, UK"
            isRemote={true}
            salary="35k"
            postedAgo="2 weeks ago"
            matchPercentage={54}
            avatarUrl="https://avatar.iran.liara.run/public/boy"
            onShare={() => alert("Compartido 🚀")}
            onBookmark={() => alert("Guardado 🔖")}
          />
        }
        componentName="CardUserTeam"
        componentProps={{
          companyName: "Google",
          companyLogo: "/assets/logos/google.png",
          positionLevel: "Senior",
          positionTitle: "Visual Designer",
          location: "London, UK",
          isRemote: true,
          salary: "35k",
          postedAgo: "2 weeks ago",
          matchPercentage: 54,
          avatarUrl: "https://avatar.iran.liara.run/public/boy"
        }}
        sourceCode={cardUserTeamSource}
      />


    </div>
  )
}
