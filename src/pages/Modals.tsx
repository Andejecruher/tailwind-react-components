import { useState } from "react"
import { ComponentPreview } from "@src/components/ui/component-preview"

// Importing the components for the cards
import { BasicModal } from "@src/components/modals/basic-modal"
import { AlertModal } from "@src/components/modals/alert-modal"
import { DrawerDemo } from "@src/components/modals/drawer-modal"

// Importing the code for component preview
import basicModalSource from "@src/components/modals/basic-modal.tsx?raw"
import alertModalSource from "@src/components/modals/alert-modal.tsx?raw"
import drawerModalSource from "@src/components/modals/drawer-modal.tsx?raw"

export default function ModalsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenAlert, setIsOpenAlert] = useState(false)

  const onConfirmAlertModal = () => {
    // Handle the confirmation action here
    console.log("Acción confirmada")
    setIsOpenAlert(false)
  }

  return (
    <div className="grid gap-8">
      <ComponentPreview
        id="basico"
        title="Diálogo Básico"
        description="Modal simple para mostrar información o solicitar una acción."
        component={<BasicModal actionLabel="Aceptar" isOpen={isOpen} setIsOpen={setIsOpen} title="Título del Diálogo" description="Descripción del diálogo" content="Contenido del diálogo" />}
        componentName="BasicModal"
        componentProps={{
          actionLabel: "Aceptar",
          isOpen: false,
          setIsOpen: () => { },
          title: "Título del Diálogo",
          description: "Descripción del diálogo",
          content: "Contenido del diálogo",
        }}
        sourceCode={basicModalSource} // Pass the source code as a prop    
      />

      <ComponentPreview
        id="alerta"
        title="Diálogo de Alerta"
        description="Modal para confirmar acciones importantes o potencialmente peligrosas."
        component={<AlertModal isOpen={isOpenAlert} setIsOpen={setIsOpenAlert} onConfirm={onConfirmAlertModal} title="Título de Alerta" description="Descripción de alerta" />}
        componentName="AlertModal"
        componentProps={{
          isOpen: false,
          setIsOpen: () => { },
          title: "Título de Alerta",
          description: "Descripción de alerta",
          content: "Contenido de alerta",
        }}
        sourceCode={alertModalSource} // Pass the source code as a prop

      />

      <ComponentPreview
        id="drawer"
        title="Drawer (Cajón)"
        description="Panel deslizante que aparece desde un borde de la pantalla."
        component={<DrawerDemo />}
        componentName="DrawerDemo"
        sourceCode={drawerModalSource} // Pass the source code as a prop
      />
    </div>
  )
}

