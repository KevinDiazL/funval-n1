// let persona = {
//     nombre: "Diego",
//     edad: 27,
//     estudiante: true,
//     cursos: [
//         { nCurso: "Math", notas: [12, 23, 34, 25] }
//         , { nCursos: "English", notas: [12, 23, 34] }
//         , { nCursos: "Office", notas: [12, 23, 34] }],
// };

// for (let j = 0; j < persona.cursos.length; j++) {

//     let suma = 0;
// console.log(persona.cursos[0].notas.length);
// for (let i = 0; i < persona.cursos[0].notas.length; i++) {
//     console.log(persona.cursos[0].notas[i]);
//     // sumas += 
//     suma = suma + persona.cursos[0].notas[i];
// }
// console.log("El promedio es " + suma / persona.cursos[0].notas.length)
// }


let palabras = ["hola", "bye", "marco", "polo", "escuela"]
let mayuscula = palabras.map(x => x.toUpperCase())
console.log(mayuscula);

let objs = [
    { nombre: "Daniel", edad: 24 },
    { nombre: "Miguel", edad: 22 },
    { nombre: "Gustavo", edad: 23 },
    { nombre: "Domingo", edad: 20 },
];
let edades = objs.map(dato => dato.edad);
console.log(edades);

let objs2 = [
    { nombre: "Daniel", puntos: 74 },
    { nombre: "Miguel", puntos: 22 },
    { nombre: "Gustavo", puntos: 23 },
    { nombre: "Domingo", puntos: 80 },
];
let aumento = objs2.map(function (x) {
    if (x.puntos > 50) {
        return x.puntos + 10;
    }
    else {
        return x.puntos;
    }
})
console.log(aumento);

let elemento1 = document.querySelector("#lista1")