/* let contador = 0;
let kevin = document.querySelector("#kevin")
botton.addEventListener("click", function () {
    contador++;
    kevin.textContent = contador;
})
//la princesa fiona vive en una etiqueta. Debemos crear un boton que pueda alternar entre el dia y la noche

let fiona = document.querySelector("#fiona")
let btn = document.querySelector("#accion")
let dia = true;
btn.addEventListener("click", function () { */



// dia = !dia;

// dia ? (btn.textContent = "DIA") : (btn.textContent = "Noche");

/* 
    if (dia) {
        btn.textContent = "DIA"
        fiona.textContent = "Fiona"
    }
    else {
        btn.textContent = "DIA"
        fiona.textContent = "Ogra"
    }
}) */
// Puede recibir objetos de tipo objetos

/* let parrafo = document.querySelector("#parrafoloco");
function gino(evento, pais) {
    gino(evento, "Chile");
}

parrafo.addEventListener("click", function (evento) {
    gino(evento, "Chile");// En este caso solo puede reciibr este paramentro
    // PPodemos usar paramentros con otras funciones con listenEvent
})

// Event submit :Trae todo el elelmtno del formulario
let formulario = document.querySelector("#elias");

formulario.addEventListener("submit", function (evento1) {
    evento1.preventDefault();
    // Para evitar la recarga automatica predeterminda por los formularios
    console.log("Formulario enviado")
    let formdata1 = new FormData(formulario)
    // enviamos los datos como si fuese un objeto
    console.log(formdata1.get("nombre"));
    // Traer el contenido del imputname:nome
    if (formdata1.get("nombre") === "") {
        alert("Nombre obligatorio")
    }
    if (formdata1.get("celular").length !== 8) {
        alert("El numero de celular es incorrecto");
    }
})


let formulario2 = document.querySelector("#Steam");

formulario2.addEventListener("submit", function (evento3) {
    evento3.preventDefault();
    let formObjeto = new FormData(formulario2)
    if (formObjeto.get("edad") < 18) {
        alert("No puedes comprar, eres niño")
    }
    if (formObjeto.get("pais") != "Chile") {
        alert("no eres chileno pana");
    }

}) */

/* mouseout: Cuando el cursor sale del elemento-
mousemove Se dispara cada vez que el mouse se mueve sobre un elemento

keydown cuando presionas una tecla


 */
/* let botoncito = document.quierySelector("btn")
botoncito.addEventListener("mouseover", function () {
    botoncito.style.backgroundColor = "gray";
})
botoncito.addEventListener("mouseout", function () {
    botoncito.style.backgroundColor = "";
})

let caja = docuemnto.querySelector("#caja")
let cordenadas = document.querySelector("#cord")

caja.addEventListener("mouseove", function (evento) {
    console.log(evento)
    cordenadas.textContent = `coordenadas: ${evento.clientx},${evento.clientx}`;
})

 */
/* crear un formulario que reciba
nombre de usuario
Edad
pais
Solo chile y mayor de 18 puede comprar el juego */


/* fiona en una ertiqueta h2 presione el boton de dia o de noche pero tambien los estilos de la etiqueta que lo ocntenga
*/
let fiona = document.querySelector("#fiona");
let btn1 = document.querySelector("#cambio");
let day = true;
btn1.addEventListener("click", function () {
    day = !day;
    console.log("Hola");
    if (day) {
        btn1.textContent = "DIA";
        fiona.textContent = "Fiona";
        btn1 = "color=green; font-size: 15px; "
    }
    else {
        btn1.textContent = "Noche";
        fiona.textContent = "Ogra";
    }
});