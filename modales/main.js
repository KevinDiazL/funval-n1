let bottonAbrir = document.querySelector("#openModal");
let modal = document.querySelector("#modal")
let botonCerrar = document.querySelector("#closeModal")
bottonAbrir.addEventListener("click", function () {
    modal.classList.remove("hidden");

})

botonCerrar.addEventListener("click", function () {
    modal.classList.add("hidden")
})

modal.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("modal-entero")) {
        modal.classList.add("hidden")
    }
})