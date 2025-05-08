/* for (let i = 1; 1 <= 10; 1++) {
    console.log(i)
} */
// Crear una pliacion que muestr los n terminos de la serie de los numeros pares

/* let n = parseInts(prompt("Coloca la longitud de tu serie"))
par = 0;
for (let i = 0; i < n; i++) {
    par = par + 2;
    console.log("n" + n, "= " + par)

} */
/* 
Crear una aplicacion que muestre los n terminos de la serie de los numeos primos
nota: un numero es primo si solo es divisible entre 1 y si mismo */

/* let n = parseInt(prompt("Coloca la longitud de tu serie"))
primo = 1;
for (let i = 0; i < n; i++) {
    primo++;
    if (primo % i === 0 && primo % primo === 0) {
        console.log(primo + ", ")
    }
} */

//crear la serie fibonacci
// 0,1,1,2,3,5,8
/* let n = parseInt(prompt("Coloca la longitud de tu serie"))
let serie = 0;
let serie2 = 1;
let suma = 0;
for (let numero = 0; numero < n; numero++) {

    console.log(suma)
    suma = serie + serie2;
    
} */
/* 
let estudiantes = {
    nombre: "kevin",
    edad: 32,
    notas: [32, 55, 100, 0]

}
estudiantes.notas[2]
console.log(estudiantes.notas[2]);

let participantes = [{
    nombre: "pedro",
    edad: 30,
    respuestas: [1, 2, 3, 4, 5,]
},
{
    nombre: "Juan",
    edad: 20,
    respuestas: [1, 2, 3, 4, 5,]
},
{
    nombre: "Carlos",
    edad: 18,
    respuestas: [1, 2, 3, 4, 5,]
},
{
    nombre: "Luis",
    edad: 45,
    respuestas: [1, 2, 3, 4, 5,]
},
]
 */
/* let estudiantes2 = [
    {
        nombre: "Cristian",
        lenguajes: ["HTML", "CSS", "JS"],

    },
    {
        nombre: "Milton",
        lenguajes: ["HTML", "CSS", "JS", "PYTHON", "JAVA", "C++"],

    },
    {
        nombre: "Ana",
        lenguajes: ["C#", "JAVA", "PYTHON"],

    },

]
//Quiero que impriman en consola 
// Nombre + los lenguajes que conoce este estudiante 
// Cristian conoce los lenguajes de: HTML, CSS , CSS

estudiantes2.forEach((element) => {

    console.log(element.nombre + " El lenguaje que sabe es: " + element.lenguajes)
    estudiantes2.lenguajes.forEach(lenguaje => {
        console.log(lenguaje);
    })
})
 */




//programa que pueda saber que profesor es el asignado de un estudiante x
/*ejemplo si x= tomas
el profesor es jorge

si x=milton
el profesor de diego*/

/* let profesores = [
    {
        nombre: "kevin",
        estudiantes: ["Gino", "ana", "cristian", "ricardo"],
    },
    {
        nombre: "Diego",
        estudiantes: ["milton", "kevin", "elias", "Luis"],
    },
    {
        nombre: "Jorge",
        estudiantes: ["tomas", "pedro"],
    },
];

function filtro(dato) {
    let info = prompt("Dame el nombre del estudiante")
    dato = info.toLowerCase();

    
}
filtro(); */

/* let numeros = [1, 2, 3, 4, 5, 6, 7]
let pares = numeros.map((numero) => {

    return numero * 2;
});
console.log(pares)

let superpares = numeros.filter((numero) => {
    return numero % 2 === 0;
})
// Crea un array nuevo de acuerdo con la condicion
let total = numeros.reduce((contador, numero) => contador + numero, 0)
// Nos va a devolver un dato primitivo
let resultados = numeros.find((numero) => numero > 5);
// Devuelve el primer valor que cumpla con la condicion */

/* Obtener un array con solo los nombres

Filtrar a los mayores de edad >=18

Encontrar a la primera perosna mayor de 25 años

Calculcar la edad total */

/* const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Marta", edad: 30 }
];

let arrayNombres = personas.map(nombre => nombre.nombre)
console.log(arrayNombres)
let filtro = personas.filter(persona => persona.edad >= 18)
console.log(filtro)
let persona25 = personas.find(persona => persona.edad === 25)
console.log(persona25)
let total = personas.reduce((suma, persona) => suma + persona.edad, 0)
console.log(total)
// let edadtotal = personas.reduce((contador, edad)) */

/* Cualidad para almacenar informacion en nuestros navegadores, aun que actualizemos la pagina.
solo se puede alamcenar strings
*/
// localStorage.setItem("nombre","Tomas")
/* console.log(localStorage.getItem("nombre"))
localStorage.setItem("notas","33"); */

// localStorage.setItem("evaluacion",70);
// console.log(typeof localStorage.getItem("evaluacion"));
// Todo
// localStorage.clear();
// Podemos vaciar el localstorage
/* 
let persona = {
    nombre: "kevin",

}
localStorage.setItem("persona", JSON.stringify(persona))
// set item para agregar valores a local storage. 1key y
let obj = JSON.parse(localStorage.getitem("persona"))
// getitem extraer el valor que tenga asociado
console.log(obj.nombre)

localStorage.removeItem("persona"); */
import { hola } from "./funciones.js"
console.log(hola("MIlton"))

import { hola, chau } from "./funciones.js"


