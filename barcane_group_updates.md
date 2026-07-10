# Propuestas de Mejora — BarcaneGroup (Fase de Entrega 1.0)

Este documento recopila las optimizaciones y mejoras sugeridas para la landing page de **BarcaneGroup** antes de la entrega final. Estas adiciones elevan la experiencia de usuario (UX), maximizan la conversión de leads y pulen el SEO sin alterar el alcance estático actual del proyecto.

---

## 1. UX y Optimización de Conversión (Lead Generation)

Dado que el objetivo principal del sitio es captar leads calificados vía WhatsApp, se proponen las siguientes mejoras para maximizar la tasa de conversión:

* **Mensajes de WhatsApp Ultra-Específicos (Deep Linking):** En lugar de utilizar un único mensaje genérico en todo el sitio, se personalizará el parámetro `text` de la API de WhatsApp de acuerdo al contexto de navegación del usuario:
    * *Desde la card de un producto en la Home (Servicios/Destacados):* `"Hola BarcaneGroup, vi su [Nombre del Producto] en la web y me gustaría solicitar una cotización para mi negocio."`
    * *Desde la página de Detalle de Producto (`/productos/:id`):* `"Hola BarcaneGroup, estoy interesado en el producto [Nombre del Producto] (ID: [ID]) y deseo más información."`
    * *Beneficio:* Permite al equipo de ventas de BarcaneGroup saber con exactitud qué producto captó la atención del cliente desde el primer segundo.
* **Botón Flotante de WhatsApp (FAB):** Implementar un componente de botón flotante en la esquina inferior derecha. Permanecerá fijo tras hacer scroll superando la sección del Hero, facilitando que el usuario inicie el contacto en dispositivos móviles con un acceso cómodo al pulgar.
* **Bloque de Confianza "Nosotros" (Sección Compacta):**
    Para evitar la redirección temporal del Navbar hacia otra sección, se integrará un bloque de texto o tarjeta corporativa concisa antes de la sección de servicios. Esta destacará que son fabricantes directos con cobertura en todo el Perú, construyendo la confianza clave que requiere el cliente industrial/B2B.

---

## 2. Rendimiento Técnico y Fluidez

Mejoras orientadas a optimizar la velocidad de carga y la experiencia de navegación reactiva dentro de la SPA (Single Page Application):

* **Imágenes Responsivas en el Hero (`<picture>` / `srcset`):**
    El carrusel del Hero es el elemento visual principal (LCP - *Largest Contentful Paint*). Para evitar que los dispositivos móviles descarguen innecesariamente las imágenes pesadas de resolución desktop (`1920x1080px`), se adaptará el código usando la etiqueta HTML `<picture>`. Esto servirá versiones optimizadas verticalmente para smartphones y horizontalmente para pantallas grandes.
* **Control del "Warp Reset" en el Carrusel:**
    Para asegurar que el loop infinito visual no presente saltos extraños (*flickering*) al regresar instantáneamente al slide inicial, se controlará dinámicamente la propiedad `transition: transform` en el CSS mediante un estado en React. Al activarse el reinicio en 0ms, la transición se removerá temporalmente y se reactivará de inmediato para el siguiente slide.
* **Persistencia del Filtro en el Catálogo:**
    Evitar que el usuario pierda la categoría seleccionada al navegar. Si un usuario filtra el catálogo por "Empaques", entra a ver un producto y pulsa *"← Volver al catálogo"*, el estado del filtro se mantendrá persistente pasándolo a través de la propiedad `state` de React Router DOM o mediante parámetros en la URL (`/productos?categoria=empaques`).

---

## 3. SEO y Refinamiento de Detalles Frontend

Detalles de calidad que completan la percepción de un producto web 100% terminado y profesional:

* **Datos Estructurados JSON-LD (LocalBusiness / Organization Schema):**
    Inyectar un script de metadatos estructurados en el `index.html`. Esto potenciará el SEO local para que motores de búsqueda como Google interpreten correctamente a BarcaneGroup como una empresa de manufactura/distribución real en el mercado peruano, optimizando búsquedas orgánicas locales.
* **Feedback Visual en el Formulario de Newsletter:**
    Aunque el formulario del footer no procese los datos en una base de datos por ahora, se añadirá validación nativa (`type="email" required`) junto con un manejo de estado en React (`useState`). Al hacer click en "Suscribirse", el input se ocultará temporalmente para mostrar un mensaje de éxito: *"¡Gracias por suscribirte! Te notificaremos pronto."*