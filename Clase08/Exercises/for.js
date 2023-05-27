/* Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las
palabras. */

arr1 = ["alejandro", "Marcos", "maria", "Belen", "ruben"];

console.log("Ejercicio 5 A: ");

for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

/* Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada. */

console.log("Ejercicio 5 B: ");

for (var i = 0; i < arr1.length; i++) {

    var palabra = arr1[i].toString();

   if (palabra.substring(0, 1) != palabra.substring(0, 1).toUpperCase()) {
        var palabra2 = palabra.substring(0, 1).toUpperCase() + palabra.substring(1);
        console.log("Palabra modificada: " + palabra2); 
      
   }  

}

/* Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

var sentence = "";

for (var i = 0; i < arr1.length; i++) {
    sentence = sentence + " " + arr1[i];
}
console.log("Ejercicio 5 C: ");
console.log(sentence);

/* Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al número
9. Mostrar por la consola del navegador el array final (utilizar console.log). */

var arrD = [];

for  (var i = 0; i <10; i++) {
    arrD.push(i);

}
console.log("Ejercicio 5 D: ");
console.log(arrD);