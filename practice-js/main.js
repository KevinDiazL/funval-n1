/* let edad = parseInt(prompt("¿Cual es tu edad?"))
if (edad >= 18) {
    alert("Puedes votar");
}
else {
    alert("No puedes votar");
} */

/* while (true) {
    let numero = parseInt(prompt("dame tu numero"))
    if (numero > 0) {
        alert("Tu numero es positivo");
        break;
    }
    else if (numero === 0) {
        alert("Tu numero es igual a 0");
        break;
    }
    else if (numero < 0) {
        alert("Tu numero es negativo");
        break;
    }
    else {
        alert("Informacion incorrecta")
    }
}
 */

/* let dia = prompt("Dame tu numero para calcular el dia de la semana");
switch (dia) {
    case "1":
        alert("Lunes")
        break;
    case "2":
        alert("Martes")
        break;
    case "3":
        alert("Miercoles")
        break;
    case "4":
        alert("Jueves")
        break;
    case "5":
        alert("Viernes")
        break;
    case "6":
        alert("Sabado")
        break;
    case "7":
        alert("Domingo")
        break;
    default:
        alert("Informacion incorrecta")
        break;
} */

/* let numero = parseFloat(prompt("Dame tu numero para determinar si es par o impar"))
if (numero % 2 === 0) {
    alert("Tu numero es par");
}
else if (numero % 2 > 0 || numero % 2 < 0) {
    alert("Tu numero es impar");
}
else {
    alert("Informacion incorrecta");
} */

/* 
let nota = prompt("Dame tu nota escolar (0-20)")
if (nota >= 0 && nota <= 10) {
    alert("desaprobado")
}
else if (nota >= 11 && nota <= 13) {
    alert("Regular");
}
else if (nota >= 14 && nota <= 17) {
    alert("Bueno")
}
else if (nota >= 18 && nota <= 20) {
    alert("Excelente");
}
else {
    alert("Informacion incorrecta");
} */

/* let dato = parseInt(prompt("Dame un numero"))
if (isNaN(dato)) {
    console.log("Dato incorrecto");
}
else {

    for (let index = 0; index < 101; index++) {
        multiplicacion = dato * index;
        console.log(dato + " * " + index + " = " + multiplicacion);
    }
}
 */
/* let num = 0;
for (let contador = 0; contador < 101; contador++) {
    num = num + contador;
    console.log(num);

} */


let lado, base, altura, area;
while (true) {
    let opcion = prompt("Elige una operacion \n1)Calcular el area de un cuadrado \n2)Calcular el area de un rectangulo\n3)Calcular el area de un triangulo")
    if (opcion === "1") {
        lado = parseFloat(prompt("Introduze el lado de tu cuadrado"));
        area = lado * lado;
        alert("Tu area del cuadrado es " + area);
        break;
    }
    else if (opcion === "2") {
        base = parseFloat(prompt("Introduce la base de tu rectangulo"));
        altura = parseFloat(prompt("Introduce la altura de tu rectangulo"));
        area = base * altura;
        alert("Tu area del rectangulo es " + area);
        break;

    } else if (opcion === "3") {
        base = parseFloat(prompt("Introduce la base de tu triangulo"));
        altura = parseFloat(prompt("Introduce la altura de tu triangulo"));
        area = base * altura / 2;
        alert("Tu area del triangulo es " + area);
        break;
    }
    else {
        alert("Dato incorrecto, vuelve a intentarlo")
    }
}