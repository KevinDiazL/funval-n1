function convert(minutos) {
    return minutos * 60;
}
function triarea(base, altura) {
    return base * altura / 2;
}
console.log(triarea(4, 6));
function operacion(numero, numero2) {
    let suma = numero + numero2;
    if (suma > 100) {
        console.log("Tu suma es mayor a cien");
    }
    else {
        console.log("Tu suma es menor a cien");
    }
}

console.log()