---
id: oops
title: OOPS
position: 1
---

OOPS (**O**bject **O**riented **P**rogramming **S**ystem)

Los objetos representan un objeto de la vida real.
:::note
Revisar que esto sea así.
:::


Los objetos tienen diferentes atributos, como por ejemplo, una edad, un nombre, una fecha de cumpleaños, etc. Esto se lo conoce como propiedades.

Junto con las propiedades, un objeto tiene diferentes comportamientos, que define lo que este puede hacer y que no.

Class
Properties
Behaviour

### Encapsulación
Consiste en agrupar su código

### Abstracción
Se trata de ocultar el código

Palabras clave 
* public
* private
* global



### Herencia
Se trata de diseñar su código.

#### Interface
Las interfaces definen los métodos
```java
public interface Shape {
    Double getArea();
    Double getPerimeter();
}
```

#### Implements
```java
public class Rectangle implements Shape {
    private Double width;
    private Double height;

    public Double getArea(){
        return width * height;
    };
    public Double getPerimeter() {
        return 2*(width+height);
    };
}
```

### Polimorfismo
Se trata de dar multiples definiciones. Que pueda usarse para varias cosas relacionadas. Por ejemplo apagar el celular, prenderlo, encender y apagar su pantalla. 



### Hello World
```
public class HelloWorld {
    String greeting = 'Hello World';
    
    public void printGreeting() {
        System.debug(this.greeting);
    }
}
```
