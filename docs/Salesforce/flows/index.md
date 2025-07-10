---
id: automatizacion
title: Automatizaciones
---

El objetivo principal de la automatización en Salesforce es simplificar y estandarizar los procesos de negocio para ahorrar tiempo, mejorar la calidad de los datos y asegurar que las tareas importantes se realicen siempre de la misma manera.

## ¿Por Qué Automatizar? El Poder de la Automatización
Cada organización tiene tareas repetitivas o procesos que deben seguirse al pie de la letra. La automatización permite:
- **Ahorrar tiempo a los usuarios**: Reduce minutos u horas de tareas manuales, lo que se traduce en un gran ahorro a largo plazo.
- **Asegurar el cumplimiento de tareas**: Garantiza que los pasos críticos de un proceso, como crear una orden de trabajo después de cerrar una venta, nunca se olviden.
- **Mejorar la calidad de los datos**: Al guiar a los usuarios o rellenar información automáticamente, se reducen los errores de entrada manual.
- **Mejorar la experiencia de usuario**: Un buen principio es: "si el usuario solo puede hacer una cosa, hazlo por él". La automatización se encarga de las tareas predecibles para que el usuario se enfoque en lo importante.

## Tipos Principales de Automatización
Como administrador, los procesos que puedes automatizar en Salesforce se dividen en dos categorías principales, dependiendo de si necesitas o no la intervención de un usuario.

### 🙋‍♂️ Experiencias Interactivas (Requieren Interacción del Usuario)
Se utilizan cuando el proceso necesita que un usuario introduzca información o tome una decisión.

- **Flujos de Pantalla (Screen Flows)**: La herramienta principal para crear asistentes guiados (wizards) que muestran información y hacen preguntas a los usuarios a través de una serie de pantallas.
- **Flujos Iniciados Automáticamente (Autolaunched Flows)**: Flujos que se ejecutan cuando un usuario hace clic en un botón o en un enlace. También pueden ser llamados por otras automatizaciones.
- **Procesos de Aprobación (Approval Processes)**: Crean una secuencia de pasos para aprobar o rechazar un registro. Pueden bloquear registros, asignar tareas y actualizar campos.
- **Componentes Lightning y Páginas de Visualforce**: Soluciones basadas en código (JavaScript, HTML, Apex) para crear interfaces de usuario completamente personalizadas y complejas.

### ⚙️ Automatización en Segundo Plano (Se Ejecutan Automáticamente)
Se utilizan para procesos que deben iniciarse y ejecutarse de forma automática, sin que el usuario intervenga directamente.

- **Flujo Desencadenado por Registro (Record-Triggered Flow)**: La herramienta más común. Inicia una automatización cuando un registro es creado, modificado o eliminado.
- **Flujo Desencadenado por Programación (Scheduled Flow)**: Inicia una automatización a una hora y con una frecuencia específicas (ej: todos los días a la medianoche).
- **Flujo Desencadenado por Evento de Plataforma / Data Cloud**: Flujos avanzados que se inician en respuesta a eventos de integración con otros sistemas o cambios en Data Cloud.
- **Apex**: La solución de código más potente para crear cualquier tipo de lógica de automatización en segundo plano. Se puede desencadenar de múltiples formas (triggers en registros, eventos, etc.).