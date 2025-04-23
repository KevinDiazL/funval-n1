// function calculadora(opcion) {
//     alert("Bienvenido a la calculadora");
//     opcion = prompt("Que operacion deseas realizar(Escribe el numero de la opcion) \n1)suma \n2)resta \n3)multiplicacion \n4)division");
//     if (opcion === "1") {
//         alert(sumar());
//     }
//     else if (opcion === "2") {
//         alert(restar());
//     }
//     else if (opcion === "3") {
//         alert(multiplicar());
//     }
//     else if (opcion === "4") {
//         alert(division());
//     }
//     else {
//         alert("Dato incorrecto");
//     }
// }
// function sumar(numero1, numero2) {
//     numero1 = parseFloat(prompt("Dame tu primer numero"));
//     numero2 = parseFloat(prompt("Dame tu segundo numero"));
//     return numero1 + numero2;

// }
// function restar(numero1, numero2) {
//     numero1 = parseFloat(prompt("Dame tu primer numero"));
//     numero2 = parseFloat(prompt("Dame tu segundo numero"));
//     return numero1 - numero2;

// }
// function multiplicar(numero1, numero2) {
//     numero1 = parseFloat(prompt("Dame tu primer numero"));
//     numero2 = parseFloat(prompt("Dame tu segundo numero"));
//     return numero1 * numero2;

// }
// function division(numero1, numero2) {
//     numero1 = parseFloat(prompt("Dame tu primer numero"));
//     numero2 = parseFloat(prompt("Dame tu segundo numero"));
//     return numero1 / numero2;

// }

// function point(dato, dato2) {
//     dato = prompt("Dame el primer dato");
//     dato = dato * 2;
//     dato = prompt("Dame el primer dato");
//     dato2 = dato2 * 2;
//     return dato + dato2;
// }

// const points = function (dospts, trespts){
//     return dospts*2 + trespts *3;
// }
// console.log(point(1,1));

// const animals = function (chicken, cows, pigs) {
//     return chicken * 2 + cows * 4 + pigs * 4;
// }
// console.log(animals(2, 3, 5))

function areas() {
    let opcion = prompt(`Que operacion deseas realizar
        1)cuadrado
        2)circulo
        3)rectangulo
        4)traingulo`)

    const cuadrado = function (lado) {
        return lado * lado
    }
    const circulo = function (radio) {
        const pi = 3.1416;
        return (radio ** 2) * (radio)
    }
    const rectangulo = function (base, altura) {
        return base * altura;
    }
    const triangulo = function (base, altura) {
        return base * altura / 2;
    }

}