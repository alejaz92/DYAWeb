/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log). */

var ej3A = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Elemento 5: " + ej3A[4] + " Elemento 11: " + ej3A[10]); 

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

var ej3B = ej3A.sort();
console.log(ej3B);

/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */

ej3A.unshift("Principio");

ej3A.push("Fin");

console.log(ej3A);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */

ej3A.shift();

ej3A.pop();

console.log(ej3A);

/* Invertir el orden del array (utilizar reverse). */

ej3A.reverse();

console.log(ej3A);

/* Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join). */

var ej3F = ej3A.join(" - ");

console.log(ej3F);

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice). */

var ej3E1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Elemento 5: " + ej3A[4] + " Elemento 11: " + ej3A[10]); 

var ej3E2 = ej3E1.slice(4, 11);

console.log(ej3E2);