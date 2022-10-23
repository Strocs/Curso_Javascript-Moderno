let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10800, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']); // lo mismo que arriba
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length -1]); //lenght -1 indica el último valor del arreglo

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima Pelicula', personaje['ultima-pelicula']); // la propiedad puede ir con espacio o simbolos no permitidos si se anota como string

//*** Más detalles ***

delete personaje.edad; //borrar propiedades 
console.log(personaje);

//personaje.casado = true;

const entriesPares = Object.entries(personaje); //transformar el objeto literal en un arreglo
console.log(entriesPares);

Object.freeze(personaje); //aunque cambie la variable a const aún puedo modificar su contenido, con freeze lo bloqueo, const solo bloquea los cambios directos a la asignación de la variable.

personaje.dinero = 10000000000000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje); //obtener un arreglo con las propiedades
const valores = Object.values(personaje); //obtiene un arreglo con los valores
console.log({propiedades, valores});


// metodos de objetos
