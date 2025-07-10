---
id: salesforce-flow
title: Salesforce Flow
sidebar_position: 10
---

Para dominar la automatización, es crucial entender el vocabulario y la filosofía detrás de la herramienta más potente de Salesforce para administradores: Flow.

## Definiendo el Universo Flow
Es común escuchar varios términos relacionados. Aclarémoslos:

- **Salesforce Flow**: Es el nombre que engloba todo el conjunto de herramientas que Salesforce ofrece para crear automatizaciones con clics en lugar de código.
- **Flujo (Flow)**: Es una automatización específica que construyes. Visualmente se parece a un diagrama de flujo, pero la gran diferencia es que un flujo no solo muestra el proceso, sino que lo ejecuta.
- **Flow Builder**: Es la herramienta de diseño, el lienzo donde haces clic y arrastras elementos para construir un flujo.

En resumen: Usas Flow Builder para crear un Flujo como parte de la suite de Salesforce Flow.

## ¿Qué es un Flujo y Qué Puede Hacer?
Un flujo es la herramienta más cercana a la "codificación visual". Aunque se crea con clics, requiere aplicar una lógica similar a la de la programación para tomar decisiones y realizar acciones.

Los flujos son increíblemente versátiles. Algunos ejemplos de lo que pueden hacer son:

- Guiar a los usuarios a través de un proceso paso a paso (como una solicitud).
- Actualizar registros relacionados automáticamente (ej: al actualizar una cuenta, actualizar todos sus contactos).
- Crear registros de forma inteligente (ej: crear una oportunidad de renovación cuando se cierra una venta).
- Reasignar trabajo cuando se hace clic en un botón.
- Enviar notificaciones o mensajes a sistemas externos.
- Ejecutarse en un horario programado para realizar tareas de mantenimiento de datos.

## Decisión Clave: Flujo vs. Código (Apex)
Como administrador, una de las decisiones más importantes es cuándo usar una herramienta declarativa como Flow y cuándo se necesita una solución de código como Apex.

### La Regla de Oro
Primero, intenta resolverlo con herramientas declarativas (Flujos); recurre al código (Apex) solo cuando sea estrictamente necesario.

¿Por qué? Las soluciones declarativas como los flujos son, por lo general, más fáciles, rápidas y baratas de crear y mantener. No requieren de un desarrollador especializado.

### ¿Cuándo se necesita código?
Algunos procesos tienen requisitos que los flujos no pueden cumplir de forma nativa (ej: generar un archivo PDF). Sin embargo, incluso en estos casos, la mejor solución suele ser un enfoque híbrido:

- Un desarrollador crea un componente de código reutilizable (una "acción de Apex").
- El administrador llama a esa acción desde un flujo.

Esto te da lo mejor de ambos mundos: la potencia del código controlada por la flexibilidad de un flujo.

### No Temas Equivocarte
Es una parte normal del aprendizaje probar una solución con un flujo, descubrir una limitación y luego optar por el código. La experimentación es clave para encontrar el mejor método.

## Ejemplo Práctico: Creación Inteligente de Contactos
Para entender cómo se aplica esta lógica, veamos un caso de uso real.

- **El Problema**: Los comerciales de una empresa crean contactos duplicados e incompletos porque no buscan antes de crear y se saltan campos.
- **El Requisito**:
    - Pedir al usuario el Nombre, Apellido y Cuenta en un formulario.  
    - Buscar en Salesforce si ya existe un contacto que coincida.
    - Decidir: Si existe, actualizarlo. Si no existe, crearlo.
    - Confirmar la operación con un mensaje al usuario y una publicación en Chatter.
- **La Solución con Flujo**:
    - Una "Acción Rápida" no funciona porque no puede realizar búsquedas ni tomar decisiones lógicas.
    - Un "Componente Lightning" funcionaría, pero requiere código.
    - Un Flujo de Pantalla (Screen Flow) es la solución perfecta porque puede:
        - Presentar un formulario para capturar los datos.
        - Usar lógica para buscar registros.
        - Tomar decisiones basadas en si se encontró algo o no.
        - Ejecutar acciones como crear/actualizar registros y publicar en Chatter.

Este ejemplo demuestra por qué Flow es la herramienta preferida del administrador: resuelve procesos complejos de forma declarativa, dándole el control total sobre la lógica del negocio.

## El Rol de las Variables en Flows
Las variables son uno de los componentes más esenciales para construir automatizaciones en Flow. Aunque el término pueda sonar técnico, su concepto es muy simple.

### ¿Qué es una Variable? (Y por qué no debes temerle)
En el contexto de un flujo, una variable es simplemente un contenedor que guarda información de forma temporal mientras el flujo se está ejecutando.

Piensa en ella como una caja vacía donde puedes guardar un dato, usarlo, modificarlo y luego reemplazarlo por otro. Su valor puede cambiar (o "variar") a lo largo del proceso, y de ahí viene su nombre.

Son indispensables para casi cualquier flujo. Se usan para:
- Guardar el ID del registro donde se inició el flujo.
- Almacenar un valor numérico que cambia según las decisiones del usuario.
- Guardar el resultado de combinar dos textos.
- Recuperar valores de un registro para usarlos en cálculos o mostrarlos en pantalla.
- Contar cuántas veces se ha ejecutado un bucle (loop).

### Tipos de Datos de Variables (¿Qué guardan?)
Al igual que un campo personalizado, cuando creas una variable debes definir qué tipo de dato puede almacenar. Los tipos más comunes son:

- **Texto (Text)**: 📝 Una cadena de letras, números y caracteres. También se usa para guardar IDs de Salesforce.
- **Número / Moneda (Number / Currency)**: 🔢 Un valor numérico. No se deben incluir símbolos de moneda.
- **Booleano (Boolean)**: ✅ Un valor que solo puede ser verdadero o falso. Importante: Debes usar las constantes globales ```{!GlobalConstant.True}``` y ```{!GlobalConstant.False}``` para que el flujo las interprete correctamente.
- **Fecha / Fecha y Hora (Date / Date/Time)**: 🗓️ Un valor con formato de fecha o fecha y hora.
- **Registro (Record)**: 📄 Un tipo de "super-variable" especial que puede contener todos los valores de un único registro de Salesforce a la vez (ej: todos los datos de una Oportunidad).

¿Por qué es importante el tipo de dato? Porque determina qué puedes hacer con la información. Por ejemplo, no puedes realizar cálculos matemáticos con una variable de tipo Texto, ni puedes sumarle un día a una fecha si está guardada como Texto.

### Ciclo de Vida de una Variable
Este es un punto crucial: las variables se reinician a su valor por defecto cada vez que un flujo se ejecuta. La información guardada en una variable durante una ejecución no se traslada a la siguiente ejecución ni se comparte entre usuarios. Cada vez que un usuario inicia el flujo, las "cajas" (variables) empiezan vacías (o con el valor predeterminado que hayas definido).

### Recursos Similares a las Variables
Además de las variables, existen otros recursos para almacenar información:
- **Constantes (Constants)**: Son como variables pero con un valor fijo que no se puede modificar durante la ejecución del flujo. Por ejemplo, para guardar el valor de PI (3.14159).
- **Fórmulas (Formulas)**: Son idénticas a los campos de fórmula de Salesforce. Calculan un valor dinámicamente cada vez que se usan, basándose en otras variables o datos del flujo.
- **Plantillas de Texto (Text Templates)**: Se usan para almacenar bloques de texto largos o con formato enriquecido (negrita, colores, listas, etc.). Son ideales para guardar el cuerpo de un correo electrónico o mensajes complejos para reutilizarlos.