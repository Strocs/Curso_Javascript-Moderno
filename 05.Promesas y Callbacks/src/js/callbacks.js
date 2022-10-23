// Base de datos
const heroes = {
    capi: {
        nombre: 'Capitan América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alérgica a las picaduras de araña'
    }
}

// callback retorna al heroe
export const buscarHeroe = ( id, callback ) => {
    //busca al heroe, dentro de la base de datos, tomando el id que entregue el usuario
    const heroe = heroes[id]

    if (heroe) {
        //hay que asignarle algo al err, por eso se pone null para que no lo tome encuenta y solo devuelva el segundo arg
        callback( null, heroe)
    } else {
        //al encontrar el error, devuelve el primer argumento, que sería err, el segundo se lo salta porque ya lo resuelve
        callback(`No existe un héroe con el id ${ id }`)
    }

    //Manda el argumento que encontré a la función del callback
    // callback( heroe )
}