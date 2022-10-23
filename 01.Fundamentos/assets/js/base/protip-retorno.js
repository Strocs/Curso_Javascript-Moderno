// function crearPersona(nombre, apellido) {
//     return {nombre, apellido}
// }

// un return de de un objeto {} crea automáticamente la propiedad y el valor

const crearPersona = (nombre, apellido) => ({nombre, apellido}); //para hacer el retonro del objeto como tal en función de flecha se pone el return entre parentesis

const persona = crearPersona( 'Ignacio', 'Molina');

console.log(persona);


function imprimeArgumentos() { // si quisiera obtener los argumentos las funciónes tradicionales tienen la propiedad arguments
    console.log(arguments);
}
// las funcioens de flecha no funcionan con argumetns por default y hay que pasarsela como argumento de la función, la cuál a su vez solo retornará el primer valor, con ...args, le digo que me retorne todos los argumentos que le pase a una función en un arreglo. ... = parámetro rest, luego del parametro no puede haber otro argumento, para pasar otro argumento se hace antes de la declaración del parametro rest, y crea su propio argumento, no lo suma al arreglo de ...args
const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
}

// esto es para crear un objeto desde el arreglo
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Ignacio', 'Hola');
//console.log(argumentos[0], argumentos[1])
console.log({casado, vivo, nombre, saludo});


const {apellido: nuevoApellido} = crearPersona( 'Ignacio', 'Molina');
console.log({nuevoApellido});



const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}

// const imprimePropiedades = (personaje) => {
//     console.log('nombre:', personaje.nombre),
//     console.log('codeName:', personaje.codeName),
//     console.log('vivo:', personaje.vivo),
//     console.log('edad:', personaje.edad),
//     console.log('trajes:', personaje.trajes)
//} 


//desestructuracion de argumentos
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}


imprimePropiedades(tony);

