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

let listado = document.querySelector("#listas1");
let listado2 = document.querySelector("#listas2");
let listado3 = document.querySelector("#listas3");
let listado4 = document.querySelector("#listas4");
let listado5 = document.querySelector("#listas5");
let listado6 = document.querySelector("#listas6");
let listado7 = document.querySelector("#listas7");
listado.innerHTML = ``;
listado2.innerHTML = ``;
listado3.innerHTML = ``;
listado4.innerHTML = ``;
listado5.innerHTML = ``;
listado7.innerHTML = ``;

function array1() {
  for (let i = 0; i < auto.dueñosAnteriores.length; i++) {
    listado.innerHTML = listado.innerHTML + `<tr class="border-2 border-black"><th class="border-2 border-black">Dueños anteriores ${i + 1}</th><th class="border-2 border-black">${auto.dueñosAnteriores[i]}</th></tr>`;
  }
}
let contador = 0;
for (Objeto1 in auto) {

  if (contador < 8) {
    listado.innerHTML = listado.innerHTML + `<tr class="border-2 border-black"><th class="border-2 border-black">${Objeto1}</th>
  <th class="border-2 border-black">${auto[Objeto1]}</th></tr>`;
  }
  else if (contador === 9) {
    array1();
  }
  else {
  }
  contador++;
}

for (Objeto2 in auto.especificaciones.motor) {
  listado2.innerHTML += `<tr><th class="border-2 border-black">${Objeto2}</th><th class="border-2 border-black">${auto.especificaciones.motor[Objeto2]}</th></tr>`;
}

for (Objeto3 in auto.especificaciones.seguridad) {
  listado3.innerHTML += `<tr><th class="border-2 border-black">${Objeto3}</th><th class="border-2 border-black">${auto.especificaciones.seguridad[Objeto3]}</th></tr>`;
}

for (Objeto4 in auto.especificaciones.dimensiones) {
  listado4.innerHTML += `<tr><th class="border-2 border-black">${Objeto4}</th><th class="border-2 border-black">${auto.especificaciones.dimensiones[Objeto4]}</th></tr>`;
}
let array2 = () => {
  for (let i = 0; i < auto.opciones.length; i++) {
    listado5.innerHTML += `<tr class="border-2 border-black"><th class="border-2 border-black">Opcion ${i + 1}</th><th class="border-2 border-black">${auto.opciones[i]}</th></tr>`;
  }
};
array2();
for (Objeto6 in auto.historialMantenimiento[0]) {
  listado6.innerHTML += `<tr><th class="border-2 border-black">${Objeto6}</th><th class="border-2 border-black">${auto.historialMantenimiento[0][Objeto6]}</th></tr>`;
}
for (Objeto7 in auto.historialMantenimiento[1]) {
  listado7.innerHTML += `<tr><th class="border-2 border-black">${Objeto7}</th><th class="border-2 border-black">${auto.historialMantenimiento[1][Objeto7]}</th></tr>`;
}
// listado.innerHTML = ``;

/* let personas = {
  nombre: "Diego",
  cursos: [
    {
      nCurso: "Math",
      notas: [12, 22, 34, 25],

    },
    {
      nCurso: "A",
      notas: [12, 34, 25, 24],
    },
    {
      nCurso: "h",
      notas: [12, 22, 34,],
    },
  ]
}

for (let j = 0; j < personas.cursos.length; j++) {
  let suma = 0;

  for (let i = 0; i < personas.cursos[j].notas.length; i++) {
    console.log(personas.cursos[j].notas[i]);
    suma = suma + personas.cursos[j].notas[i];
  }
  console.log("El promedio es " + suma / personas.cursos[0].notas.length);
}  */

