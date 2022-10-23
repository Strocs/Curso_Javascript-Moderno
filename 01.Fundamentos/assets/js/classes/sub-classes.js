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

// Con el extends puedo llamar atributos de otra clase
class Heroe extends Persona {

    clan = 'sin clan'; 
    // al ya existir un constructor en la clase padre (Persona), entra en conflicto con este nuevo constructor
    // para ello debo llamar el constructor de Persona dentro del constructor de heroe con super()
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        // el super siempre va antes de los this
        this.clan = 'Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();



