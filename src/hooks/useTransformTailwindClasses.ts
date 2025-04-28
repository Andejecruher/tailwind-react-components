import { useEffect } from "react";

export const useTransformTailwindClasses = (containerId: string) => {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];
    const regex = new RegExp(`\\b(${BREAKPOINTS.join("|")}):`, "g");

    const transformClasses = (el: HTMLElement) => {
      const original = el.className;
      if (
        typeof original === "string" &&
        regex.test(original) &&
        !original.includes("@")
      ) {
        el.className = original.replace(regex, "@$1:");
      }
    };

    const walk = (node: HTMLElement) => {
      transformClasses(node);
      Array.from(node.children).forEach((child) => walk(child as HTMLElement));
    };

    // Observar cambios en el DOM para aplicar transformaciones a nuevos elementos
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            walk(node);
          }
        });
      });
    });

    // Configurar el observer
    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    // Transformar clases iniciales
    walk(container);

    return () => observer.disconnect();
  }, [containerId]);
};

export function restoreTailwindBreakpoints(sourceCode: string): string {
  const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];
  const regex = new RegExp(`@(${BREAKPOINTS.join("|")}):`, "g");

  return sourceCode.replace(regex, "$1:");
}