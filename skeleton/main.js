let estudiantes = [
    {
        nombre: "kevin",
        edad: 28,
        pais: "Mexico"
    },
    {
        nombre: "Juan",
        edad: 31,
        pais: "Peru"
    },
    {
        nombre: "pedrito",
        edad: 21,
        pais: "Chile"
    },
    {
        nombre: "joao",
        edad: 23,
        pais: "brasil"
    },
]

let contenedor = document.querySelector("#contenedor-card")
let contenedor2 = document.querySelector("#container-card")

// function traerSkeleton() {
//     contenedor.innerHTML = "";
//     for (let i = 0; i < estudiantes.length; i++) {
//         contenedor.innerHTML += `
// <div role="status" class="max-w-sm animate-pulse">
//     <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
//     <span class="sr-only">Loading...</span>
// </div
// `
//     }
// }
// traerSkeleton();
// function traerDatos() {
//     contenedor.innerHTML = "";
//     estudiantes.forEach((estudiante) => {
//         contenedor.innerHTML += `
// <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

// <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
// <p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.nombre}</p>
// </a>
// `
//     })


// }

// setTimeout(() => {
//     traerDatos();

// }, 5000);


function traerSpiner() {

    contenedor2.innerHTML = "";
    for (let i = 0; i < estudiantes.length; i++) {
        contenedor2.innerHTML = ``

    }


}
traerSpiner()

setTimeout(() => {
    traer
}, 3000);