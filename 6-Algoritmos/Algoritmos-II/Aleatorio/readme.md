
## Generador Aleatorio
Vamos a construir un generador aleatorio que permita escoger, de forma aleatoria, una cantidad determinada de números de entre un mínimo y un máximo. Para entenderlo mejor, os daremos la firma que debe tener la función:

```
var randomPick = (n, min, max) => {
  ...
}
```

De esta forma, para escoger 10 números aleatorios entre el 1 y el 100, usaremos la función anterior del siguiente modo:
```
randomPick(10, 1, 100);
```
y nos devolverá un array con dichos números, por ejemplo:

[24, 83, 2, 94, 84, 38, 23, 69, 16, 89];
IMPORTANTE: No deben repetirse los numeros escogidos aleatoriamente.

Este tipo de generador flexible es muy útil para una gran diversidad de problemas, por ejemplo:
```
randomPick(6, 1, 49); // Apuesta automática de la primitiva
randomPick(15, 1, 15); // Escoge combinación de bolas de billar
randomPick(1, 1, 6); // Tirada aleatoria de un dado
```
Para este ejercicio no se necesita construir una UI, simplemente muestra el resultado por consola.