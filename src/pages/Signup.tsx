import { ComponentPreview } from "@src/components/ui/component-preview"

// Importing the components for the cards
import { SignUpFlowerBasic } from "@src/components/signup/signup-flower-basic"

// Importing the code for component preview
import SignUpFlowerBasicSource from "@src/components/signup/signup-flower-basic.tsx?raw"

// import assets for the components


export default function SignupPage() {
    return (
        <div className="grid gap-8">

            {/* SignUp Flower Basic */}
            <ComponentPreview
                id="signup-flower-basic"
                title="Formulario de Registro Básico"
                description="Formulario simple con campos de entrada y un botón de registro."
                component={
                    <SignUpFlowerBasic />
                }
                componentName="SignUpFlowerBasic"
                componentProps={{}}
                sourceCode={SignUpFlowerBasicSource} // Pass the source code as a prop
            />
        </div>
    )
}
