
function saludar(nombre) { //nombre es el argumento
     console.log(arguments); //objeto imlpícito para llamar todos los argumentos, solo en funciones tradicionales
     console.log('Hola ' + nombre );
    return [1,2];

    //Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return')
};


// función anónima para asegurar las funciones de que puedan ser declaradas con una variable.
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
};

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => { //no es necesario los paréntesis para pasar argumentos
    console.log('Hola '+nombre);
}


const retornoDeSaludar = saludar('Ignacio', 30, true, 'Chile');
console.log(retornoDeSaludar[0], retornoDeSaludar[1]); 

// saludar2('Ignacio');

// saludarFlecha();
// saludarFlecha2('Fernando');


function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }

const sumar2 = (a,b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();


//console.log(getAleatorio());
//console.log(getAleatorio2());


