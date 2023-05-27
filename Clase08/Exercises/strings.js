/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase). */

var ej2A = 'abcdefghij';

ej2A = ej2A.toUpperCase();

console.log(ej2A);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).
*/

var ej2B1 =  'abcdefghij';
var ej2B2 = ej2B1.substring(0, 5);
console.log(ej2B2);


/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).
*/

var ej2C1 = 'abcdefghij';
var ej2C2 = ej2C1.substring(7, 10);
console.log(ej2C2);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).
*/

var ej2D1 = 'abcDefgHIj';
var ej2D2 =    ej2D1.substring(0,1).toUpperCase();
var ej2D3 = ej2D1.substring(1,10).toLowerCase();

var ej2D4 = ej2D2 + ej2D3;

console.log(ej2D4);

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).
*/

var ej2E1 = 'abcD fgHIj';

var ej2E2 = ej2E1.indexOf(' ');
console.log(ej2E2);


/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).
*/

var ej2F1 = "envejezcas extrañezas";
var ej2FPosit = ej2F1.indexOf(" ");
var ej2F2 = ej2F1.substring(0, 1).toUpperCase()
var ej2F3 = ej2F1.substring(1, ej2FPosit).toLowerCase();
var ej2F4 = ej2F1.substring(ej2FPosit + 1, ej2FPosit +2).toUpperCase();
var ej2F5 = ej2F1.substring(ej2FPosit + 2).toLowerCase()

var ej2F6 = ej2F2 + ej2F3 + " " + ej2F4 + ej2F5;

console.log(ej2F6);







