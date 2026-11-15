# Sabor Litoral — sitio web

Sitio responsive del festival Sabor Litoral, desarrollado con React + Vite y los recursos gráficos originales suministrados.

## Requisitos

- Node.js 18 o superior
- npm

## Ejecutar en tu computadora

1. Descomprimí esta carpeta.
2. Abrila en Visual Studio Code.
3. En la terminal, dentro de la carpeta del proyecto, ejecutá:

```bash
npm install
npm run dev
```

4. Abrí en el navegador la dirección que muestre Vite (normalmente `http://localhost:5173`).

## Generar la versión para publicar

```bash
npm run build
```

La web optimizada queda dentro de `dist/`. Para probarla localmente:

```bash
npm run preview
```

## Funcionalidades incluidas

- Menú de navegación y menú desplegable para celulares.
- Botones de entradas con enlace configurable.
- Cronogramas de los dos días en ventanas emergentes.
- Formulario de inscripción de emprendedores con validación.
- Mapa ilustrado del predio con zoom, información y enlace a Google Maps.
- Diseño responsive para escritorio, tablet y celular.

## Conectar servicios reales

Copiá `.env.example` como `.env` y completá las variables:

- `VITE_TICKETS_URL`: dirección de la plataforma real de venta de entradas.
- `VITE_FORMSPREE_ENDPOINT`: endpoint de Formspree o servicio compatible que reciba solicitudes por `POST` en formato JSON.

Sin esas variables, el sitio funciona en modo demostración. El formulario guarda las solicitudes en el navegador local y los botones de entradas muestran un aviso; no se procesa ningún pago ni se envía la solicitud a un correo.

## Archivos principales

- `src/App.jsx`: secciones, textos, datos de invitados, cronogramas y acciones.
- `src/styles.css`: identidad visual, composición y estilos responsive.
- `public/assets/`: fotografías, logotipo, ilustraciones y recursos gráficos.

Los horarios, perfiles y textos son contenido editable de la propuesta y deben confirmarse antes de publicar el festival.
