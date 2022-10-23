//Es buena practica usar open camel case (primeras letra en mayúsculas), para cuando declaramos clases
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola soy un blabla estatico');
        
        
    }

    

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;
    }

    set ComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get ComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}



const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.ComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

// console.log(spiderman.ComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2;

console.log('Conteo stático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';


console.log(Persona.propiedadExterna);
console.log(Persona);
