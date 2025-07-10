---
id: conjunto-de-permisos
title: Conjunto de permisos
sidebar_position: 3
---


Los Conjuntos de Permisos (Permission Sets) son una colección de configuraciones y permisos que otorgan a los usuarios acceso adicional a diversas herramientas y funciones en Salesforce. Su propósito es extender la funcionalidad de los usuarios sin necesidad de modificar su perfil base, siguiendo un modelo de permisos aditivo y escalable.

Son la solución moderna y recomendada para gestionar la seguridad de manera flexible, evitando la proliferación de perfiles y simplificando la administración de accesos.

## El Principio Fundamental: Perfiles vs. Conjuntos de Permisos
Para entender los Conjuntos de Permisos, es crucial entender su relación con los Perfiles (Profiles). Esta es la analogía más clara:

- El Perfil es la llave que te permite entrar al edificio. Define el acceso base y mínimo que un usuario tiene. Determina lo que es fundamental para su rol (qué aplicaciones ve, qué pestañas son visibles, qué tipo de licencia tiene).

- El Conjunto de Permisos es la llave que abre una sala específica y restringida dentro de ese edificio. Otorga permisos adicionales por encima del perfil. Un usuario solo puede tener un perfil, pero puede tener múltiples conjuntos de permisos asignados.

En resumen: los Perfiles establecen la base de lo que un usuario puede hacer, y los Conjuntos de Permisos solo pueden agregar permisos, nunca quitarlos.

## Casos de Uso Comunes
Los Conjuntos de Permisos son ideales para situaciones donde necesitas desviarte del estándar definido por un perfil.

- **El "Superusuario" del Equipo**: En un equipo de ventas, todos tienen un perfil que les permite crear y editar oportunidades. Sin embargo, se necesita que uno o dos líderes de equipo puedan eliminar oportunidades o transferir la propiedad de registros. En lugar de crear un perfil nuevo de "Líder de Ventas", se asigna un Conjunto de Permisos llamado "Gestión de Oportunidades" a esos usuarios específicos.

- **Acceso a una Aplicación Específica**: Tu empresa adquiere una nueva aplicación del AppExchange para realizar encuestas. Solo el equipo de marketing necesita usarla. Se crea un Conjunto de Permisos que otorga acceso a los objetos y pestañas de esa aplicación y se asigna únicamente a los miembros del equipo de marketing.

- **Tareas Temporales o Proyectos**: Un usuario del equipo de soporte necesita ayudar en un proyecto de limpieza de datos durante un mes. Se le asigna un Conjunto de Permisos con permisos de "Modificar Todos los Datos" para el objeto Cuenta, y se le retira cuando el proyecto finaliza, sin haber modificado nunca su perfil de soporte base.

## La Evolución: Grupos de Conjuntos de Permisos (Permission Set Groups)
A medida que una organización crece, un usuario puede necesitar 5, 10 o más Conjuntos de Permisos, y su gestión se vuelve compleja. La solución a esto son los Grupos de Conjuntos de Permisos (Permission Set Groups).

Un Grupo es, literalmente, un contenedor de Conjuntos de Permisos. Permite agrupar múltiples conjuntos de permisos que juntos definen un rol o una "persona" de negocio.

- Ejemplo: Se crea un Grupo llamado "Gerente de Marketing". Dentro de este grupo se incluyen:

    - Conjunto de Permisos: "Acceso a App de Encuestas"

    - Conjunto de Permisos: "Aprobador de Campañas"

    - Conjunto de Permisos: "Gestión de Paneles de Marketing"

Ahora, en lugar de asignar tres conjuntos de permisos a cada nuevo gerente de marketing, simplemente se le asigna el grupo único "Gerente de Marketing".

### Función de Silenciamiento (Muting)
Una característica poderosa de los Grupos es la capacidad de "silenciar" un permiso específico que viene de un conjunto dentro del grupo. Esto permite reutilizar conjuntos de permisos de manera flexible sin tener que clonarlos y modificarlos.

## Tipos de Permisos que se Pueden Asignar
Un Conjunto de Permisos puede otorgar una amplia variedad de autorizaciones, entre ellas:

- **Permisos de Objeto**: Controlar el acceso a los registros de un objeto (Crear, Leer, Editar, Eliminar, Ver Todos, Modificar Todos).
- **Seguridad a Nivel de Campo (Field-Level Security)**: Dar visibilidad o permiso de edición a campos específicos que están ocultos en el perfil.
- **Acceso a Clases Apex y Páginas de Visualforce**: Permitir la ejecución de lógica de backend o la visualización de páginas personalizadas.
- **Permisos del Sistema**: Habilitar capacidades a nivel de toda la organización (Ej: "Exportar Informes", "API Habilitada", "Gestionar Usuarios").
- **Acceso a Tipos de Registro**: Asignar tipos de registro que no están disponibles en el perfil base.
- **Permisos Personalizados**: Otorgar acceso a procesos o flujos personalizados que verifican la existencia de un permiso específico.

## Funcionalidades Avanzadas
- **Activación Basada en Sesión**: Es posible activar un conjunto de permisos solo para la duración de la sesión activa de un usuario. Esto es útil para permisos de alto riesgo, requiriendo que el usuario verifique su identidad para obtenerlos temporalmente.
- **Activación Basada en Tiempo (Próximamente)**: Salesforce está trabajando en permitir la asignación de conjuntos de permisos con una fecha de caducidad automática, ideal para acceso temporal a proyectos.


## Mejores Prácticas
- **Principio de "Acceso Mínimo" para los Perfiles**: Configura tus perfiles con la menor cantidad de permisos posible, lo estrictamente necesario para la función base.
- **Construir con Conjuntos de Permisos**: Otorga todos los permisos adicionales y específicos a través de Conjuntos de Permisos.
- **Adoptar Grupos de Conjuntos de Permisos**: Basa tu modelo de seguridad en roles o personas de negocio usando Grupos. Esto simplifica drásticamente la asignación y el mantenimiento.
- **Nomenclatura Clara**: Utiliza una convención de nombres consistente y descriptiva para tus Conjuntos de Permisos y Grupos (Ej: PS - Opportunity - Delete, PSG - Sales Manager).
- **Documentar**: Mantén una descripción clara en cada Conjunto de Permisos y Grupo explicando su propósito.
- **Auditoría Regular**: Revisa periódicamente quién tiene qué permisos para asegurar que los accesos sigan siendo apropiados.