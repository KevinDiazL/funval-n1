const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
]
//foreach
console.log("Foreach");
productos.forEach(x => console.log(x));
// 2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)#
// ✅ Parte 1: Usa map para generar un array productosDisponibles que contenga solo los nombres de los productos a partir del array productos.
// 🔎 Parte 2: Luego, verifica si un producto buscado está disponible utilizando includes.
console.log("maps y includes")
let productosDisponibles = productos.map(nombreProducto => nombreProducto.nombre)
let check = productosDisponibles.includes("Impresora");
console.log(check);
// 3️⃣ Aplicar un descuento a los productos (map)#
// 💰 Crea un nuevo array con los productos, aplicando un 10% de descuento a los precios.
console.log("maps con descuento");
let descuento = productos.map(function (operacion) {
    return operacion.precio - (operacion.precio / 10);
})
console.log(descuento);
// 4️⃣ Filtrar productos por precio (filter)#
// 🎯 Crea un array con los productos cuyo precio sea menor a $100
console.log("filter");
let menor = productos.filter(dato => dato.precio < 100);
console.log(menor)
// 5️⃣ Obtener los primeros productos (slice)#
// 📋 Muestra los primeros 2 productos de la lista.
console.log("slice");
let productosInicio = productos.slice(0, 2);
console.log(productosInicio);
// 6️⃣ Ordenar productos por precio (sort)#
// 📌 Instrucción: Investiga cómo funciona el método sort en JavaScript y úsalo para ordenar los productos de menor a mayor precio.
console.log("sort");
let orden = productos.map(x => x.precio);
let orden2 = orden.sort((a, b) => a - b);
console.log(orden2);
// 7️⃣ Invertir el orden de los productos (reverse)#
// 🔄 Instrucción: Investiga cómo funciona el método reverse en JavaScript y utilízalo para mostrar los productos en orden inverso.
console.log("reverse");
let orden3 = orden.reverse();
console.log(orden3)
