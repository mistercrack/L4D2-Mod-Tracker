# L4D2 Mod Tracker

Un checklist personal para llevar la cuenta de los mods de **Left 4 Dead 2**: qué cambiaste, qué sigue intacto y qué detalles quieres recordar.

## ¿Qué puedes hacer?

- Explorar una lista de mods por categorías: supervivientes, infectados, armas, mapas, audio, interfaz y más.
- Marcar los cambios instalados y guardar una nota para cada elemento.
- Añadir mods propios cuando no encuentres uno en la lista.
- Buscar y filtrar el inventario.
- Exportar tu progreso como JSON y cargarlo en **Ver resumen** para consultar tanto los cambios hechos como los pendientes.

## Cómo usarlo

1. Abre [Modificar](./modificaciones.html), marca tus mods y añade las notas que necesites.
2. Pulsa **Exportar configuración** para descargar tu archivo JSON.
3. Abre [Ver resumen](./resumen.html) y carga ese JSON para revisar tu lista completa.

El editor guarda automáticamente un borrador en el almacenamiento local de **ese navegador**. El resumen solo lee el archivo que selecciones: no modifica el borrador ni sube tus datos. Guarda el JSON en un lugar seguro si quieres conservarlo o consultarlo en otro dispositivo.

## Ejecutar o publicar

No necesita instalación, dependencias ni servidor de aplicación. Puedes abrir `index.html` directamente en un navegador, o publicar los archivos en GitHub Pages:

1. Sube `index.html`, `modificaciones.html`, `resumen.html`, `app.js`, `styles.css` y `README.md` a la raíz del repositorio.
2. En GitHub, ve a **Settings → Pages**.
3. Selecciona **Deploy from a branch**, elige tu rama y la carpeta raíz (`/ (root)`).

**Importante:** no subas tu JSON personal al repositorio; cada persona debe usar su propia copia.

## Sobre la lista y el diseño

La checklist reúne áreas habituales de modding, pero no pretende enumerar todos los addons disponibles. Explora más en el [Steam Workshop de Left 4 Dead 2](https://steamcommunity.com/app/550/workshop/).

La interfaz toma como referencia la atmósfera visual del juego. Usa Oswald, disponible en [Google Fonts](https://fonts.google.com/specimen/Oswald) bajo la licencia [SIL Open Font License 1.1](https://github.com/google/fonts/blob/main/ofl/oswald/OFL.txt). No se ha identificado una fuente web verificable como la original del logotipo. Las imágenes remotas proceden de Steam y Left 4 Dead Wiki/Fandom; requieren conexión y sus derechos pertenecen a sus respectivos titulares.
