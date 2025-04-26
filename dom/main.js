let persona = {

}
// console.log(document.querySelector("#listaID"));
// // console.log(document.getElementById("listaID"));
// let lista = document.querySelector("#listaID");
// // primera forma para agregar un elemento. 
// lista.innerHTML = `
// <li>${persona.nombre}</li>
// <li>${persona.edad}</li>
// <li>${persona.estudiante ? "Es estudiante" : ""}</li>
// <li>${persona.cursos}Hola</li>
// <li>${persona.cursos[0].notas}Hola</li>
// `;
// dom represnetea todo lo que tenenmos dentro de  uestro html y me ayuda a hacer referencias para nuesros indicadores
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Rojo",
  kilometraje: 15000,
  combustible: "Híbrido",
  transmisión: "Automática",
  precio: 25000,
  dueñosAnteriores: ["Juan Pérez", "Ana Gómez"],
  especificaciones: {
    motor: {
      tipo: "4 cilindros",
      potencia: "140 HP",
      torque: "190 Nm",
    },
    seguridad: {
      airbags: 8,
      frenosABS: true,
      controlEstabilidad: true,
    },
    dimensiones: {
      largo: "4.63 m",
      ancho: "1.78 m",
      altura: "1.45 m",
    },
  },
  opciones: ["Asientos de cuero", "Pantalla táctil", "Cámara de reversa"],
  historialMantenimiento: [
    {
      fecha: "10/03/2023",
      servicio: "Cambio de aceite",
      costo: 120,
    },
    {
      fecha: "15/07/2023",
      servicio: "Rotación de llantas",
      costo: 50,
    },
  ],
  // Método para calcular depreciación
  calcularDepreciacion: function (añoActual) {
    return this.precio * 0.9 ** (añoActual - this.año);
  },
};
let lista = document.querySelector("#lista1");
console.log(lista);
lista.innerHTML = `
<li>${auto.marca}</li>
<li>${auto.modelo}</li>
<li>${auto.año}</li>
<li>${auto.color}</li>
<li>${auto.kilometraje}</li>
<li>${auto.combustible}</li>
<li>${auto.transmisión}</li>
<li>${auto.kilometraje}</li>
<li>${auto.precio}</li>
`;
let listado = document.querySelector("#listas1");
listado.innerHTML = ``
