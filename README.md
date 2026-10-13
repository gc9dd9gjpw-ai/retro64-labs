# Retro64 Labs — GitHub Pages

Paquete de la web original RETRO64_LABS_Web_v2_Alejandro. Se conservan sin cambios el HTML, CSS, JavaScript y favicon, incluido el diseño, los textos y el autor Alejandro Lázaro. No necesita instalación ni compilación.

## Subir al repositorio

1. Descomprime este ZIP.
2. Abre https://github.com/gc9dd9gjpw-ai/retro64-labs/upload/main
3. Arrastra el contenido extraído: `index.html`, la carpeta `assets/`, `README.md` y `.nojekyll` (puede estar oculto). No subas el ZIP ni una carpeta contenedora.
4. Confirma la subida con **Commit changes** en `main`. Sustituye el README existente por este.
5. En **Settings → Pages**, selecciona **Deploy from a branch**, `main` y `/(root)`, y pulsa **Save**.
6. Espera a que termine el despliegue; comprueba su estado en **Actions**.

Dirección prevista, si no hay otro dominio configurado: https://gc9dd9gjpw-ai.github.io/retro64-labs/

La raíz del repositorio debe contener `index.html`; dentro de `assets/` deben estar `site.css`, `app.js` y `favicon.svg`. El archivo vacío `.nojekyll` permite servir los archivos estáticos directamente.

## Dominio retro64labs.com

Este paquete no incluye `CNAME`: la compra o titularidad del dominio no se ha confirmado. Puedes publicar primero con la dirección de GitHub.

Cuando tengas comprado y confirmado el dominio, verifica su titularidad en GitHub y configura **Settings → Pages → Custom domain** como `retro64labs.com`. Al publicar desde una rama, GitHub crea el archivo `CNAME`.

Después configura en tu proveedor DNS cuatro registros A para `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`. Para `www`, usa un registro CNAME con destino `gc9dd9gjpw-ai.github.io` (sin ruta). Activa **Enforce HTTPS** cuando esté disponible. La propagación DNS puede tardar hasta 24 horas.

Documentación oficial:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Catálogo y descargas

La web incluye cuatro proyectos, búsqueda, filtros, fichas e idiomas español/inglés. Los enlaces de descarga están vacíos en el original: publicar la web no publica los programas.

Para activarlos, edita cada objeto de `PROJECTS` en `assets/app.js`: añade un `downloadUrl` real o un `releaseRepo` con formato `usuario/repositorio` y, opcionalmente, `releaseAssetContains` para seleccionar un archivo de la última GitHub Release. `version` y `sourceUrl` son opcionales. Si GitHub no responde, la descarga permanece pendiente. No hay panel de subida de programas.

Para comprobarla localmente, abre `index.html` en un navegador. Para actualizarla, sube los archivos modificados a `main`.
