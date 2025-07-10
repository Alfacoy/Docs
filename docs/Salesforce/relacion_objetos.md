---
id: relaciones-entre-objetos
title: Relaciones entre Objetos
sidebar_position: 13
---

Las relaciones entre objetos son un pilar fundamental en Salesforce. Nos permiten conectar registros entre sí para que los usuarios puedan ver datos relacionados de forma contextualizada. Por ejemplo, podemos vincular un objeto personalizado "Bugs" con el objeto estándar "Casos" para rastrear los defectos de productos asociados a las solicitudes de clientes.

La elección del tipo de relación es una decisión de diseño crítica, ya que determina cómo se manejarán aspectos clave como la eliminación de datos, la seguridad, los permisos para compartir y la obligatoriedad de los campos. A continuación, se detallan los tipos de relaciones disponibles.

## Relación Master-Detail (Maestro-Detalle)
Esta es la relación más estrecha entre dos objetos. El registro "maestro" controla ciertos comportamientos del registro de "detalle", creando una dependencia fuerte.

### Características Principales

- **Eliminación en Cascada**: Si se elimina un registro maestro, todos sus registros de detalle asociados también son eliminados.
- **Propiedad y Seguridad**: El registro de detalle hereda automáticamente el propietario y la configuración de seguridad del registro maestro. El campo Owner no está disponible en el objeto de detalle, por lo que no puede tener colas o reglas de compartición propias.
- **Campo Obligatorio**: El campo que establece la relación es siempre obligatorio en el diseño de página del objeto de detalle.
- **Reparenting (Cambio de Padre)**: Por defecto, un registro de detalle no puede ser asignado a otro registro maestro, aunque un administrador puede habilitar la opción "Permitir reasignación de primario" (Allow reparenting) en relaciones sobre objetos personalizados.
- **Límites**: Un objeto personalizado puede tener un máximo de 2 relaciones Master-Detail. Se recomienda no exceder los 10,000 registros hijos por cada maestro.
- **Creación**: Es una buena práctica crear la relación Master-Detail antes de que el objeto de detalle contenga datos.

## Relación de Búsqueda (Lookup)
Esta relación crea un vínculo más flexible entre dos objetos. A diferencia de una relación Master-Detail, los objetos permanecen independientes.

### Características Principales

- **Independencia**: Los dos objetos vinculados tienen sus propios propietarios, configuración de seguridad y reglas de compartición.
- **Flexibilidad**: Puede vincular un objeto consigo mismo (excepto el objeto Usuario) para crear relaciones como "Bug relacionado con otro Bug".
- **Comportamiento ante la eliminación**: Si el campo no es obligatorio, se puede definir qué sucede si se elimina el registro padre al que se apunta:
- **Limpiar el valor de este campo (Default)**: El campo de lookup en el registro hijo queda vacío.
- **No permitir la eliminación**: Impide que el registro padre sea eliminado si tiene registros hijos asociados.
- **Eliminar este registro también**: Elimina el registro hijo junto con el padre. Esta opción se conoce como "eliminación en cascada" (cascade-delete), está desactivada por defecto y debe ser solicitada a Salesforce para su activación.
- **Campo Opcional u Obligatorio**: El campo de lookup puede ser configurado como obligatorio o opcional en el diseño de página.


|Característica               |Relación Master-Detail              |Relación de Búsqueda (Lookup)                         | 
|-----------------------------|------------------------------------|------------------------------------------------------|
|**Vínculo**                  |Fuerte, dependiente.                |Flexible, independiente.                              |
|**Propietario**              |Heredado del maestro.               |Independiente en cada registro.                       | 
|**Seguridad**                |Heredada del maestro.               |Independiente en cada registro.                       |
|**Eliminación del Padre**    |Siempre elimina los registros hijos.|Configurable (limpiar campo, impedir o eliminar hijo).|
|**Campo de Relación**        |Siempre obligatorio.                |Puede ser opcional u obligatorio.                     |
|**Campos Roll-Up Summary**   |Soportados (en el maestro).         |No soportados.                                        |


## Relación Muchos-a-Muchos (Many-to-Many)
Este tipo de relación permite que un registro de un objeto se asocie con múltiples registros de otro, y viceversa (ej: un Caso puede estar ligado a varios Bugs, y un Bug a varios Casos).

**Implementación**: No es un tipo de campo directo, sino un patrón de diseño que se construye utilizando un Objeto de Unión (Junction Object). Este objeto de unión se sitúa entre los dos objetos que se quieren relacionar y tiene una relación Master-Detail con cada uno de ellos.

**Definición de Objeto de Unión**: Es un objeto personalizado que tiene dos relaciones Master-Detail, una con cada uno de los objetos que deseamos conectar. Este objeto "une" a los dos objetos maestros.


## Otros Tipos de Relaciones Especializadas
- **Relación Jerárquica (Hierarchical)**: Es un tipo especial de Lookup disponible únicamente para el objeto Usuario. Permite asociar un usuario con otro, como en el caso de crear una estructura de "Jefe Directo".
- **Relación de Búsqueda Externa (External Lookup)**: Vincula un objeto hijo (estándar, personalizado o externo) con un objeto padre externo. La relación se basa en el campo External ID del objeto padre.
- **Relación de Búsqueda Indirecta (Indirect Lookup)**: Vincula un objeto hijo externo con un objeto padre estándar o personalizado. La relación se basa en un campo ID Externo y único en el objeto padre.

## Consideraciones Generales y Límites
Antes de crear o modificar una relación, ten en cuenta estas reglas fundamentales que aplican a varios tipos de relaciones.

- **Límites por Objeto**: Un objeto personalizado puede tener hasta 2 relaciones Master-Detail, pero puede tener muchas relaciones de Búsqueda (Lookup). Cada relación cuenta para el límite máximo de campos personalizados permitidos en el objeto.

- **Conversión de Relaciones**:
    - Puedes convertir una relación Master-Detail a Lookup solo si no existen campos de resumen (Roll-Up Summary) en el objeto maestro.
    - Puedes convertir una relación Lookup a Master-Detail solo si el campo de búsqueda tiene un valor en todos los registros. Al hacerlo, la seguridad a nivel de organización del objeto hijo cambiará a "Controlado por el padre".

- **Auto-Relaciones (Self-Relationships)**:
    - Un objeto puede relacionarse consigo mismo, pero debe ser una relación de Búsqueda (Lookup).
    - Un registro no puede seleccionarse a sí mismo en el campo de búsqueda.
    - No se puede crear una relación muchos-a-muchos con el mismo objeto (un objeto de unión no puede tener dos relaciones Master-Detail apuntando al mismo objeto maestro).

### Consideraciones Específicas para Master-Detail
Las relaciones Master-Detail son las más complejas y tienen reglas estrictas.

- **Jerarquía y Profundidad**:
    - Se pueden crear relaciones Master-Detail de varios niveles, con un máximo de 3 niveles de profundidad (Maestro -> Detalle -> Sub-detalle 1 -> Sub-detalle 2).
    - Un objeto estándar nunca puede estar en el lado del "detalle" de una relación con un objeto personalizado.

- **Creación y Datos Existentes**:
    - No puedes crear una relación Master-Detail en un objeto personalizado que ya contiene registros.
    - **Solución**: Crea primero la relación como un Lookup, asegúrate de que el campo esté poblado en todos los registros y luego conviértela a Master-Detail.

- **Comportamiento de Eliminación**:
    - Eliminar un registro maestro elimina también todos sus registros de detalle y sub-detalle asociados.
    - Si eliminas un registro de detalle y más tarde eliminas su maestro por separado, el registro de detalle no podrá ser recuperado de la papelera de reciclaje.

:::warning Atención
¡Atención con Despliegues! Un despliegue con la Metadata API que cree o convierta un campo a Master-Detail eliminará permanentemente todos los registros de detalle que se encuentren en la papelera de reciclaje.
::: 

- **Campos de Resumen (Roll-Up Summary)**:
    - En relaciones de varios niveles, un maestro no puede "resumir" campos directamente de un sub-detalle.
    - Para lograrlo, el registro de detalle intermedio debe tener un campo de resumen que calcule los datos del sub-detalle. Luego, el maestro puede "resumir" ese campo del detalle.

- **Límite de Registros Hijos**: Como buena práctica, no excedas los 10,000 registros hijos para una única relación Master-Detail.

### Consideraciones Específicas para Muchos-a-Muchos
Estas reglas aplican al objeto de unión (junction object) que se usa para crear estas relaciones.

- **Eliminación**:
    - Si se elimina uno de los registros maestros, el registro de unión asociado va a la papelera.
    - Si se eliminan ambos registros maestros, el registro de unión se elimina permanentemente y no se puede recuperar.

- **Seguridad y Acceso (Sharing)**: El acceso a un registro del objeto de unión está determinado por el acceso que tenga el usuario a ambos registros maestros asociados. Si un usuario solo tiene acceso a uno de los dos padres, no podrá acceder al registro de unión.
- **Restricciones**: Un objeto de unión no puede ser el maestro en otra relación Master-Detail.

### Consideraciones Específicas para Lookup
- **Comportamiento de Eliminación Configurable**: Al configurar la relación, si el campo es opcional, puedes definir qué ocurre si se elimina el registro padre:
- **Limpiar el valor (Default)**: El campo de búsqueda en el registro hijo se vacía.
- **No permitir la eliminación**: Impide que se elimine el padre si tiene hijos asociados.
- **Eliminar este registro también (Cascade-Delete)**: Elimina el registro hijo junto con el padre. Esta opción está desactivada por defecto y requiere contactar a Salesforce para su habilitación.
- **Historial de Campo**: Si se elimina un registro padre, la lista relacionada de historial en el registro hijo no registrará este evento de eliminación.

### Impacto General en los Informes (Reports)
El tipo de relación que elijas impacta directamente en cómo puedes analizar los datos.
- **Lookup**: Permite unir datos de los dos objetos relacionados en un informe.
- **Master-Detail**: Permite unir datos de hasta tres objetos: el maestro, el detalle, y otro objeto relacionado al detalle mediante un lookup.
- **Muchos-a-Muchos**: Provee dos tipos de informes estándar que unen los tres objetos (ambos maestros y el objeto de unión). El objeto que aparece primero en el nombre del tipo de informe determina el alcance principal de los datos. 

## Superbadge recomendado

> Design a data model based on appropriate object requirements.
> 
> [Object Relationships Superbadge Unit](https://trailhead.salesforce.com/es/content/learn/superbadges/superbadge-object-relationships-sbu)


