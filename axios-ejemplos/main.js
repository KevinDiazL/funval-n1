/* const axios = require(`axios`);

axios("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => console.log(respuesta))
 */

/* const { default: axios } = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => console.log(respuesta.data))
    .catch((error) => console.log(error)) */
//con axios no es necesario vonvertir a .json

/* async function traerdatosUsuario() {
    // Await espera dato por dato
    // let datos = await axios.get("https://jsonplaceholder.typicode.com/users");
    // get no es necesario mas informamos que tipo de solicitud estamos haciendo
    let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(data)
    // edsestructuracion de objetos

    // console.log(datos);
    data.forEach((element) => {
        let tr = document.createElement("tr")//El padre
        tr.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700", "border-gray-200")
        // tr.classList.toggle("")Si existe la elimine o si no la grga
        // tr.classList.remove("la clase que eremos remover") eliminar clase
        let th = document.createElement("th");
        th.classList.add("px-6", "py-4", "font-medium", "text-gray-900", "whitespace-nowrap", "dark:text-white")
        th.scope = "row";
        th.textContent = `${element.name}`;
        let td1 = document.createElement("td");
        td1.textContent = element.phone
        td1.classList.add("px-6", "py-4")
        let td2 = document.createElement("td");
        td2.textContent = element.website
        td2.classList.add("px-6", "py-4")
        let td3 = document.createElement("td");
        td3.textContent = element.company.name
        td3.classList.add("px-6", "py-4")
        tr.appenChild(th);//Asignamos hijos a tr
        tr.appenChild(td1);
        tr.appenChild(td2);
        tr.appenChild(td3);
        tabla.appendChild(tr)
    });
}
traerdatosUsuario();

 */

// let tabla = document.querySelector("#tabla-cuerpo")
let tabla = document.querySelector("#tabla-cuerpo");
async function traerdatosUsuarios() {
    let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data);
    data.forEach((element) => {
        let tr = document.createElement("tr");
        tr.classList.add(
            "bg-white",
            "dark:bg-gray-800",
            "dark:border-gray-700",
            "border-gray-200"
        );
        let th = document.createElement("th");
        th.classList.add(
            "px-6",
            "py-4",
            "font-medium",
            "text-gray-900",
            "whitespace-nowrap",
            "dark:text-white"
        );
        th.scope = "row";
        th.textContent = element.name;
        let td1 = document.createElement("td");
        td1.classList.add("px-6", "py-4");
        td1.textContent = `+52 ${element.phone}`;
        let td2 = document.createElement("td");
        td2.classList.add("px-6", "py-4");
        td2.textContent = element.website;
        let td3 = document.createElement("td");
        td3.classList.add("px-6", "py-4");
        td3.textContent = element.company.name;
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tabla.appendChild(tr);
    });
}
traerdatosUsuarios();

