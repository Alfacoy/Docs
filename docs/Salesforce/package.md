---
id: package
title: Paquetes gestionados
sidebar_position: 94
---

## Entendiendo los Paquetes Gestionados y No Gestionados
Los paquetes son contenedores que agrupan componentes de una aplicación —como código, objetos personalizados y flujos de trabajo— para distribuirlos e instalarlos en distintos entornos de desarrollo. La diferencia fundamental entre un paquete gestionado (managed) y uno no gestionado (unmanaged) radica en el control, la protección de la propiedad intelectual y el ciclo de vida de las actualizaciones.


## Paquetes No Gestionados (Unmanaged Packages)
Un paquete no gestionado funciona como una plantilla de código abierto. Una vez instalado, sus componentes se integran en el entorno de destino y pierden su conexión con el paquete original, comportándose como si hubieran sido creados localmente.

### Características Principales
- **Totalmente Editables**: Después de la instalación, el código fuente y los metadatos de los componentes son completamente accesibles y modificables.
- **Sin Ruta de Actualización**: El desarrollador original no puede enviar actualizaciones automáticas. Para incorporar una nueva versión, es necesario desinstalar la versión anterior e instalar la nueva, lo que puede sobrescribir las personalizaciones realizadas.
- **Propiedad Intelectual Abierta**: El código es totalmente visible y accesible para la persona que instala el paquete.
- **Conflictos de Nombres**: Los componentes no tienen un espacio de nombres (namespace) propio, lo que puede generar conflictos con otros componentes que ya existan o se instalen en el entorno.

### Casos de Uso Ideales
- Distribución de proyectos de código abierto.
- Migración de componentes entre entornos de desarrollo (por ejemplo, de un entorno de pruebas a producción).
- Entrega de plantillas o bases de código para que otros desarrolladores las personalicen y desarrollen a partir de ellas.
- Desarrollos internos que no requieren un control de versiones estricto.


## Paquetes Gestionados (Managed Packages)
Un paquete gestionado es una aplicación encapsulada y sellada, diseñada para su distribución a clientes de manera segura y controlada. El desarrollador mantiene la propiedad y el control sobre su propiedad intelectual y puede gestionar el ciclo de vida del producto.

### Características Principales
- **Propiedad Intelectual Protegida**: El código fuente (como Apex) está ofuscado y no es visible ni editable por el instalador, protegiendo así el trabajo del desarrollador.
- **Actualizaciones Nativas**: El desarrollador puede enviar nuevas versiones y parches. Los usuarios pueden instalarlos de forma sencilla, preservando sus datos y personalizaciones.
- **Espacio de Nombres (Namespace) Único**: Todos los componentes del paquete reciben un prefijo único asignado por el desarrollador. Esto previene cualquier conflicto de nombres con los componentes del entorno de destino.
- **Control de Versiones**: Soportan un sistema de versionado que facilita la gestión de diferentes lanzamientos y dependencias.
- **Listado en Marketplaces**: Son el estándar para la distribución de aplicaciones en mercados como el Salesforce AppExchange, ya que pasan por rigurosas revisiones de seguridad.

### Casos de Uso Ideales
- Aplicaciones comerciales destinadas a ser vendidas a múltiples clientes.
- Soluciones complejas que requieren mantenimiento, soporte y actualizaciones continuas por parte del desarrollador.
- Distribución a gran escala donde la protección del código y un proceso de actualización fiable son críticos.