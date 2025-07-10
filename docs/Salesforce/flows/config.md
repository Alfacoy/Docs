---
id: config
title: Configuraciones frecuentes 
sidebar_position: 1
---

## Configuración de automatización de procesos
:::info Ubicación
Configuración  | Automatización de procesos | **Configuración de automatización de procesos**
:::
En este sitio vamos a encontrar diferentes configuraciones para los flujos. Es importante revisar este apartado ya que hay funciones interesantes para activar. 
De momento, me voy a concentrar en documentar las que estoy ocupando y las que más me interesen.


### Activar respuesta de aprobación por email
Nos permite que los usuarios respondan las solicitudes de aprobación por email escribiendo **APROBAR** o **RECHAZAR** para la primera línea y en la segunda un comentario. De está forma sin tener 
ingresar al registro pueden aprobar o rechazar sin problemas.

### Enviar email de error de flujo o proceso a 
Gracias a esta configuración, tenemos la capacidad de redirigir la notificación de error de flujo a un usuario o grupo que hayamos configurado en [Email de excepción de Apex](../dev/config.md).
Es especialmente útil cuando estamos trabajando en organizaciones que no tienen mucha capacidad de licencia y utilizamos la misma cuenta que el dueño o un empleado de la compañía. 

Tiene 2 opciones para configurar:
* Destinatarios de email de excepción de Apex
* Usuario que modificó por última vez el flujo proceso **(Por defecto)**


