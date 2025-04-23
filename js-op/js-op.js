// El programa pedira al usuario la medida de un lado del cuadrado y mostrara el resultado por una alerta
// Lammar las variables, pedir los datos con prompts y almacenarlos en las variables y luego hacer la operacion. Al final mostrar con alert() el resultado.

/* let lado = prompt("Dame el lado de tu cuadrado");
console.log(typeof lado);
lado = parseFloat(lado)
// Los prompt reciben datos string
let resultado = lado * lado;
alert("Tu resultado es: " + resultado)
 */

/* vamos a crear un progrma que simule la interaccion con un ATM
este debe tener lasposibilidad de hacer las siguientes operaciones .
-depositar
-retirar
-ver saldo
-Pagar servicios(opcional)
Usar prompt() para pedir datos
usar alert() para mostrar datos o mesnaje
usar conficionales (if y else)
opcional(Switch case)
*/

// let deposito, retiro, saldo, pagoDeServicio, operacion, monto, clave, numeroDeIdentidad, motivoDePago, operacion2;
// alert("Bienvenido :)");
// let idioma = prompt("Seleccione el idioma:\n1)Español\n2))English");
// saldo = 0;
// if (idioma === "1") {
//     console.log("Español");
// } else if (idioma === "2") {
//     console.log("English")
// }
// else {
//     console.log(idioma);
// }
// while (operacion2 != "2") {

//     operacion = prompt("Selecciona una operacion \n1.-Deposito \n2.-Retiro \n3.-Saldo \n4.-Pagos de servicios");
//     if (operacion === "1") {
//         console.log("Selecciono deposito")
//         monto = parseInt(prompt("¿Cuanto deseas depositar"))
//         saldo = saldo + monto;


//     }
//     else if (operacion === "2") {
//         console.log("Selecciono retiro");
//         clave = prompt("Ingresa tu clave ");
//         numeroDeIdentidad = prompt("Ingresa tu numero de identidad: ");
//         monto = prompt("¿Que cantidad deseas retirar?");
//         if (monto > saldo) {
//             alert("Saldo insuficiente");
//         }
//         else {
//             saldo = saldo - monto;
//         }

//     }
//     else if (operacion === "3") {
//         console.log("Selecciono ver saldo")
//         clave = prompt("Ingresa tu clave ");
//         numeroDeIdentidad = prompt("Ingresa tu numero de identidad: ");
//         alert("Tu saldo es: " + saldo);
//     }
//     else if (operacion === "4") {
//         console.log("Selecciono pagos");
//         motivoDePago = prompt("¿Qual es el motivo de tu pago?");
//         monto = parseInt(prompt("¿Cuanto deseas pagar"));
//         if (monto > saldo) {
//             alert("Saldo insuficiente")
//         }
//         else {
//             saldo = saldo - monto;
//         }

//     }
//     else {
//         alert("Selecciono una opcion invalida");
//     }
//     operacion2 = prompt("Deseas realizar otra operacion? \n1)Si \n2)no")
// }


alert("Bienvenido :D")
const error = () => alert("Dato incorrecto, intente nuevamente");//Mensaje de error cuando el usuario no digite bien las opciones
const seguridad = function () {
    //Comprueba la seguridad del usuario pidiendo claves y su numero de identidad.
    let clave = prompt("Ingresa tu clave");
    let numeroDeIdentidad = prompt("Ingresa tu numero de identidad: ");
    alert("Clave: " + clave + "\nNumero de identidad: " + numeroDeIdentidad);
}

function retiro() {
    monto = parseFloat(prompt("¿Que cantidad deseas retirar?"));
    if (monto > saldo2) {
        alert("Saldo insuficiente");
    }
    else {
        saldo2 = saldo2 - monto;
    }
}

function deposito() {
    monto = parseFloat(prompt("¿Cuanto deseas depositar"))
    saldo2 = saldo2 + monto;
}

function saldo() {
    alert("Tu saldo es: " + saldo2);
}

while (true) {
    let idioma = prompt("Seleccione el idioma:\n1)Español\n2)English");
    if (idioma === "1") {
        alert("Tu idioma es: Español")
        break;
    }
    else if (idioma === "2") {
        alert("Tu idioma es: English")
        break;
    }
    else {
        error();
    }
}
let intento = true;
let deposito2, retiro2, saldo2 = 0, monto;
while (intento == true) {
    let opcion = prompt(`¿Que operacion deseas realizar(Selecciona con un numero la operacion)
    1)Retiro
    2)Deposito
    3)Saldo`);
    switch (opcion) {
        case "1":
            seguridad();
            retiro();

            break;
        case "2":
            deposito();
            break;

        case "3":
            seguridad();
            saldo();
            break;

        default:
            error();
            break;
    }
    while (true) {
        let opcion2 = prompt("Deseas realizar otra operacion 1)Si 2)No")
        if (opcion2 === "1") {
            break;
        }
        else if (opcion2 === "2") {
            intento = false;
            break;
        }
        else {
            error();
        }
    }
}
