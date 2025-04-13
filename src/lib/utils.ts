import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina múltiples clases de Tailwind de manera inteligente,
 * resolviendo conflictos entre clases
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
