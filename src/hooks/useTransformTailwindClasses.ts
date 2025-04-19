import { useEffect } from "react";

export const useTransformTailwindClasses = (containerId: string) => {
  useEffect(() => {
    const container = document.getElementById(containerId);

    if (!container) return;

    const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];
    const regex = new RegExp(`\\b(${BREAKPOINTS.join("|")}):`, "g");

    const transformClasses = (el: HTMLElement) => {
      const original = el.className;

      // Verificar si ya contiene el prefijo "@" para evitar transformaciones repetidas
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

    walk(container);
  }, [containerId]);
};
