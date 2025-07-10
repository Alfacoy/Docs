---
id: schema_builder
title: Schema Builder
sidebar_position: 15
---

El Schema Builder es una herramienta de Salesforce que ofrece un entorno visual e interactivo para ver y modificar todos los objetos, campos y relaciones de tu modelo de datos. Su principal objetivo es simplificar el diseño, la implementación y la modificación de la estructura de datos de tu aplicación (el "esquema").

## Ventajas Clave del Schema Builder
Usar esta herramienta ofrece beneficios significativos en comparación con la navegación tradicional por las páginas de configuración:
- **Visualización Intuitiva**: 🗺️ Muestra de forma gráfica todos los objetos y cómo se conectan entre sí a través de relaciones Master-Detail y Lookup.
- **Modificación Rápida**: Permite crear objetos, campos y relaciones simplemente arrastrando y soltando elementos en el lienzo.
- **Ahorro de Tiempo**: ⏱️ Elimina la necesidad de hacer clic página por página para encontrar detalles de un objeto o para agregar un nuevo campo. Los cambios se implementan automáticamente.
- **Autoguardado**: El diseño y la disposición de tu esquema se guardan automáticamente cada vez que mueves un objeto.

## Funcionalidades Principales
Con el Schema Builder puedes realizar dos acciones principales: visualizar y crear.

### Visualizar
Puedes explorar tu esquema existente, viendo detalles clave como:
- Objetos estándar y personalizados.
- Los campos de cada objeto (incluyendo sus valores y si son obligatorios).
- Las relaciones Master-Detail y Lookup que los conectan.

### Crear
Puedes agregar los siguientes elementos directamente desde el lienzo:
- Objetos Personalizados.
- Relaciones de Búsqueda (Lookup).
- Relaciones Master-Detail.
- Todos los tipos de campos personalizados.

## Limitación Importante ⚠️
A pesar de su versatilidad, el Schema Builder no permite crear campos de tipo Geolocalización (Geolocation). Este tipo de campo debe ser creado desde la interfaz de configuración tradicional del objeto.