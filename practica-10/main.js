let div = document.querySelector("#contenedor")
async function datos() {

    await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            Llenardatos(data);
        })
        .catch((error) => console.log("Error al cargar los usuarios. Inténtalo de nuevo más tarde. " + error));
}
datos()
function Llenardatos(array) {
    array.forEach(element => {
        div.innerHTML += `<div class="rounded-sm bg-gradient-to-r from-blue-600 to-blue-400 border-white text-white border-4 shadow-lg shadow-cyan-500/50
        " >
        <h1 class="font-bold text-2xl">${element.name}</h1>
        <h2 class="font-semibold text-[20px]">${element.username}</h2>
        <p>${element.email}</p>
        <p>${element.company.name}</p>
        <p>${element.phone}</p>
        </div>
        `;

    });

}