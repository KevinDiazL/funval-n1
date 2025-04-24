// function convert(minutos) {
//     return minutos * 60;
// }
// function triarea(base, altura) {
//     return base * altura / 2;
// }
// console.log(triarea(4, 6));
// function operacion(numero, numero2) {
//     let suma = numero + numero2;
//     if (suma > 100) {
//         console.log("Tu suma es mayor a cien");
//     }
//     else {
//         console.log("Tu suma es menor a cien");
//     }
// }

// console.log()
// let numero = [1, 2, 3, 4];
// let numero2 = [];
// for (let index = 0; index < numero.length; index++) {
//     numero2[index] = numero[index] * 2;
// }
// console.log(numero2);

// let supernumeros = [1, 2, 3, 4, 5]
// for (let index = 0; index < supernumeros.length; index++) {
//     supernumeros[index] = supernumeros[index] * supernumeros.length[index];
// }
// console.log(supernumeros);

// let matriz = [
//     [1, 2, 3],
//     [3, 4, 3],
//     [2, 4, 5],
// ]

// let resultado = 0;
// for (let index = 0; index < matriz.length; index++) {
//     resultado = resultado + matriz[index][index];
// }
// let numeros = [2, 4, 8, 10];
// let nuevoArray2 = numeros.map((numeros) => numeros / 2);
// console.log(nuevoArray2);
// let numeros = [3, 11, 15, 4, 2, 17, 8, 10, 22, 7];

// let nuevoArray3 = numeros.filter((numeros) => numeros % 2 === 0);
// console.log(nuevoArray3);

// let apellidos = ["perez", "ramirez", "fernandez", "choque"];
// let valor23 = apellidos.includes("mamani");
// console.log(valor23);

let estudiante = {
    nombre: "Elias",
    edad: 18,
    nacionalidad: "Paraguay",
};
console.log(estudiante.nombre);
console.log(estudiante.edad);
estudiante.edad = 19;
estudiante.estadoCivil = "Soltero";
console.log(estudiante)
delete estudiante.edad; //Eliminamos la propiedad del objeto
console.log(estudiante);
