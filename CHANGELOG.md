# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [2.0.0] - 2026-08-20

### 🚀 Añadido
- **Carrusel 3D de 6 Categorías:** Nueva arquitectura geométrica a 60° (Música Clásica, Audiolibros, Noticias, Podcasts, Lo-Fi / Ambient y Miscelánea).
- Controles de navegación táctil (*swipe*) optimizados para dispositivos móviles.

### ⚡ Cambios y Mejoras
- **Corte de Audio Inmediato:** Silenciamiento operativo completo al rotar entre categorías para evitar solapamiento de señales y consumo innecesario de datos de fondo.
- **Refactorización de Arquitectura:** Migración de estructura de carpetas anidadas a **estructura plana** dentro de `src/` (`index.html`, `style.css`, `script.js`).
- Optimización de despliegue en Vercel y compatibilidad modular para entornos como CodePen.

### 🔧 Correcciones
- Solucionado el fallo de renderizado de CSS/JS en entornos de producción (GitHub / Vercel) provocado por rutas relativas en subcarpetas.

  
## [1.0.1] - 2026-03-17

### Changed
- **Refactorización de Arquitectura:** Se movió todo el código fuente (`index.html`, `css/`, `js/`, `manifest.json`) a la carpeta `/src` para separar la lógica de la documentación.
- **Configuración de Despliegue:** Se actualizó el Root Directory en Vercel para apuntar a la nueva carpeta `/src`.

### Added
- **Licencia MIT:** Se añadió el marco legal para el uso del software.
- **Archivo .gitignore:** Se implementó el filtro de archivos basura del sistema y entornos locales.
- **Documentación de Gestión:** Creación de los archivos base para estándares de ingeniería de software.

## [1.0.0] - 2026-02-18

### Added
- Versión inicial estable de la Radio Online con 10 emisoras funcionales.
- Soporte para PWA (instalable).
