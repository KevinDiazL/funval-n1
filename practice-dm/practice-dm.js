let buttonDarkMode = document.querySelector("#buttonDM")

buttonDarkMode.addEventListener("click", switchDarkMode)

function switchDarkMode() {
    document.documentElement.classList.toggle("dark")
    // todo el html, la etiqueta html, Va a buscar las clases del <html>, va a colocar o quitar la clase dark
}