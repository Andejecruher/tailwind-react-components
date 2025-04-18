import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina múltiples clases de Tailwind de manera inteligente,
 * resolviendo conflictos entre clases
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Genera un código de ejemplo para un componente de React
 * @param Component - Componente de React
 * @param props - Propiedades del componente
 * @return Código de ejemplo como cadena
 *
 */
export function getComponentSource(
  Component: React.ComponentType<Record<string, unknown>>,
  props: Record<string, unknown> = {}
) {
  // Get component name
  const componentName = Component.displayName || Component.name || "Component";

  // Convert props to string representation
  const propsString = Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return `${key}="${value}"`;
      }
      if (typeof value === "boolean" && value) {
        return key;
      }
      if (typeof value === "number") {
        return `${key}={${value}}`;
      }
      return null;
    })
    .filter(Boolean)
    .join(" ");

  // Generate component usage example
  const usage = `<${componentName}${propsString ? ` ${propsString}` : ""}>${
    props.children ? props.children : ""
  }</${componentName}>`;

  return usage;
}

/**
 * Genera un código de ejemplo para un componente de React
 * @param componentName - Nombre del componente
 * @param props - Propiedades del componente
 * @return Código de ejemplo como cadena
 *
 */
export function formatComponentCode(
  componentName: string,
  props: Record<string, unknown> = {}
) {
  // Nota: La ruta del import dependerá de dónde se haya colocado el código fuente del componente
  const propsEntries = Object.entries(props).filter(
    ([key]) => key !== "children"
  );

  const propsString =
    propsEntries.length > 0
      ? propsEntries
          .map(([key, value]) => {
            if (typeof value === "string") {
              return `    ${key}="${value}"`;
            }
            if (typeof value === "boolean" && value) {
              return `    ${key}`;
            }
            if (typeof value === "number") {
              return `    ${key}={${value}}`;
            }
            return `    ${key}={${value}}`;
          })
          .filter(Boolean)
          .join("\n")
      : "";

  const childrenContent = props.children ? props.children : "";

  // Generate component example code
  return `
  // Importar el componente desde su ubicación
import { ${componentName} } from "@/components/ui/button";

export function Example() {
  return (
    <${componentName}${propsEntries.length > 0 ? `\n${propsString}` : ""}${
    childrenContent ? ">" : " />"
  }${childrenContent ? `\n    ${childrenContent}\n  </${componentName}>` : ""}
  );
}`;
}

// Función para determinar el breakpoint de Tailwind basado en un ancho
export function getTailwindBreakpoint(width: number): string {
  if (width >= 1536) return "2xl";
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  if (width >= 640) return "sm";
  return "xs";
}
