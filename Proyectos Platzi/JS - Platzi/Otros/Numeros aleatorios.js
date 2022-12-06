    // TABLA DE 3 SIMPLES AUTOMATICA

/* alert("En el primer campo completa con el valor total y en el segun campo completa con el porcentaje colocando el numero con decimal de punto")

let valor = parseInt(prompt("valor total"))
let porcentaje = parseFloat(prompt("porcentaje"))

document.write("</br> El valor de tu resultado es " + valor * porcentaje) */

    // NUMERO RANDOM DE 0.00001 A 0.99999

// La funcion solo sirve si el valor minimo es 0 cuando es mayor que eso rompe

/* let w = Math.random();
let e = parseInt(w * 39+1);

document.write(e); */

    // FUNCION REGULAR PARA NUMEROS ALEATORIOS

/* let max = 20;
let min = 10;
let cienceBitch = Math.floor(Math.random * (max - min + 1)) + min;

document.write(cienceBitch); */

// 20-10+1 = 11: esto es igual al numero de resultados posibles. Por eso se le suma +1
// 11 * N = X: el rango de N es de 0.01 a 0.99 (ambos periodicos)
// X+1 = R_decimal
// Math.floor > R_decimal en R_enteroHaciaAbajo

    // FUNCION DE DADOS

let = document.getElementById ("d4")
let = document.getElementById ("d6")
let = document.getElementById ("d8")
let = document.getElementById ("d10")
let = document.getElementById ("d12")
let = document.getElementById ("d20")
let = document.getElementById ("d100")

let d4 = aleatorio (1,4);
let d6 = aleatorio (1,6);
let d8 = aleatorio (1,8);
let d10 = aleatorio (1,10);
let d12 = aleatorio (1,12);
let d20 = aleatorio (1,20);
let d100 = aleatorio (1,100);

document.write("1d4: " + d4 + "<br>") ;
document.write("1d6: " + d6 + "<br>");
document.write("1d8: " + d8 + "<br>");
document.write("1d10: " + d10 + "<br>");
document.write("1d12: " + d12 + "<br>");
document.write("1d20: " + d20 + "<br>");

function aleatorio(min, max) {

    let resultado;
    
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    return resultado;  // la palabra reservada return nos devuelve el resultado de una funcion matematica delcarada anteriormente
}