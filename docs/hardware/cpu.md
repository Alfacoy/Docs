---
id: cpu
title: CPU básico 
sidebar_position: 1
---

# CPU

Es el cerebro de nuestra computadora el cual esta compuesto por un circuito integrado encapsulado en un chip de silicio el cual lo componen millones de transistores.

:::info Más información
📖 **¿Qué es un transistor?**
Es un dispositivo que regula el flujo de corriente o de tensión actuando como un interruptor o amplificador para señales electrónicas.
:::


Su función es la de procesar datos, coordina y controla el funcionamiento de los dispositivos y realiza operaciones lógicas y matemáticas. Se los suele encontrar colocados en la **motherboard** sobre un elemento llamado **"zócalo"**.

### Memoria caché

Son memorias más pequeñas que la **memoria RAM**, pero mucho más rápidas. Cumplen la función de almacenar las instrucciones que se van a procesar o las últimas procesadas. A mayor memoria cache, mayor velocidad de transacciones que la CPU pueda realizar.

### Zócalo del CPU

Es un sistema electromecánico que se encarga de albergar las conexiones eléctricas para conectar el microprocesador a la placa base.
Es importante saber diferenciar el tipo de zócalo que tiene nuestro procesador ya que podría ser incompatible con nuestro modelo de motherboard.
El sistema de conexión actual se denomina **ZIF** (Zero Insertion Force) ya que no es necesario hacer fuerza para instalar o desinstalar la CPU de su zócalo. De estar realizando fuerza, es muy probable que algo mal estemos haciendo.

Según el fabricante (**AMD** o **INTEL**), tendrá su propio zócalo para la CPU, los cuales no serán compatibles entre ellos.

Hay dos configuraciones para los zócalos, PGA y LGA.

- **PGA**: Pin Grid Array (matriz de rejillas de pines), su conexión se realiza mediante una matriz de pines instalados en la CPU.  Estos deben insertarse en los agujeros del zócalo de la placa base.
- **LGA**: Land Grid Array (matriz de contacto en rejilla), en este caso, se basa en una matriz de pines instalados en el zócalo que hacen contacto con la superficie conductora del procesador.