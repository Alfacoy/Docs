---
id: email-to-case
title: Email to Case
sidebar_position: 10
---

:::info Enlace de utilidad
[Help Salesforce - Mail to case](https://help.salesforce.com/s/articleView?id=sf.customizesupport_email.htm&type=5)
:::

## Detalles
Nos ayuda a configurar diferentes casillas de correo electrónico para generar casos en Salesforce a partir de los emails que ingresen a ellas.

### Límites
* Número máximo de correos electrónicos a procesar por día.
    * Número de licencias multiplicado por mil, hasta un máximo de 1 millon. (Por ejemplo, si tenemos 10 licencias, la organización puede
    procesar hasta 10 mil díarios. De superar el límite se rechaza, descarta o queda en cola de espera, dependiendo lo que configuremos).
* Tamaño máximo de correo electrónico entrante.
    * Menos de 25 MB.
* Tamaño máximo de correo electrónico saliente, excluyendo cabecera, adjuntos e imágenes en línea.
    * 384 KB.
* Longitud máxima de caracteres en correo electrónico.
    * Hasta 32 mil para los encabezados.
    * Hasta 32 mil para el cuerpo (puede aumentarse a 131 mil bajo petición).

### Pasos para activar
Primero es necesario que desde el formato de página de Casos incluyamos la **acción rápida** de Correo electrónico. Con esto vamos a poder tener habilitado en el componente
de **Actividades** la acción de mandar correos desde el caso. 

:::caution Atención
Depende mucho de cómo venga configurada tu organización, pero, puede que se dé el caso de que incluso siguiendo todos los pasos te aparezca un error al momento de "Responder" un
correo o que no se vea la acción en las actividades. Para solucionarlo les dejo esta [solución del problema](emailToCase#la-acción-de-envíar-correo-no-es-visible-en-el-registro).
:::

Desde la búsqueda rápida de configuración, debemos buscar "**Correo electrónico para registro de casos**" seguido de **Modificar** y **Activar Correo electrónico para registros
de casos**. 

Luego **Activar el servicio On-Demand**. Esta configuración le permite a Salesforce procesar los mensajes de correo electrónico entrantes.

### Configuraciones para registros de casos
:::info Enlace de utilidad
[Help Salesforce - Configuración de registros](https://help.salesforce.com/s/articleView?id=sf.customizesupport_email_to_case_settings.htm&type=5)
:::

:::caution Atención
Una configuración importante es "**Notificar a los propietarios de casos sobre nuevos correos electrónicos**". Este nos informa siempre que un correo nuevo llegue a uno de los casos
que estemos gestionando. En su momento, yo me había imaginado que me llegaba una notificación a "la campanita", pero no, en realidad **llega a nuestro correo electrónico**.
:::

Dentro de las configuraciones de **Correo electrónico para registros de casos** vamos a tener varios checkbox que habilitan ciertas funciones para los correos. Les recomiendo 
leer el enlace que dejo en esta sección ya que cada checkbox está bien detallado.

### Consideraciones
:::info Enlace de utilidad
[Help Salesforce - Consideraciones sobre la acción de "Enviar Correo Electrónico"](https://help.salesforce.com/s/articleView?id=sf.case_interaction_send_email_quick_action_considerations.htm&type=5)

[Help Salesforce - Consideraciones sobre "Correos Electrónicos para la Generación de Casos"](https://help.salesforce.com/s/articleView?id=sf.faq_cases_email.htm&type=5)
:::
En los enlaces que se agrega, están detalladas las consideraciones que debemos tener a la hora de trabajar con Email To Case.

---
## Problemas comúnes

### La acción de envíar correo no es visible en el registro
:::note Mensaje del error
*No hemos podido encontrar el registro al que está intentando acceder. Puede que otro usuario lo haya eliminado o puede que se haya 
producido un error de sistema. Póngase en contacto con su administrador para obtener ayuda.*
:::
:::info Enlace de utilidad
[Help Salesforce - La acción del publicador de correo electrónico no es visible en el caso una vez que se ha agregado al formato de la página](https://help.salesforce.com/s/articleView?id=000387865&type=1)
:::

El problema en este caso es que faltan agregar ciertas configuraciones a nuestra organización.

**1 - Configuración | Configuración de funciones | Servicio | Configuración del soporte**
* Se debe activar el check de **Activar acciones de noticias en tiempo real de casos y elementos de noticias en tiempo real**.


**2 - Configuración | Configuración de funciones | Chatter | Seguimiento de fuentes**
* El objeto casos debe tener activado el check de **Activar supervisión de noticias**.

**3 - Configuración | Administrar | Administración de correo electrónico | Disponibilidad**
* Hay que establecer el **acceso de enviar correo electrónico** al nivel de acceso **Todos los correos electrónicos**. 

### Cuenta y Contacto no se autocompleta
:::info Enlace de utilidad
[Help Salesforce - Cuenta y Contacto no se autocompletan desde un Email To Case](https://help.salesforce.com/s/articleView?id=000386528&type=1)
:::
Cuando un caso se genera desde el Email To Case, hay una automatización que nos ayuda completando tanto Cuenta como Contacto si coinciden con el
correo electrónico web, de lo contrario no lo autocompleta.

En caso de que sepamos que el correo electrónico es de un cliente nuestro y no se esté completando, hay 3 posibles razones por la que esté fallando:
* No coincide el correo electrónico con ningún contacto.
* El correo electrónico coincidió con más de un contacto.
* Email to Case busca en los campos de email custom y estándar de los contactos. Si hay múltiples resultados no hace la relación.


