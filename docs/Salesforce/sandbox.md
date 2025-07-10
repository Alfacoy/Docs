---
id: sandbox
title: Sandbox
sidebar_position: 95
---

## ¿Qué es un Sandbox y Cuándo Usarlo?

Un Sandbox es una copia de tu organización de Salesforce creada en un entorno separado y aislado. Su propósito principal es permitir el desarrollo, las pruebas y la formación sin afectar de ninguna manera los datos o las configuraciones de tu entorno de producción.

Casos de uso clave:
- **Aislar el desarrollo**: Personalizar y programar nuevas funcionalidades de forma segura.
- **Realizar pruebas**: Probar los cambios utilizando una copia de los datos y usuarios de producción.
- **Capacitar a usuarios**: Ofrecer un entorno de formación seguro para que los usuarios aprendan a usar nuevas funcionalidades.
- **Coordinar despliegues**: Agrupar cambios de varios desarrolladores en un solo paquete para luego pasarlo a producción.


## Tipos de Sandboxes

Existen diferentes tipos de sandboxes, cada uno diseñado para una necesidad específica. La principal diferencia entre ellos radica en qué copian de producción, su capacidad de almacenamiento y con qué frecuencia se pueden actualizar.

### Full Sandbox 

- **Propósito**: Es el entorno de pruebas más completo, una réplica exacta de producción.
- **Contenido**: Copia todos los metadatos y todos los datos de tu organización, incluyendo registros, archivos adjuntos e historial de campos (opcional).
- **Ideal para**: Pruebas de rendimiento y carga, y como entorno de "staging" (la última parada antes de pasar a producción).
- **Consideración**: Su intervalo de actualización es muy largo (29 días), por lo que no es práctico para el desarrollo diario.

### Partial Copy Sandbox

- **Propósito**: Entorno de pruebas de alta fidelidad.
- **Contenido**: Copia los metadatos y una muestra de los datos de tu organización de producción. Se utiliza una "Plantilla de Sandbox" para definir qué objetos y registros se copiarán.
- **Ideal para**: Pruebas de aceptación de usuario (UAT), pruebas de integración y formación, ya que los usuarios pueden interactuar con datos reales.

### Developer Pro Sandbox

- **Propósito**: Igual que el Developer, pero con mayor capacidad.
- **Contenido**: También copia solo los metadatos.
- **Capacidad**: Puede alojar conjuntos de datos mucho más grandes, lo que lo hace ideal para pruebas de integración o control de calidad (QA).

### Developer Sandbox
- **Propósito**: Desarrollo y pruebas en un entorno aislado.
- **Contenido**: Copia únicamente la configuración (metadatos) de tu organización de producción. No copia datos de registros.
- **Ideal** para: Desarrolladores que trabajan en nuevas funcionalidades o corrección de errores de forma individual.

## Licencias de Sandboxes
Las licencias se compran por tipo de sandbox y son jerárquicas. Esto significa que una licencia de un nivel superior te permite crear sandboxes de niveles inferiores.

- Una licencia Full te permite crear sandboxes de tipo Full, Partial, Developer Pro o Developer.
- Una licencia Partial Copy te permite crear sandboxes de tipo Partial, Developer Pro o Developer.
- Una licencia Developer Pro te permite crear sandboxes de tipo Developer Pro o Developer.

La cantidad y el tipo de sandboxes incluidos varían según tu edición de Salesforce. Se pueden comprar licencias adicionales si es necesario.


## Puntos Importantes a Recordar
- **Límites de almacenamiento**: Si alcanzas el límite de almacenamiento de un sandbox, no podrás guardar nuevos datos. Puedes revisar el uso desde Configuración > Uso de almacenamiento.
- **Plantillas de Sandbox**: Son clave para los sandboxes de copia parcial (Partial Copy), ya que te permiten seleccionar exactamente qué datos de objetos necesitas, haciendo el proceso de copia más eficiente.
- **Creación de Full Sandboxes**: Durante la creación, puedes decidir si incluyes el historial de campos y la actividad de Chatter. Ten en cuenta que los datos de Chatter pueden ser muy extensos y hacer que la copia tarde mucho más tiempo.
- **Ediciones**: La disponibilidad de sandboxes varía según la edición de Salesforce (Professional, Enterprise, Performance, Unlimited). Las ediciones Professional solo incluyen sandboxes de tipo Developer.


## Tabla de referencia

|Tipo de Sandbox|Intervalo de Actualización|Límite de Almacenamiento|¿Qué se Copia?|Plantillas Disponibles|
|---------------|--------------------------|------------------------|--------------|----------------------|
|Developer Sandbox|1 día|Datos: 200 MB Archivos: 200 MB|Solo Metadatos|No disponible|
|Developer Pro Sandbox|1 día|Datos: 1 GB Archivos: 1 GB|Solo Metadatos|No disponible|
|Partial Copy Sandbox|5 días|Datos: 5 GB Archivos: Igual que producción|Metadatos y Muestra de Datos|Requerido|
|Full Sandbox|29 días|Igual que producción|Metadatos y Todos los Datos|Disponible|



