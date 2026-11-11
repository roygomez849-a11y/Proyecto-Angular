# Horizonte Travel - Inicio de sesión en Angular

Prototipo académico del **Sistema Web de Gestión, Búsqueda y Reservas para Agencias de Viajes** (Grupo 7, Universidad de Guayaquil).

## Requisitos

- Node.js compatible con Angular 21 (por ejemplo, Node.js 22.12 o superior dentro de la versión 22).
- npm.

## Ejecución

1. Abrir la carpeta `horizonte-travel` con Visual Studio Code.
2. Abrir la terminal en esa carpeta.
3. Ejecutar `npm install`.
4. Ejecutar `npm start` (equivale a `ng serve --open`).
5. Abrir `http://localhost:4200/` si el navegador no se abre automáticamente.

## Cómo comprobar la actividad

1. Verificar que aparezcan la marca Horizonte Travel y los botones **Acerca de** e **Iniciar Sesión** en la cabecera.
2. Verificar los campos **Usuario** y **Contraseña**, y el botón **Aceptar** en la zona central.
3. Escribir cualquier usuario y contraseña de demostración.
4. Pulsar **Aceptar**: aparece la alerta **«Se procederá a validar las credenciales de acceso»**. Tras cerrar la alerta, también queda visible un aviso informativo en la página.
5. Pulsar **Acerca de**: se despliega una sección informativa sin cuadros de diálogo.
6. Confirmar la leyenda de copyright en el pie de página.

**Importante:** Se trata de una interfaz académica. No realiza autenticación real, no recoge usuarios en un servidor y no implementa todavía los módulos de reservas, pagos, catálogo o administración. El nombre comercial Horizonte Travel es provisional.

## Archivos centrales

- `src/app/app.component.html`: cabecera, formulario, alerta visible y pie.
- `src/app/app.component.ts`: lógica del botón Aceptar y controles.
- `src/app/app.component.css`: diseño responsive del componente.
- `src/styles.css`: estilos generales.
- `src/main.ts`: punto de entrada de Angular.

La entrega incluye también un PDF de evidencias y un video técnico de ejemplo. **La grabación final para entregar al docente debe incluir a los cinco integrantes reales en cámara**, según la consigna.
