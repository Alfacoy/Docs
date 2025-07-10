--- 
id: chatter
title: Chatter
sidebar_position: 93
---

## La Herramienta de Colaboración Empresarial
Salesforce Chatter es una plataforma de colaboración social empresarial integrada directamente en Salesforce. Su objetivo principal es facilitar la comunicación, el intercambio de conocimientos y la colaboración entre empleados en tiempo real, conectando a las personas, los datos y los procesos en un solo lugar.

Chatter transforma la manera en que los equipos trabajan, permitiéndoles colaborar directamente en registros de Salesforce como Cuentas, Oportunidades o Casos, además de en espacios dedicados como los Grupos.


## Funcionalidades y Componentes Clave de Chatter
Chatter está diseñado en torno a un sistema de "feeds" (fuentes de noticias) que centraliza la comunicación. Se puede acceder a él a través de la pestaña "Chatter" en Lightning Experience y está disponible en la aplicación móvil de Salesforce.

### Feeds: El Centro de la Actividad
Los feeds son flujos de publicaciones, comentarios y actualizaciones en tiempo real. Los usuarios pueden interactuar con el contenido mediante "Me gusta", comentarios y compartiendo publicaciones. Chatter ofrece varios tipos de feeds para organizar la información:

- **What I Follow (Lo que sigo)**: Es el feed principal y muestra las publicaciones de todas las personas, registros (objetos) y grupos que el usuario sigue.
- **To Me (Para mí)**: Muestra todas las publicaciones donde el usuario ha sido @mencionado directamente, así como las publicaciones realizadas en su propio perfil.
- **Bookmarked (Marcadores)**: Agrupa todas las publicaciones que el usuario ha guardado para revisarlas más tarde.
- **Company Highlights (Destacados de la empresa)**: Un feed generado automáticamente que muestra las publicaciones más populares y activas en toda la organización, ideal para descubrir contenido relevante.
- **My Drafts (Mis borradores)**: Un espacio privado para guardar borradores de publicaciones antes de compartirlas.


### Grupos (Groups)
Los grupos son espacios de colaboración para equipos, proyectos o intereses comunes. Pueden ser:

- **Públicos**: Cualquier usuario de la organización puede unirse y ver el contenido.
- **Privados**: Solo los miembros pueden ver y publicar contenido. Se requiere una invitación para unirse.
- **No listados**: Similares a los privados, pero no aparecen en las búsquedas. Son solo para miembros y se accede por invitación.
- **Con clientes**: Permiten invitar a usuarios externos (clientes, socios) a un entorno de colaboración seguro y privado.


### Streams
Los Streams son una de las características más potentes de Chatter. Permiten a los usuarios crear "súper feeds" personalizados combinando múltiples fuentes de noticias en una sola vista. Por ejemplo, se puede crear un stream que agrupe las publicaciones de:

- Varios grupos que trabajan en un proyecto.
- Las personas clave asignadas a ese proyecto.
- Registros específicos como una Cuenta y sus Oportunidades relacionadas.
- Se pueden crear hasta 100 streams, y cada uno puede combinar hasta 25 feeds diferentes.


### Perfiles de Usuario y Seguimiento (Following)
Cada usuario tiene un perfil donde puede compartir información sobre sí mismo y donde se muestra su actividad. La funcionalidad clave es "Seguir", que permite a los usuarios suscribirse a las actualizaciones de:

- **Personas**: Para ver lo que publican.
- **Registros**: Para recibir notificaciones cuando un registro importante (como una Oportunidad clave) se actualiza. El seguimiento de campos debe estar habilitado en el objeto para que esto funcione.
- **Grupos**: Para participar en las conversaciones del grupo.

### Otras Funcionalidades
- **@Menciones**: Para llamar la atención de un usuario o grupo específico en una publicación o comentario.
- **Temas (Topics)**: Permite categorizar publicaciones usando hashtags (#). Al hacer clic en un tema, se pueden ver todas las publicaciones relacionadas, facilitando la organización del conocimiento.
- **Encuestas (Polls)**: Para obtener rápidamente la opinión de los compañeros de trabajo.
- **Compartir Archivos**: Permite adjuntar y compartir archivos directamente en el feed.

## Limitaciones y Asignaciones de Chatter
Aunque Chatter es una herramienta poderosa, tiene ciertas limitaciones técnicas y de uso que deben ser consideradas.

### Limitaciones Funcionales y de Soporte

- **Disponibilidad**: Chatter solo permite la comunicación entre usuarios de la misma organización de Salesforce. Aunque se pueden invitar usuarios externos como clientes, no funciona como una red social abierta.
- **Soporte del Navegador**: Ciertos complementos y extensiones de navegador de terceros pueden interferir con la funcionalidad de Chatter.
- **Disponibilidad en Portales**: Chatter no es compatible con los antiguos portales de clientes o socios (Partner Portals / Customer Portals). Su funcionalidad para usuarios externos está enfocada en Experience Cloud Sites.
- **Sin soporte en la Consola**: Históricamente, Chatter no era soportado en la pestaña "Consola" de Salesforce Classic.

### Límites de Datos y Notificaciones
- **Retención de Publicaciones**: Las publicaciones y comentarios se conservan mientras la organización de Salesforce del cliente esté activa.
- **Eliminación Automática de Feeds de Seguimiento**: Las actualizaciones de campos rastreadas en un feed que tengan más de 45 días y no tengan "Me gusta" ni comentarios se eliminan automáticamente. Sin embargo, el historial de auditoría del campo (si está habilitado) se conserva.
- **Notificaciones por Correo Electrónico**: Salesforce impone un límite en la cantidad de correos electrónicos de notificación que se pueden enviar por organización y por hora. Este límite está sujeto a cambios y es importante consultarlo si se planean automatizaciones masivas que generen notificaciones.
- **Límite de @Menciones**: Una sola publicación o comentario puede incluir un máximo de 25 @menciones.
- **Límite de Seguimiento**: Un usuario puede seguir un máximo combinado de 500 personas, temas y registros.

### Límites de Archivos
- **Tamaño Máximo de Archivo**: El tamaño máximo para archivos adjuntados en Chatter es de 2 GB.
- **Tipos de Archivo**: No todos los tipos de archivos pueden ser previsualizados directamente en el navegador.

Estos límites son gestionados por Salesforce y pueden cambiar. Para implementaciones a gran escala, siempre es recomendable consultar la documentación oficial más reciente.