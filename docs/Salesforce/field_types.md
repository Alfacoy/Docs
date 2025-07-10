---
id: tipos-de-datos
title: Tipos de datos
sidebar_position: 11
---

Cuando los campos estándar de Salesforce no son suficientes para almacenar toda la información que necesitas, puedes crear campos personalizados. El primer y más importante paso es elegir el tipo de dato correcto. A continuación, se describen los tipos de campos agrupados por su función.

## 📝 Campos de Texto
Ideales para almacenar cualquier combinación de letras, números o símbolos.
- **Text**: Un campo de texto simple de una sola línea. Límite de hasta 255 caracteres.
- **Text Area**: Permite ingresar hasta 255 caracteres en múltiples líneas.
- **Text Area (Long)**: Para textos extensos, permite hasta 131,072 caracteres. El límite de caracteres visibles en informes es menor.
- **Text Area (Rich)**: Similar al anterior, pero incluye una barra de herramientas para dar formato al texto (negrita, itálica, listas, etc.), agregar imágenes y enlaces.
- **Text (Encrypted)**: Un campo de texto de hasta 175 caracteres que se almacena de forma encriptada. Requiere "Classic Encryption". Para una encriptación más moderna (Shield), se usa un campo de Texto normal con la plataforma de encriptación.

## 🔢 Campos Numéricos y de Moneda
Para datos cuantitativos, cálculos y valores financieros.
- **Number**: Para cualquier número real. Los ceros a la izquierda se eliminan. Permite definir la cantidad de decimales.
- **Currency**: Para valores monetarios. Formatea automáticamente el número como moneda y permite definir decimales. El redondeo varía si el campo acepta decimales (redondeo estándar) o no (truncamiento).
- **Percent**: Permite ingresar un número como un decimal (ej: 0.25) y lo muestra automáticamente como un porcentaje (ej: 25%).
- **Auto Number**: Asigna un número único y secuencial a cada nuevo registro. Puedes definir un prefijo o sufijo (ej: FAC-0001, FAC-0002).

## ✅ Campos de Selección (Listas)
Perfectos para estandarizar la entrada de datos, permitiendo a los usuarios elegir de una lista de opciones.

- **Checkbox**: Una casilla de verificación que representa un valor verdadero (marcado) o falso (desmarcado).
- **Picklist**: Una lista desplegable donde el usuario puede seleccionar un solo valor de una lista que tú defines.
- **Picklist (Multi-select)**: Una lista que permite al usuario seleccionar múltiples valores a la vez. Los valores seleccionados se guardan separados por punto y coma.

## 🗓️ Campos de Fecha y Hora
Para registrar información temporal.

- **Date**: Permite al usuario ingresar una fecha o seleccionarla de un calendario emergente.
- **Date/Time**: Permite ingresar una fecha y una hora del día.
- **Time**: Permite ingresar una hora del día específica, incluyendo horas, minutos, segundos y milisegundos.

## 🔗 Campos de Relación
Usados para conectar registros entre sí. (Consulta la documentación anterior para ver las consideraciones detalladas de cada uno).

- **Lookup Relationship**: Crea un vínculo flexible entre dos registros.
- **Master-Detail Relationship**: Crea un vínculo fuerte donde el registro maestro controla al detalle.
- **External Lookup Relationship**: Vincula un objeto de Salesforce (hijo) a un objeto externo (padre).
- **Indirect Lookup Relationship**: Vincula un objeto externo (hijo) a un objeto de Salesforce (padre).
- **Hierarchical Relationship**: Un tipo especial de Lookup exclusivo para el objeto Usuario, usado para crear jerarquías (ej: gerente y subordinado).

## 🧮 Campos Calculados y de Resumen
Estos campos calculan su valor automáticamente y no son editables por los usuarios.

- **Formula**: Calcula un valor dinámicamente basándose en otros campos del mismo registro o de registros relacionados. No se almacena en la base de datos; se calcula en tiempo real.
- **Roll-Up Summary:** Realiza un cálculo sobre un conjunto de registros de detalle en una relación Master-Detail. Puede contar el número de registros (COUNT) o calcular la SUM, MIN o MAX de un campo numérico en los registros hijos.

## 🌐 Campos Especializados y de Datos Específicos
Para tipos de datos con formatos particulares.

- **Email**: Para direcciones de correo electrónico (hasta 80 caracteres). Valida que el formato sea correcto.
- **Phone**: Para números de teléfono (hasta 40 caracteres). Se formatea automáticamente y puede integrarse con funciones de CTI (click-to-dial).
- **URL**: Para direcciones de sitios web (hasta 255 caracteres). Se muestra como un enlace en el que se puede hacer clic.
- **Address**: Un campo compuesto que incluye Calle, Ciudad, Estado/Provincia, Código Postal y País.
- **Geolocation**: Un campo compuesto para especificar una ubicación por su latitud y longitud.