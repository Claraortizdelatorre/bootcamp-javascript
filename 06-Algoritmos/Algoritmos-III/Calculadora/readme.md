### Calculadora de cambio óptimo de billetes y monedas
Vamos a implementar una calculadora de cambio óptimo en base a un importe de compra y la cantidad entregada por el cliente.

## Interfaz
Debemos permitir que el usuario introduzca una cantidad con el importe total de la compra y una cantidad con el dinero que nos entregan.

- Input numérico para el importe total.
- Input numérico para la cantidad que se entrega.
- Botón de calcular.
Al presionar el botón calcular, un algoritmo debe procesar los cálculos necesarios para que devuelva un resultado con el número de billetes y monedas necesarias para hacer la devolución.

## Algoritmo
Dentro de nuestra tienda, podremos dar cambio de billetes de 5 €, 10 €, 20 €, 50 €, 100 € y 200 € (no daremos cambio de 500 €). Asímismo, tendremos monedas de 1, 2, 5, 10, 20 y 50 céntimos; y 1 y 2 euros.

Pensemos cómo haríamos si estuviéramos a cargo de la caja de nuestra tienda. Si el importe de la compra fuese 152 euros y el cliente nos pagase con un billete de 200 euros. ¿Qué deberíamos hacer?

- Primero calculamos la diferencia para saber cuánto debemos devolver: 48 euros.
- Seguidamente, intentaríamos dar cambio con billetes de 200 euros: importe devolución / 200 = 0.24.
- Vemos que NO podemos dar billetes de 200 euros (parte entera de 0.24 igual a 0).
- Lo intentamos con el siguiente billete, 100 euros. importe devolución / 100 = 0.48.
- Vemos que NO podemos dar billetes de 100 euros (parte entera de 0.48 igual a 0).
- Seguimos intentándolo con el resto de billetes, repitiendo los pasos hasta que damos con el correcto, 20 euros.
- Calculamos el cambio con billetes de 20 euros: importe devolución / 20 = 2.4.
- Vemos que podemos dar 2 billetes de 20 euros, así que lo restamos del importe de la devolución importe devolución = importe devolución - 2 * 20.
- Tenemos como importe actualizado 8 euros.
- Repetimos los pasos con el resto de billetes y monedas.
  
Al final del algoritmo debe quedarnos la cantidad de billetes y monedas de cada tipo que debemos devolver:

- 2 billetes de 20 euros.
- 1 billete de 5 euros.
- 1 moneda de 2 euros.
- 1 moneda de 1 euro.
  
## Challenge
Vamos a complicar nuestro problema. Ahora debemos hacer el cálculo según los billetes y monedas que tengamos en nuestra caja.

Para ello necesitaremos de alguna forma, indicar qué cantidad de billetes y/o moneda tenemos disponibles.