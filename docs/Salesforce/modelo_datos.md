---
id: modelo-de-datos
title: Modelo de Datos
sidebar_position: 10
---
 
En Salesforce, la estructura de datos se organiza a través de un modelo relacional. Para simplificar su comprensión, se puede hacer una analogía con una hoja de cálculo:

- **Objetos (Objects)**: Son el equivalente a las tablas en una base de datos o a una pestaña en una hoja de cálculo. Funcionan como contenedores para almacenar un tipo específico de información (por ejemplo, información de clientes o de propiedades).
- **Campos (Fields)**: Corresponden a las columnas en una hoja de cálculo. Cada campo almacena un dato específico dentro de un objeto (por ejemplo, el nombre de un cliente o el precio de una propiedad).
- **Registros (Records)**: Son el equivalente a las filas en una hoja de cálculo. Un registro es una instancia única de un objeto (por ejemplo, el cliente "Juan Pérez" es un registro en el objeto Contacto).

## Tipos de Objetos en Salesforce
Salesforce utiliza principalmente dos tipos de objetos para estructurar la información:

- **Objetos Estándar (Standard Objects)**: Son los objetos que vienen predefinidos en la plataforma Salesforce. Están diseñados para cubrir necesidades de negocio comunes y ampliamente utilizadas. Algunos de los objetos estándar más importantes son Cuenta (Account), Contacto (Contact), Candidato (Lead) y Oportunidad (Opportunity).
- **Objetos Personalizados (Custom Objects)**: Son objetos creados por los usuarios para almacenar información que es única y específica de su empresa o industria. Permiten extender la funcionalidad estándar de Salesforce para adaptarla a procesos de negocio particulares.

## Campos: Los Atributos de los Objetos
Cada objeto, ya sea estándar o personalizado, contiene campos que definen los datos que se almacenan.

Tipos de Campos Fundamentales:

- **Identidad (Identity)**: Un campo de 15 caracteres, único y generado automáticamente para cada registro, que sirve como su identificador.
- **Sistema (System)**: Campos de solo lectura que proporcionan información del sistema, como la fecha de creación (CreatedDate) o la fecha de última modificación (LastModifiedDate).
- **Nombre (Name)**: Un campo obligatorio en todos los objetos que sirve para identificar y distinguir cada registro. Puede ser un campo de texto o un número autoincremental.
- **Personalizado (Custom)**: Cualquier campo creado por un usuario en un objeto estándar o personalizado. Se identifican fácilmente porque su nombre de API termina en __c (por ejemplo, Precio__c).


### Tipos de Datos de Campo 

Cada campo tiene un tipo de dato que indica qué clase de información almacena. 

Algunos de los tipos más comunes son:

- **Casilla (Checkbox)**: Para valores binarios (verdadero/falso o sí/no).
- **Moneda (Currency)**: Para valores monetarios.
- **Fecha (Date) y Fecha/Hora (DateTime)**: Para almacenar fechas o combinaciones de fecha y hora.
- **Fórmula (Formula)**: Un tipo de campo especial cuyo valor se calcula automáticamente a partir de una fórmula definida por el usuario.

[Ver más tipos de datos](./field_types.md)

## Gestión y Creación de Objetos y Campos
La creación y personalización tanto de objetos como de campos se realiza a través del Gestor de Objetos (Object Manager), que se encuentra en el menú de Configuración (Setup) de Salesforce.    

## Mejores Prácticas para la Personalización
Al crear objetos y campos personalizados, es fundamental seguir ciertas buenas prácticas para mantener la organización y la integridad de los datos:

- **Nomenclatura Clara**: Utilizar nombres descriptivos y únicos para los objetos y campos. Esto evita confusiones y facilita la comprensión del modelo de datos.
- **Documentación y Ayuda al Usuario**: Incluir siempre una descripción clara del propósito de cada objeto y campo personalizado. Utilizar el texto de ayuda para ofrecer detalles adicionales a los usuarios.
- **Uso de Campos Obligatorios**: Marcar como obligatorios aquellos campos que son críticos para un proceso de negocio. Esto previene la creación de registros con datos incompletos y asegura la calidad de la información.