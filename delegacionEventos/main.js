/* let nombres = ["kevin", "pedro", "Juan"];
let listado = document.querySelector("#lista");
listado.innerHTML = "";

nombres.forEach((item) => {
    listado.innerHTML += `<ul id="lista">
        <li>
            ${item}
            <button class="aprobado">x</button>
        </li>
    </ul>`
})

listado.addEventListener("click", function (evento) {
    console.log(evento.target)
    // donde hizo cancelIdleCallback, cual etiqueta
    if (evento.target.classList.contains("aprobado")) {
        let itemListado = evento.target.closest("li");
        // es flexible busca por calses dientificadore y etiqetas
        console.log(itemListado)
        itemListado.innerHTML = "Estudiante aprovado";
    }

    // closes busca al padre inmediato.hace busqueda atraves de las clases y de los identificadores
    // Contains nos va a deolver un dato bolleano


}) */

/* let estudiantes = [
    {
        name: "Cristian",
        cel: 77207634,
        pais: "Bolivia",
    },
    {
        name: "Tomas",
        cel: 271236323,
        pais: "Argentina",
    },
    {
        name: "Gino",
        cel: 3220762,
        pais: "Chile",
    },
    {
        name: "Ana",
        cel: 98762235,
        pais: "Argentina",
    },
    {
        name: "Kevin",
        cel: 86243207634,
        pais: "Mexico",
    },
    {
        name: "Milton",
        cel: 89712350,
        pais: "Uruguay",
    },
    {
        name: "Ricardo",
        cel: 123987523,
        pais: "Mexico",
    },
    {
        name: "Rodrigo",
        cel: 77207634,
        pais: "Narnia",
    },
];

let listado2 = document.querySelector("tbody");
listado2.innerHTML = "";
estudiantes.forEach(dato => {
    listado2.innerHTML += `<tr><td>${dato.name}</td>
                <td>${dato.cel}</td>
                <td>${dato.pais}</td>
                <td><button class="deleted">Eliminar</button></td></tr>
    `
})
listado2.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("deleted")) {
        let itemListado = evento.target.closest("tr");
        itemListado.innerHTML = "";
    }

})

let nombre = "kevin"
let edad = 28;
let pais = "Bolivia";
console.log("hola mi bombre es :${ nombre }")
console.log("hola mi bombre es :" + nombre)

 */
// desestructurar arrays
/* let edades = [29, 23, 23, 23, 23, 31, 12];
let [primero, , tercero, cuarto, quinto, sexto, septimo, octavo = 0] = edades;
// no podemos crear una variable que no eexita en la posicion del array
console.log(primero)
// desestructuracion de onjetos
let persona = {
    nombre: "Tomas",
    edad: 20,
    pais: "Argentina",

};
let { edad, nombre, pais, correo = "tomas@gmia.com", nombre: name } = persona;
// los nombres de las variables tiene que ser exactamente igual
// nombre esta siendo subtituido por name
let numeros = [1, 2, 3, 4, 5, 6, 7];
let numeritos = [11, 22, 33, 44, 55, 66, 77];
// crear nuesvos arrays apartir del que ya existe sin modificarlo
let resultado = [...numeros, 322, 777...numeritos]
// PROPAGACION DE OBJETOS */


/* let ESTUDIANTE = {
    nombre = "kevin",
    edad: 22,
};
let superestudiante = {
    nombre: "Ricardo",
    pais: "Mexico",
    correo: "ricard@gmail.com",
}
// si la llave es repetido se toma la del ultimo objeto. Podemos agrwgar llaves de forma manual
let fusion = {
    ...ESTUDIANTE,
    ...superestudiante,
    correo: "ricardo322@gmail.com"
} */
// No pueden cambiar el array, tiene que ser en un completamente diferente
/* filtrar a todos los usuarios de tipo admin
A cada objeto le aregen una llave que se va a llamar correo
Mostrar del primer elemento las llaves correo y nombre usando desestructuracoin de 
funcion que reciba el array usuarios  */

const usuarios = [
    { id: 1, nombre: "Ana", roles: ["admin"] },
    { id: 2, nombre: "Gino", roles: ["user"] },
    { id: 3, nombre: "Cristian", roles: ["admin", "user"] },
];

let filtro = usuarios.filter(dato => dato.roles === "admin");
console.log(filtro);
let correo = ["ana123@gmail.com", "Gino.23@gmail.com", "Cristian@gmail.com"];
let obj = {
    ...usuarios, correos: [],
};


