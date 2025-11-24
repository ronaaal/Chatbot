GOOD PARRILLADAS — Landing Page (Minimal)

Descripción
- Landing page minimalista en español para el restaurante `GOOD PARRILLADAS`.
- Paleta: rojo (`#c71b1b`), blanco y negro.
- Incluye un contenedor preparado para insertar el chatbot de Voiceflow.

Archivos creados
- `index.html` — HTML principal.
- `styles.css` — Estilos (rojo/blanco/negro), responsive.
- `script.js` — Control simple para abrir/cerrar el chat y cargar widget bajo demanda.

Cómo probar localmente
1. Abrir `index.html` en el navegador (doble click o desde PowerShell):

```powershell
Start-Process .\index.html
```

Instrucciones para integrar Voiceflow
1. En Voiceflow, ve a tu proyecto y busca la opción para "Embed" o "Web chat". Voiceflow te dará un fragmento de código (snippet) o un `script` + configuración.
2. Abre `index.html` y pega el snippet EXACTO que Voiceflow te dio dentro del div con id `chatbot` (comentarios en el archivo muestran dónde pegarlo).

Ejemplo orientativo (no es definitivo — usar el snippet real de Voiceflow):

```html
<!-- Ejemplo de referencia: reemplaza con tu snippet real -->
<script>
  window.voiceflow = { projectID: "TU_PROJECT_ID", versionID: "TU_VERSION_ID" };
</script>
<script src="https://cdn.voiceflow.com/widget/bundle.js"></script>
```

3. Guarda los cambios y recarga la página. Presiona el botón flotante (abajo a la derecha) para abrir el chat; el widget se cargará cuando se abra por primera vez.

Notas y sugerencias
- Si prefieres que el widget se cargue automáticamente al abrir la página, mueve el snippet de Voiceflow fuera del `#chatbot` y colócalo justo antes del cierre de `</body>`.
- Para despliegue en producción, puedes publicar los archivos en GitHub Pages, Netlify o cualquier hosting estático.

¿Quieres que:
- Añada el snippet real si me das el código de Voiceflow?
- Genere una versión con SEO meta tags y favicon?
- Prepare un deploy automático a GitHub Pages? 

