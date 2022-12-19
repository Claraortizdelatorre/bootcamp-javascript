### Enigma

Vamos a implementar un encriptador / desencriptador de mensajes utilizando esta técnica.

## Interfaz
Utiliza dos elementos textarea, uno que contendrá el mensaje en claro y otro con el mensaje encriptado.
Añade también 2 botones, uno para encriptar y otro para desencriptar.
Un ejemplo sencillo podría ser el siguiente:


## Algoritmo
El algoritmo de encriptación es sencillo. La transformación que vamos a aplicar a cada letra va a venir dada por:
```
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
```
De modo que:

- 'a' se encriptará como 'q'
- 'b' se encriptará como 'w'
- 'c' se encriptará como ','
y así sucesivamente

Implementa también la desencriptación, que es exactamente igual pero aplicando la transformación al revés:

- 'q' se desencriptará como 'a'
- 'w' se desencriptará como 'b'
etc

De esta forma, cuando el usuario introduzca un texto en claro y haga click en 'Encrypt', debería encriptarse el mensaje y mostrarse en el textarea inferior. Si por contra introduce un mensaje encriptado y presiona 'Decrypt', deberá desencriptarse el mensaje y mostrarse en el textarea superior.

## A prueba
¿Podrías descifrar el siguiente mensaje?

```
b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)
```

## Opcional
Simplifica el algoritmo anterior gracias a la siguiente información:

Los strings son iterables y se comportan de forma similar a un array. Disponen de métodos que nos ayudan a buscar elementos. Uno de estos métodos que puede resultaros de gran utilidad es indexOf(). Este método devuelve el primer índice (en base 0) encontrado para un carácter dado, o lo que es lo mismo, la posición de la primera ocurrencia de dicho carácter. Es decir, este método hace una iteración por el string buscando el carácter que habéis proporcionado, y en cuanto lo encuentra devuelve la posición de dicho carácter dentro del array. Ejemplo:

```
var myString = "casa";
myString.indexOf("a"); // 1
```
