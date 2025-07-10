---
id: sharing
title: Visibilidad de los registros
sidebar_position: 2
---


## Jerarquía de Roles (Role Hierarchy)
La Jerarquía de Roles es la forma más fundamental y automática de abrir el acceso a los registros de forma vertical en la organización.

### ¿Qué es?
Es una estructura jerárgica que imita el organigrama de tu empresa. Los usuarios en un nivel superior de la jerarquía obtienen automáticamente acceso a todos los registros propiedad de los usuarios que están directamente debajo de ellos en la jerarquía.

### ¿Cómo funciona?

- **Acceso Vertical**: Si un Gerente de Ventas está por encima de un grupo de Representantes de Ventas en la jerarquía, el gerente podrá ver, editar y reportar sobre todos los registros (Cuentas, Oportunidades, etc.) que pertenecen a esos representantes.
- **Automático y Heredado**: El acceso es implícito y no requiere configuración adicional una vez que la jerarquía está definida. Un Director que está por encima del Gerente de Ventas, a su vez, verá los registros del gerente y de todos los representantes debajo de él.
 - **Control de Acceso**: Puedes configurar si los usuarios de un rol superior tienen acceso de solo lectura o de lectura/escritura a los registros de sus subordinados.

### ¿Cuándo se usa?

- Para modelar la estructura de gestión y reporte de la empresa.
- Cuando los gerentes y directivos necesitan supervisar el trabajo de sus equipos.
- Es la primera capa de acceso que se configura después de los OWD.


## Reglas para Compartir (Sharing Rules)

Las Reglas para Compartir son la herramienta para abrir el acceso a los registros de forma lateral o entre grupos de usuarios que no están en la misma línea jerárquica.

### ¿Qué son?

Son reglas automáticas que otorgan acceso adicional a grupos de usuarios específicos basándose en ciertos criterios. Permiten excepciones a los OWD que no se pueden cubrir con la jerarquía.

### ¿Cómo funcionan?

- **Acceso Lateral**: Permiten que usuarios en un rol o grupo público vean registros de usuarios en otro rol o grupo público. Por ejemplo, el equipo de Ventas podría necesitar ver ciertos casos del equipo de Soporte, aunque no estén en la misma rama de la jerarquía.
- **Basadas en Criterios**: Las reglas se pueden basar en el propietario del registro o en atributos del propio registro.
- **Basadas en Propietario (Owner-based)**: "Compartir todos los registros propiedad de los usuarios del Rol 'Soporte Técnico Nivel 1' con los usuarios del Rol 'Soporte Técnico Nivel 2'".
- **Basadas en Criterios (Criteria-based)**: "Compartir todas las Oportunidades donde el campo 'Industria' sea 'Tecnología' y el 'Importe' sea mayor a $100,000 con el grupo público 'Expertos en Cuentas Clave'".
- **Nivel de Acceso**: Puedes definir si el acceso concedido es de "Solo Lectura" o "Lectura/Escritura".

### ¿Cuándo se usan?

- Cuando necesitas que equipos de diferentes departamentos colaboren.
- Para dar acceso a registros basados en características específicas del negocio (ej. región, tipo de producto, valor del negocio).
- Para automatizar el uso compartido a gran escala de forma predecible.


## Uso Compartido Manual (Manual Sharing)

El Uso Compartido Manual es la forma más flexible y granular de compartir un registro individual, pero no es automática ni escalable.

### ¿Qué es?

Es la acción que realiza un usuario de compartir un registro específico con otro usuario, rol o grupo público. Esto se hace directamente desde el registro a través del botón "Sharing" (Compartir).

### ¿Cómo funciona?

- **Caso por Caso**: El propietario del registro (o alguien por encima en la jerarquía) decide compartir un único registro con una persona o grupo que normalmente no tendría acceso.
- **Controlado por el Usuario**: No se basa en reglas predefinidas, sino en la necesidad puntual de un usuario.
- **Excepciones**: Es ideal para manejar situaciones excepcionales que no se pueden predecibir con reglas automáticas. Por ejemplo, un vendedor necesita que un experto técnico de otro departamento revise una oportunidad específica para ayudar a cerrar el trato.

### ¿Cuándo se usa?

- Para situaciones únicas y no recurrentes.
- Cuando la necesidad de compartir es impredecible y no sigue un patrón claro.
- Para dar acceso temporal a un registro específico.
- Importante: El botón "Sharing" solo es visible si el OWD para ese objeto es "Privado" o "Público de solo lectura". Si es "Público de Lectura/Escritura", todos ya tienen acceso y no hay necesidad de compartirlo.

