let filtro = document.querySelector("#buscador");//Input
let lista = document.querySelectorAll("li");//Todos los li


console.log(lista);

filtro.addEventListener("keyup", function (evento) {
    console.log(evento.target.value)
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].textContent.includes(evento.target.value)) {
            lista[i].style.display = "block";
        }
        else {

            lista[i].style.display = "none";

        }

    }
});