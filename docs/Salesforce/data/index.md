---
title: Manejo de datos
---

## Data Loader vs. Data Import Wizard
Salesforce ofrece dos herramientas principales para realizar operaciones masivas de datos: el Asistente de Importación de Datos (Data Import Wizard) y el Data Loader. Aunque ambas sirven para manipular datos, están diseñadas para diferentes escenarios, volúmenes de datos y niveles de complejidad técnica.


## Asistente de Importación de Datos (Data Import Wizard)
Es una herramienta integrada en la interfaz de Salesforce, diseñada para ser fácil de usar y accesible para administradores y usuarios finales. Su principal fortaleza es la simplicidad.

### Características Principales
- **Interfaz**: Guiada, paso a paso, directamente dentro de la configuración de Salesforce.
- **Ubicación**: 100% web, no requiere ninguna instalación.
- **Límite de Registros**: Permite procesar hasta 50,000 registros por operación.
- **Operaciones Soportadas**:
    - Insertar (Crear nuevos registros)
    - Actualizar (Modificar registros existentes)
    - Insertar y Actualizar (Upsert)
- **Prevención de Duplicados**: Incluye una funcionalidad simple e integrada para evitar la creación de registros duplicados basándose en campos como el email o el nombre.
- **Objetos Soportados**: Funciona con los objetos estándar más comunes (Cuentas, Contactos, Prospectos, Soluciones, Casos) y con todos los objetos personalizados.
- **Notificaciones**: Puede enviar notificaciones por correo electrónico al finalizar el proceso.



## Data Loader
Es una aplicación cliente externa que se debe instalar en la computadora del usuario. Está diseñada para administradores y desarrolladores que necesitan realizar operaciones de datos a gran escala y de mayor complejidad.

### Características Principales
- **Interfaz**: Una aplicación de escritorio simple que requiere iniciar sesión en Salesforce.
- **Ubicación**: Externa, requiere descarga e instalación en Windows o macOS.
- **Límite de Registros**: Permite procesar hasta 5,000,000 de registros por operación.
- **Operaciones Soportadas**:
    - Insertar, Actualizar e Insertar/Actualizar (Upsert)
    - Eliminar (Delete)
    - Eliminación Definitiva (Hard Delete)
- Exportar (Export) para obtener registros.
- Exportar Todo (Export All) para obtener registros, incluyendo los que están en la papelera de reciclaje.
- **Automatización**: Se puede operar mediante una línea de comandos (CLI), lo que permite automatizar y programar cargas de datos de forma recurrente (por ejemplo, todas las noches).
- **Objetos Soportados**: Funciona con TODOS los objetos estándar y personalizados, sin excepción.
- **Mapeo de Campos**: Permite guardar mapeos de campos para reutilizarlos en futuras operaciones.


## Resumen y Recomendación Final
- Usa el Asistente de Importación de Datos para tareas simples y rápidas, como cuando un usuario de marketing necesita cargar una lista de 5,000 nuevos prospectos desde un archivo CSV. Es la herramienta perfecta para importaciones a pequeña escala que no requieren lógica compleja.
- Usa el Data Loader para tareas robustas y a gran escala. Es la única opción si necesitas eliminar o exportar datos, trabajar con un objeto no soportado por el asistente, manejar más de 50,000 registros, o automatizar un proceso de integración de datos.