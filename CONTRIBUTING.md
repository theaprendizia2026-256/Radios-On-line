Manifiesto de Contribución: Arquitectura de Radios Online

Este repositorio es un espacio de alta exigencia para el desarrollo de entornos 
bajo Ingeniería de Optimización de Recursos Críticos.

Principio Rector: Mínimos Recursos, Máxima Eficiencia
Si usted desea contribuir, debe aceptar que el software debe ser potente en su núcleo pero silencioso y liviano 
en su ejecución. Programamos para la resiliencia en cualquier hardware, optimizando cada ciclo de CPU.

1. Prohibición de Abstracciones Innecesarias
Anti-Frameworks: Queda estrictamente prohibido el uso de React, Vue, Angular o cualquier librería
que introduzca un runtime pesado. Se exige Vanilla JavaScript (ECMAScript Moderno) puro.

Arquitectura CSS: No se permiten preprocesadores, Bootstrap, Tailwind o librerías externas. 
El diseño debe basarse en CSS nativo optimizado (Flexbox/Grid) sin dependencias.

Geometría Vectorial: Los activos visuales deben ser SVG de geometría pura integrados en el código.
Se rechaza cualquier formato de mapa de bits (PNG/JPG) por su ineficiencia en el escalado y peso.

2. Estándares de Ingeniería
Eliminación de Deuda Técnica: Si un componente, línea de código o elemento de UI no posee una función crítica demostrable,
será eliminado. El minimalismo es la optimización máxima de la funcionalidad.

Ingeniería de Invisibilidad: El software debe presentar una simplicidad externa absoluta que oculte una 
ingeniería interna superior basada en lógica pura y automatización.

3. Protocolo de Pull Request (PR)
Auditoría de Recursos: Verifique que su cambio no incremente la latencia de carga ni el consumo de memoria.

Justificación Técnica: Documente por qué su solución es la más liviana posible para el problema planteado.

Trazabilidad: Actualice el CHANGELOG.md siguiendo estrictamente el versionado semántico.

"La elegancia visual es el indicador de que el código base es sólido y escalable."
