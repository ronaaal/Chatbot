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


¿Quieres que:
- Añada el snippet real si me das el código de Voiceflow?
- Genere una versión con SEO meta tags y favicon?
- Prepare un deploy automático a GitHub Pages? 


