/* FUNCIONES */

//¿Qué son las funciones y para que las utilizamos?

//Es un conjunto de instrucciones que se agrupan para realizar una tarea concreta.

//CÓMO TRABAJO CON FUNCIONES: 

//1) Declarar funciones:
holaMundo();

function holaMundo() {
    //Instrucciones.
    alert("Hola Mundo");
}

//2) Llamar a la función (INVOCAR!!!!!!)

//Tenemos funciones que ejecutan acción.
//Y funciones que además de ejecutar una acción me retornan un dato.

function retornarElNum3() {
    return 3;
}

let numTres = retornarElNum3();
console.log(numTres);

//Ejemplo. Funcion que Suma.

function sumaTradicional(valorA, valorB) {
    let resultado = valorA + valorB;
    return resultado;
}

let numeroUno = 200;
let numeroDos = 300;

// let resultadoSuma = sumaTradicional(numeroUno, numeroDos);
// console.log(resultadoSuma);

console.log(sumaTradicional(10,10));

//Ejemplo con prompt:

let nombreAlumno = prompt("Ingrese el nombre del alumno: ");

function saludarAlumno(nombreAlumno) {
    alert("Hola Alumno " + nombreAlumno);
}

saludarAlumno(nombreAlumno);

/////// SCOPE O ALCANCE DE LAS VARIABLES //////

//El scope o ambito de una variable es la zona del programa en la cual se define el contexto al que pertence
//la misma dentro del algoritmo.

//Js definde dos ambitos para las variables: global o local.

//Ejemplo: variable global:

let global = 10;

function ejemploA () {
    console.log(global);
}

ejemploA();

//Ejemplo variable local.

function ejemploB() {
    let resultadoEjemploB = 10 + 10;
}

// console.log(resultadoEjemploB);


/* FUNCION ANONIMA */

//Es una función que se define sin nombre y se utiliza para ser pasado por párametro o asignada a una variable.

let sumaAnonima = function (a,b) {return a + b};

console.log(sumaAnonima(1000, 1000));

let restaAnonima = function (a,b) {return a - b};

console.log(restaAnonima(10000, sumaAnonima(1000,1000)));

/* FUNCIONES FLECHA */

//Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada.

let division = (a,b) => {
    return a / b;
}

console.log("División con funcion flecha: ");
console.log(division(100,10));

console.log("Multiplicación con función flecha: ");


let multiplicacion = (a,b) => a * b;
//Le saco el return y le saco los parentesis
console.log(multiplicacion(50,50));

//Otro ejemplo de función flecha con único parametro y retorno

let nombre = a => console.log("Hola " + a);

nombre("Martin");