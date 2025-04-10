let buttonDark = document.querySelector("#dark")
// quiery nos permite reconocer un elemento como csss
// console.log(buttonDark);
buttonDark.addEventListener("click", switchDarkMode)
// 
// Instruccion que debe ejecutar cuando nosotros la llamamos
function switchDarkMode() {
    document.documentElement.classList.toggle("dark")
    // Agarrando el contenido, etiqueta html, classlist son la clase de estilos del html.Toogle: le va a retirar esa clase
}
