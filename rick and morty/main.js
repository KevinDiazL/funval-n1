let input1 = document.querySelector("#inputSearch")
let contenedor = document.querySelector(".card-container")

async function traerTodos() {
    let respuesta = await fetch("");
    let data = await respuesta.json();
    console.log(data)
    let personaje = data.results;
    console.log(personaje)
    contenedor.innerHTML = "";
    personaje.forEach(element => {
        contenedor.innerHTML += `
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-96 h-48">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${element.image}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.status} - ${element.species}</p>
    </div>
</a>
`;

    });

}
traerTodos()


input1.addEventListener("input", () => {
    console.log(input1.valeu)
    if (input1.valeu === "") {
        traerTodos()

    }
    else {
        fetch("https://rickandmortyapi.com/api/character").then(response => responde.json()).then
        let arraypersonajes = data.results
        arraypersonajes.forEach((item) => {

        })
    }

})