---
id: automatizaciones-deprecadas
title: Automatizaciones deprecadas 
sidebar_position: 3
---

## Workflow Rules y Process Builder

Las Reglas de Flujo de Trabajo (Workflow Rules) y el Constructor de Procesos (Process Builder) son herramientas de automatización declarativa de Salesforce que permiten ejecutar acciones específicas cuando se cumplen ciertos criterios en los registros. Aunque han sido fundamentales para la plataforma, ambas herramientas están siendo retiradas y reemplazadas por Flow.

A continuación, se detalla cada una en el contexto de su funcionalidad histórica y su estado actual.


## Reglas de Flujo de Trabajo (Workflow Rules)
Las Reglas de Flujo de Trabajo son la herramienta de automatización más antigua de la plataforma. Permiten automatizar procesos internos básicos a través de una regla "si/entonces".

### Concepto Central
Un Workflow se activa cuando un registro se crea o se actualiza de una manera que cumple con los criterios definidos. Si las condiciones se cumplen, la regla ejecuta una o más acciones de forma inmediata o programada en el tiempo.

### Acciones Soportadas
Un Workflow puede ejecutar cuatro tipos de acciones:

- **Asignar una Tarea (New Task)**: Crea una nueva tarea y la asigna a un usuario, rol o propietario del registro.
- **Enviar un Email (Email Alert)**: Envía un correo electrónico predefinido a destinatarios específicos.
- **Actualizar un Campo (Field Update)**: Actualiza el valor de un campo en el mismo registro que activó la regla.
- **Enviar un Mensaje Saliente (Outbound Message)**: Envía un mensaje seguro en formato XML a un sistema externo a través de la API.

### Limitaciones
- Solo puede evaluar un registro a la vez (el que dispara la regla).
- No puede crear registros nuevos (excepto tareas).
- No puede eliminar registros.
- Las acciones se ejecutan en un orden no garantizado.
- Solo puede actualizar campos en el registro principal, no en registros relacionados.
- No borra registros.

## Constructor de Procesos (Process Builder)

El Process Builder fue introducido como una evolución de los Workflows, ofreciendo una interfaz visual más potente y una mayor cantidad de acciones posibles. Permite combinar múltiples reglas "si/entonces" en un solo proceso.

### Concepto Central
Al igual que un Workflow, un proceso se inicia cuando un registro se crea o actualiza. Sin embargo, permite definir múltiples nodos de criterios y ejecutar diferentes conjuntos de acciones para cada uno. Su interfaz gráfica muestra el flujo de la automatización de manera más clara.

### Acciones Soportadas
Process Builder puede hacer todo lo que hace un Workflow y mucho más:

- **Crear un Registro (Create a Record)**: Crea cualquier tipo de registro, no solo tareas.
- **Actualizar Registros Relacionados (Update Records)**: Actualiza campos en el registro que inició el proceso o en registros relacionados (padres o hijos).
- **Lanzar un Flujo (Launch a Flow)**: Inicia un flujo de Salesforce para ejecutar lógica de automatización aún más compleja.
- **Publicar en Chatter (Post to Chatter)**: Publica un mensaje en el feed de un usuario, un grupo o un registro.
- **Enviar para Aprobación (Submit for Approval)**: Envía el registro a un proceso de aprobación.
- **Ejecutar Código Apex**: Llama a una clase de Apex para realizar operaciones personalizadas.

### Limitaciones
- No puede enviar mensajes salientes (Outbound Messages), siendo esta la única función que los Workflows tienen y el Process Builder no.
- Consume más recursos del sistema que los Workflows.
- Aunque es más potente, su rendimiento puede ser inferior al de Flow.
- No borra registros.