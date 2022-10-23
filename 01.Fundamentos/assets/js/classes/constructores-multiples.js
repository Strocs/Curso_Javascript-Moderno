class Persona {

    static porObj({nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
    }

    getInfo() {
        console.log(`Info: ${this.nombre} ${this.apellido}, ${this.pais}`);       
    }
}

const nombre1 = 'Melissa', 
      apellido1 = 'Flores',
      pais1 = 'Chile'



const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Honduras'
}


const persona1 = new Persona(nombre1, apellido1, pais1)
// const persona2 = new Persona(fher.nombre, fher.apellido, fher.pais); 
const persona2 = Persona.porObj(fher)



console.log(persona1)
persona1.getInfo()
persona2.getInfo()

