/* // hola("hevin")

function preparar(frutas,aderezo, accion, accion2 ) {
    return accion(frutas)
}
// Funcion de orden superior
function pelar(fruta) {
    console.log(`La fruta: ${fruta} ha sido pelada con exito`)
}

function hacerjugo(fruta) {
    console.log(`La fruta: ${fruta} licuada con exito`)
}
function agregar(fruta,aderezo){
    console.log(`a la fruta ${fruta} se le agrego ${aderezo}`)
}
preparar("banana", pelar)
preparar("pera", hacerjugo)
preparar("Chocolate","banana",pelar,agregar)
 */
// CALLBACK
/* function pedirhelado(tipoSal,callback){
    let numerodeCaracteres = tipoHelado.lenght;
    console.log(numerodeCaracteres)
    callback()
}
function helado(){
    console.log("Este helado esta sabroso")

}
pedirHelado("helado",helado);

let nombre = ["kevin", "juan"]
 */

// trabajar uno detras de otro
// console.log("llegamos a la heladeria");
// console.log("pedimos");
// console.log("recibimos");
// console.log("comemos");

/* console.log("llegamos a la heladeria")
setTimeout(() => {
    console.log("Helado entregado");
}, 5000);
console.log("Esperamos helado")
// funcion de orden superior
console.log("Sacamos los fideo de la bolsa")
setTimeout(() => {
    console.log("El agua esta lista")
}, 15000)

console.log("Lavando los platos") */

/* console.log("Cargar telefono")
setTimeout(() => {
    console.log("Telefono cargado")
}, 6000)
console.log("Veo la tele")
console.log("Limpio mi casa")
console.log("Verificar si el telefono esta cargado")
console.log("Reflexiono sobre mi vida")
 */
// function despertar(callback) {
//     console.log("Despertando...");
//     setTimeout(() => {
//       console.log("Me desperté");
//       callback();
//     }, 2000);
//   }
//   function desayunar(callback) {
//     console.log("Preparando desayuno...");
//     setTimeout(() => {
//       console.log("Desayuné");
//       callback();
//     }, 2500);
//   }
//   function irAlColegio() {
//     console.log("Caminando al colegio...");
//     setTimeout(() => {
//       console.log("Llegué al colegio");
//     }, 2000);
//   }
//   // Llamada en orden
//   despertar(() => {
//     desayunar(() => {
//       irAlColegio();
//     });
//   })
/* 
setTimeout(() => {
    let estudiantes = [{
        nombre: "kevin",
        edad: 28,
    }]
}, 10000);
let supernombre = estudantiantes[0].nombre; */

/* let superpromesa = new Promise((resolve, reject) => {

    let ellaTeespero = false
    if (ellaTeespero) {

        resolve("Ella si te espero hermanito")

    }
    else {
        reject("Ella no te espero bro :C")
    }
})
// ]si se cumple y si no se cumple. debe haber iopcion de tomar dos caminos


superpromesa
.then((mensaje) => {
    console.log(mensaje)
}).catch((error) => {
    console.log(error);
})

//Que ha pasdo mal */
// es necesario que sea resolve y reject. puede ser resolve pues si o si se va a resolver


/* let traerDatos = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                nombre: "kevin",
                edad: 28,
            },
            {
                nombre: "ana",
                edad: 20,
            },
            {
                nombre: "Cristian",
                edad: 30,
            },
        ]);
    }, 5000); // 2 segundos de retraso
});
traerDatos.then((item) => {
    console.log("Datos recibidos:");
    console.log(item);
    let objetos = item;
    objetos.forEach((element) => {
        console.log(element.nombre);
    });
});

function laPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let peliculasLlegaron = true;
            if (peliculasLlegaron) {
                resolve([{
                    nombre: "terminator", año: 2019,
                },
                {
                    nombre: "terminator", año: 2019,
                },
                {
                    nombre: "terminator", año: 2019,
                },
                {
                    nombre: "terminator", año: 2019,
                },



                ])
            } else {
                reject("Las peliculas no llegaron por que el repartidor es muy flojo")
            }
        }, 5000);



    })
}
laPromesa()
.then((item) => {
    item.forEach((element) => {
        console.log(element);
    }).catch((error) => {

        console.log(error);
    })


})
 */

/* function videogame() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let opcion = true;
            if (opcion) {
                resolve["Super Smash bros", "TloZ", "Mario Kart"];
            }
            else {
                reject("Soy pobre :C")
            }

        }, 5000);
    })
}

videogame().then((item) => {
    item.forEach(element => {
        console.log(element)
    }).catch((error) => {
        console.log(error);
    })
}) */
/* 
function obtenerUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve([
                    { nombre: "Juan", edad: 25 },
                    { nombre: "María", edad: 30 },
                    { nombre: "Pedro", edad: 17 },
                ]);
            } else {
                reject("No se pudieron obtener los usuarios");
            }
        }, 1500);
    });
}

obtenerUsuarios().then((element) => {
    let nuevoArray = element.filter(menor => menor.edad > 18)
    console.log(nuevoArray)
}).catch((error) => {
    console.log(error);
})
 */
/* function obtenerProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve([
                    { nombre: "Laptop", precio: 1200, stock: 5 },
                    { nombre: "Celular", precio: 800, stock: 0 },
                    { nombre: "Monitor", precio: 300, stock: 3 },
                    { nombre: "Teclado", precio: 50, stock: 10 },
                ]);
            } else {
                reject("Error al obtener los productos del servidor.");
            }
        }, 2000);
    });
}
obtenerProductos().then((item) => {
    let filtrado = item.filter(Check => Check.stock > 0)
    filtrado.forEach(element => {
        console.log(`nombre: ${element.nombre}------- precio: ${element.precio}`)
    });
}) */
/* async function hola() {
    return "hola amigos";

}

hola().then((mesaje) => {
    console.log(mesaje)
}
)
// retornar promesas
// AWAIT

async function fetchData() {
    // manejo de errores
    try {
        let informacion = await obtenerproductos();//nos va a esperar hasta que se cumpla
        console.log(informacion)
    } catch (error) {
        console.log(error)
    }


}
fetchData(); */
//get mostrar o leer datos
/* 
post recopilar datos y informacion y agregarla a la base de datos
put actualizar datos y informacion y agrega a la base de datos 
delete elminar dato de la base de datos


CRUD=
C  CREATE
R READ
U  UPDATE
D  DELETE
*/

/* let libros = [
    {
        titulo: "harry potter",
        año: 2002,
        autor: "JK ROWLING",
    },
    {
        titulo: "jesus el cristo",
        año: 1987,
        autor: "Talmage James",
    },
    {
        titulo: "la arrogancia fatal",
        año: 1988,
        autor: "Federick Haiek",
    },
];
function fetchLibros() {
    return new Promise((resolve, reject) => {
        let cumplio = true;
        if (cumplio) {
            setTimeout(() => {
                resolve(libros);
            }, 2000);
        } else {
            reject("los libros no pudieron ser extraidos ");
        }
    });
}

async function autores() {
    try {
        let info = await fetchLibros()
        let filtro = info.filter(libro => libro.año > 2000)
        filtro.forEach(element => {
            console.log(element.autor);
        });


    } catch (error) {
        console.log(error)

    }

}
autores(); */

const usuarios = [
    {
        id: 1,
        nombre: "Ana",
        edad: 28,
        librosFavoritos: ["1984", "Cien años de soledad"],
        historialCompras: [
            {
                fecha: "2024-02-12",
                libros: ["1984", "Rebelión en la granja"],
            },
            {
                fecha: "2025-01-01",
                libros: ["Cien años de soledad"],
            },
        ],
    },
    {
        id: 2,
        nombre: "Luis",
        edad: 34,
        librosFavoritos: ["La naranja mecánica"],
        historialCompras: [
            {
                fecha: "2023-12-10",
                libros: ["La naranja mecánica", "El extranjero"],
            },
        ],
    },
    {
        id: 3,
        nombre: "Carla",
        edad: 21,
        librosFavoritos: [],
        historialCompras: [],
    },
];
function fetchUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usuarios);
        }, 1000);
    });
}



















