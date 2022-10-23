// Singleton sirve para asignar una sola variable aunque llamemos diferentes instancias

class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {

        // const a = undefined;
        // console.log(a);
        // console.log(!a);
        // console.log(!!a);
        // La doble negacion retorna un false no un undefined
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
        
        // en un constructor siempre se hace return del this
        // return this;
    }
}


const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es: ${instancia3.nombre}`);
