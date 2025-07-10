---
id: acciones-rapidas
title: Acciones Rápidas
sidebar_position: 16
---

Las Acciones Rápidas (Quick Actions) son una herramienta fundamental en Salesforce para mejorar la productividad de los usuarios. Su objetivo principal es simplificar y acelerar los flujos de trabajo, permitiendo a los usuarios realizar tareas comunes—como crear registros, registrar llamadas o actualizar información—directamente desde el contexto en el que se encuentran, sin necesidad de navegar a otras páginas.

Existen dos tipos fundamentales de acciones rápidas, y la elección entre una y otra es la decisión de diseño más importante.

## El Dilema Principal: Acciones Específicas de Objeto vs. Acciones Globales
La diferencia clave entre estos dos tipos de acciones es el contexto.

- **Acciones Específicas de Objeto (Object-Specific Actions)**: Se ejecutan desde la página de un registro particular (una Cuenta, un Caso, etc.). Esto les permite tener una relación automática con ese registro.
- **Acciones Globales (Global Actions)**: Se pueden colocar en cualquier lugar que soporte acciones (como la página de inicio o la barra de utilidades). No tienen una relación directa con ningún registro en particular.


## Tipos de Acciones Disponibles
Tanto las acciones globales como las específicas de objeto pueden realizar diferentes funciones:

- **Crear un Registro (Create a Record)**: La acción más común. Permite crear un nuevo registro (un Contacto, una Oportunidad, etc.). Respeta las reglas de validación y los campos requeridos del objeto.
- **Actualizar un Registro (Update a Record)**: Permite a los usuarios editar campos clave de un registro de forma rápida. Esta acción solo puede ser específica de objeto, ya que necesita un registro para actualizar.
- **Registrar una Llamada (Log a Call)**: Permite a los usuarios registrar detalles sobre llamadas o interacciones. Estas se guardan como Tareas completadas y se asocian al registro correspondiente si la acción es específica de objeto.
- **Acciones Personalizadas (Custom Actions)**: Son las más potentes y flexibles. Permiten invocar lógica personalizada para realizar tareas que van más allá de la creación o actualización estándar. Pueden llamar a:
    - **Flows**: La opción moderna y preferida para automatización declarativa compleja.
    - **Lightning Web Components (LWC)**: Para crear interfaces de usuario personalizadas y ricas en funcionalidad del lado del cliente.
    - **Lightning Components (Aura)**: La generación anterior de componentes.
    - **Visualforce Pages**: La opción más antigua, útil para funcionalidades heredadas.
- **Enviar Correo (Send Email)**: Permite enviar un email. La acción específica de objeto para enviar correos solo está disponible en el objeto Caso. La acción global de enviar correo solo está disponible en Lightning Experience.


## Configuración y Personalización Clave
Para que las acciones sean efectivas, es crucial personalizarlas correctamente.

### Diseño de la Acción (Action Layout)
Cada acción tiene su propio "mini" diseño de página. Aquí se define qué campos verá el usuario al ejecutar la acción. La clave es el minimalismo: incluir solo los campos esenciales para que la tarea sea rápida.

### Valores Predefinidos (Predefined Field Values)
Esta es una de las características más potentes. Permite establecer un valor por defecto para un campo, que puede ser estático o dinámico (usando una fórmula).

- **Beneficio**: Asegura la consistencia de los datos y reduce el número de campos que el usuario debe completar. Si un campo tiene un valor predefinido, a menudo se puede quitar del diseño de la acción para simplificar aún más la interfaz.

### Diseño del Publicador (Publisher Layout)
Aquí es donde se controla qué acciones están disponibles para los usuarios y en qué orden aparecen. Existen los diseños de página del objeto (para acciones específicas) y el diseño del publicador global (para acciones globales).


## Mejores Prácticas y Consejos de Implementación

- **Nombres Claros**: Usa nombres cortos y orientados a la tarea (Ej: "Nuevo Contacto", "Registrar Llamada"). Las etiquetas largas se cortan en la interfaz.
- **Minimalismo es Clave**: No sobrecargues el diseño de la acción. Si un campo no es absolutamente necesario, quítalo. Usa valores predefinidos para todo lo que puedas.
- **No Exceder el Límite**: Se recomienda no tener más de 9 acciones en un mismo publicador (en Lightning Experience, se muestran hasta 10). Demasiadas acciones pueden ralentizar la carga de la página y confundir al usuario.
- **Piensa en Móvil**: Diseña las acciones con una sola columna en el layout para una mejor experiencia en dispositivos móviles.

## Límites y Consideraciones Importantes

- **Relaciones Maestro-Detalle**: Una acción para crear un registro de detalle debe ser específica de objeto, no global, para que se establezca la relación maestro-detalle requerida.
- **Tipos de Registro**: La visibilidad de una acción puede depender de si el usuario tiene acceso al tipo de registro que la acción está configurada para crear.
- **Permisos**: El usuario necesita los permisos adecuados sobre el objeto y los campos para poder ver y ejecutar la acción. Por ejemplo, para ver una acción que crea un Caso desde una Cuenta, el usuario necesita permiso de lectura y edición en el campo de relación Parent Case en el objeto Caso.
- **Campos No Soportados**: No se pueden agregar al diseño de una acción campos de solo lectura como fórmulas, numeración automática o campos de resumen (roll-up summary).
- **Grupos de Chatter**: Los grupos que permiten clientes externos tienen un conjunto limitado de acciones estándar y no soportan acciones personalizadas.
- **Objetos Externos**: Soportan acciones rápidas pero con limitaciones (por ejemplo, no se pueden usar campos de objetos externos en fórmulas de valores predefinidos).