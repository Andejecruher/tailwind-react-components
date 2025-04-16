import { useEffect } from "react";

/**
 * Función para hacer scroll a un elemento específico con un ID
 * @param id - El ID del elemento al que hacer scroll
 * @param offset - Offset opcional para ajustar la posición (por defecto 100px para el header)
 */
export function scrollToElement(id: string, offset = 100): void {
  // Pequeño retraso para asegurar que el DOM esté listo
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      // Calcular la posición considerando el offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Scroll suave a la posición
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Añadir un efecto de resaltado temporal
      element.classList.add("highlight-component");
      setTimeout(() => {
        element.classList.remove("highlight-component");
      }, 2000);
    }
  }, 100);
}

/**
 * Hook para manejar el scroll automático cuando se carga la página con un hash
 * @param pathname - La ruta actual
 */
export function useScrollToHash(pathname: string): void {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      scrollToElement(id);
    }
  }, [pathname]);
}
