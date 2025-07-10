---
id: owd
title: Organization-Wide Defaults
sidebar_position: 1
---


## ¿Qué son los Organization-Wide Defaults?
Los Organization-Wide Defaults (Configuración predeterminada para toda la organización) son el primer nivel y el más fundamental del modelo de seguridad de datos en Salesforce. Definen el nivel de acceso más restrictivo que un usuario tendrá sobre los registros (como cuentas, contactos u oportunidades) que no le pertenecen.

En pocas palabras, el OWD responde a la pregunta: "¿Qué pueden ver y hacer los usuarios con los registros de otros usuarios por defecto?".


## Niveles de Acceso Principales
Puedes configurar los OWD para cada objeto con las siguientes opciones:

🔒 **Privado (Private)**: Es la opción más restrictiva. Solo el propietario del registro y los usuarios que están por encima de él en la jerarquía de roles pueden ver y editar el registro. Nadie más puede acceder a él.

👀 **Público de Solo Lectura (Public Read Only)**: Cualquier usuario puede ver los registros de otros, pero no puede editarlos. Solo el propietario y los usuarios superiores en la jerarquía pueden realizar cambios.

✍️ **Público de Lectura/Escritura (Public Read/Write)**: Es la opción más abierta. Todos los usuarios pueden ver y editar los registros de todos, sin importar quién sea el propietario.

👨‍👦 **Controlado por Principal (Controlled by Parent)**: Este ajuste solo está disponible para objetos en una relación de principal-detalle (master-detail). El acceso al registro "hijo" (detalle) está determinado por el acceso que se tenga al registro "padre" (principal). Por ejemplo, si tienes acceso a una Cuenta, automáticamente tendrás el mismo nivel de acceso a todos sus Contactos relacionados.


## El Principio Clave: Restringir Primero, Abrir Después
La regla de oro en la seguridad de Salesforce es:

- Utiliza los OWD para bloquear el acceso al nivel más estricto y restrictivo que necesite tu organización.
- Luego, utiliza otras herramientas para otorgar acceso adicional a grupos específicos de usuarios que lo necesiten.

Estas herramientas para "abrir" el acceso son:

- **Jerarquía de Roles (Role Hierarchy):** Los gerentes y usuarios en roles superiores pueden acceder a los registros de sus subordinados.
- **Reglas de Colaboración (Sharing Rules)**: Permiten otorgar acceso a registros de forma automática a usuarios de otros grupos o roles.
- **Uso Compartido Manual (Manual Sharing)**: Permite a los propietarios de registros compartir manualmente un registro específico con otros usuarios.