// const fher = {
//     nombre: 'Ignacio',
//     edad: 30,
//     imprimir() {
//         console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
//     }
// }

// const pedro = {
//     nombre: 'Pedro',
//     edad: 15,
//     imprimir() {
//         console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
//     }
// }

// const melissa = {
//     nombre: 'Melissa',
//     edad: 35,
//     imprimir() {
//         console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
//     }
// }

// fher.imprimir();



// ESTA FORMA DE GENERAR ESTANCIAS ES PARA NAVEGADORES VIEJOS, ESTÁ OBSOLETO

// Se usa generalmente la primera linea mayúscula para definir estancias
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// new es para crear una nueva estancia de Persona
const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 35);

maria.imprimir();
melissa.imprimir();




