/* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador. */

function suma(a, b) {
    return a + b;
}

var c = suma(1, 4);
console.log("Ejercicio 6 A: ");
console.log(c);


/* A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado. */

console.log("Ejercicio 6 B: ");
function suma2(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Uno de los operadores no es un numero");
        return "NaN";
    }
    else {
        return a + b;
    }
    
}

var c = suma2(1, "algo");

console.log(c);

/* Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero. */


console.log("Ejercicio 6 C: ");

function validateInteger(a) {
    if (Number.isInteger(a)) {
        return "Es entero";
    }
    else {
        return "No es entero"
    }
}

var ejC = validateInteger(4.25);
console.log(ejC);


/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado). */

console.log("Ejercicio 6 D: ");
function suma3(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Uno de los operadores no es un numero");
        return "NaN";
    }
    else {
            var checkEntero = validateInteger(a + b);


            if (checkEntero === "No es entero") {
                console.log("Los numeros no son enteros, el resultado sera redondeado")
                
            }
           

        return Math.round(a + b);
    }
    
}

var c = suma3(1, 8.41);

console.log(c);

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual. */