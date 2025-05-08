/* function hola(nombre) {
    return `hola ${nombre}`;
}

export { hola }; */

// export default solo puede haber uno y se le puede asignar un nombre
function hola(nombre) {
    return `hola ${nombre}`;
}

function chau(nombre) {
    return `chau ${nombre};`
}

export { hola, chau };