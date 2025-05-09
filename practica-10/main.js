let div = document.querySelector("#contenedor")
async function datos() {

    let array = (await fetch(`https://jsonplaceholder.typicode.com/users`))
        .then((respuesta) => respuesta.json())
        .then((data) => {
            Llenardatos(data);
        })
        .catch((error) => console.log("Error al cargar los usuarios. Inténtalo de nuevo más tarde. " + error));
}
function Llenardatos(array) {
    array.forEach(element => {
        div.innerHTML = ``;

    });

}