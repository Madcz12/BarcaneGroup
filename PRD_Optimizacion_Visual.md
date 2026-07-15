# Propuestas de Optimización Visual e Interactiva — Sección 'IndustriesAndWhy'

Este documento complementa el PRD v1.0 de **BarcaneGroup** y detalla las especificaciones de diseño frontend e interactividad para transformar la sección `#industrias-y-proceso` (actualmente estática y plana) en una experiencia premium, interactiva y con alta capacidad de retención visual.

---

## 1. Lineamientos del Rediseño Visual

El objetivo es romper la uniformidad rígida de los bloques planos mediante el uso de profundidad (sombras sutiles), micro-interacciones avanzadas basadas en CSS y transiciones fluidas de aceleración personalizada (*cubic-bezier*).

### 1.1 Suavizado del Fondo (Gradiente Premium)
El fondo sólido actual (`#ffcbba`) puede saturar visualmente al usuario en pantallas grandes. Se sustituirá por un gradiente vertical descendente que suavice la transición hacia la siguiente sección.

```css
#industrias-y-proceso {
  background: linear-gradient(180deg, #ffcbba 0%, #fff0eb 100%);
  padding: 100px 0; /* Mayor espaciado para dar 'respiro' al contenido */
}
```

---

## 2. Especificación por Componentes / Filas

### 2.1 Fila 1: Industrias Objetivo ("Ideal para negocios como:")
Se elimina el bloque blanco opaco de las tarjetas para adoptar una estética moderna de vidrio esmerilado (*Glassmorphism*).

* **Estado Base:**
  * Fondo: Blanco translúcido (`rgba(255, 255, 255, 0.55)`).
  * Desenfoque de fondo: `backdrop-filter: blur(8px);`.
  * Borde: Delgado y sutil (`1px solid rgba(255, 255, 255, 0.4)`).
  * Sombra: Ninguna o imperceptible.
* **Estado Hover (Interactividad):**
  * La tarjeta se eleva sutilmente en el eje Y (`transform: translateY(-6px)`).
  * El fondo pasa a ser blanco puro sólido para máxima legibilidad.
  * El borde cambia al color rosa corporativo (`--clr-primary-pink`).
  * Sombra proyectada: Suave y difusa (`box-shadow: 0 12px 24px rgba(22, 32, 58, 0.06)`).
  * El ícono SVG realiza un escalado sutil (`transform: scale(1.1)`) y cambia su color al rosa corporativo.

### 2.2 Fila 2: ¿Por qué personalizar? + Materiales y Acabados

#### Columna A: Las 6 Razones (Izquierda)
* **Interactividad General:** Toda la fila se comportará como un elemento interactivo (`cursor: pointer`).
* **Efecto Foco:** Al hacer hover sobre una razón específica, la opacidad de las otras 5 razones disminuye ligeramente al `0.6`, centrando la atención del usuario en el punto activo.
* **Efecto Activo:** El título de la razón seleccionada toma el color `--clr-primary-pink`, y el contenedor circular del ícono genera una micro-animación de pulso (*keyframe pulse*).

#### Columna B: Cuadrícula de Materiales (Derecha)
* **Comportamiento Estético:** Replicar el efecto *Glassmorphism* y la elevación en el eje Y de la Fila 1.
* **Componente Tooltip Informativo (Micro-conversión):** Al hacer hover sobre materiales estratégicos (ej. *Papel manteca antigrasa*, *Impresión full color*), emergerá un pequeño badge superior de forma fluida (`opacity` y `translateY`) con textos comerciales breves como: `¡El más pedido!`, `Alta Demanda` o `Ideal Delivery`.

### 2.3 Fila 3: Proceso de Trabajo ("¿Cómo trabajamos tu empaque?")
Se reemplazan los conectores de texto plano (`→`) por un flujo estructural continuo.

* **Conectores Estilizados:** Una línea discontinua (`border-top: 2px dashed rgba(22, 32, 58, 0.15)`) cruzará horizontalmente por detrás de los pasos, unificando visualmente todo el proceso en desktop.
* **Stepper Dinámico (Efecto Cadena):**
  * Al posicionar el cursor sobre un número de paso (1 al 4), el círculo del número pasará de un color plano a un gradiente radial usando el rosa corporativo.
  * La descripción del paso aumentará ligeramente su contraste.

---

## 3. Código CSS de Referencia (Design Tokens Aplicados)

Añadir las siguientes reglas al archivo de estilos correspondiente para implementar la fluidez premium:

```css
/* Curva de aceleración premium para todas las transiciones */
:root {
  --transition-premium: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Tarjetas de Industrias y Materiales */
.interactive-card {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  transition: var(--transition-premium);
}

.interactive-card:hover {
  background: #ffffff;
  transform: translateY(-6px);
  border-color: var(--clr-primary-pink);
  box-shadow: 0 12px 28px rgba(22, 32, 58, 0.08);
}

.interactive-card svg {
  transition: var(--transition-premium);
}

.interactive-card:hover svg {
  transform: scale(1.1);
  stroke: var(--clr-primary-pink);
}

/* Bloque de Razones (Efecto Foco) */
.reasons-container:hover .reason-row:not(:hover) {
  opacity: 0.6;
  transition: var(--transition-premium);
}

.reason-row {
  cursor: pointer;
  transition: var(--transition-premium);
}

.reason-row:hover .reason-title {
  color: var(--clr-primary-pink);
}
```
