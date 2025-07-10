---
id: territory
title: Territorios
sidebar_position: 30
---

:::info Enlace de utilidad
[Help Salesforce - Gestión de territorio de empresa](https://help.salesforce.com/s/articleView?id=sf.tm2_intro.htm&type=5)
:::

## Conceptos
### Tipos de territorio
Nos ayudan a organizar los territorios por características claves importantes para nuestra empresa. Todo territorio que creemos
debe tener un tipo de territorio. Estos solamente son utilizados para organizar y crear territorios (No aparecen en jerarquías de modelos de territorio).

:::tip Ayudita
Cuando creemos un tipo de territorio, hay que asegurarse de que la etiqueta y descripción indiquen claramente qué territorios pertenecen a ese tipo.
:::

### Prioridad del tipo de territorio
Mientras creamos el tipo de territorio se nos va a pedir que le asignemos una prioridad. Este es un esquema que creamos nosotros mismos, definiendo por ejemplo
que 001 es de alta prioridad mientras que 004 es la más baja.

### Territorios
Estos organizan grupos de cuentas, candidatos y usuarios que trabajan con esas cuentas. A su vez, se crean basándose en los tipos de territorios.
Un territorio puede tener tanto territorios principales como secundarios, así como también un registro puede estar en más de un territorio.

### Modelo de territorio
El modelo de territorio es un sistema de administración que nos permite crear y ver las estructuras de territorios junto con sus cuentas, candidatos y usuarios antes de haber activado el modelo.
Lo cuál nos permite ver cual es el que se adapta mejor a nuestra organización.

:::caution Atención
Dependiendo de la edición de Salesforce que estemos utilizando vamos a poder crear un cierto número de modelos.
Por otro lado, **solo puede haber un modelo activo a la vez**. 
:::

### Jerarquía de territorios
Nos muestra la estructura de un modelo. Desde acá podemos crear, modificar y eliminar los territorios, ejecutar reglas de asignación y ver el detalle de los territorios.

:::tip Ayudita
Desde el detalle del territorio vamos a poder asignar las reglas de asignación que le corresponde y ejecutarlas de ser necesario. También es posible agregar cuentas manualmente. 
:::

### Estado de modelo de territorio
* **Planificación:** Es el estado predeterminado cuando creamos un modelo. Este nos permite ver la vista previa de la jerarquia antes de implementarlo.
* **Activo:** Es el estado que obtenemos luego de activar el modelo. Nos permite ver en detalle todo su contenido.
* **Archivado:** Solo puede estar en estado archivado un modelo que haya estado en activo y este no puede volver a activarse. Nos permite ver como estaba configurado cuando estuvo activo. 

## Modelo de datos
![Territory Management 2.0 Model](https://architect.salesforce.com/1/asset/immutable/s/bede9ab/assets/images/data-models/sales-cloud-territory-management-data-model.png)
*[Territory Management 2.0](https://architect.salesforce.com/diagrams/template-gallery/sales-cloud-territory-management-data-model)*
