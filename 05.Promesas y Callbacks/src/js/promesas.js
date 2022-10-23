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

// export const buscarHeroe = (id) => {
//     const heroe = heroes[id]

//     return new Promise( ( resolve, reject ) => {
//         if ( heroe ) {
//             resolve( heroe )
//         } else {
//             reject(`No existe un heroe con el id ${ id }`)
//         }
//     })
// }

//Ejemplo de problema con tiempos
export const buscarHeroe = (id) => {
    const heroe = heroes[id]

    return new Promise( ( resolve, reject ) => {
        if ( heroe ) {
            setTimeout(() => {resolve( heroe )}, 1000) 
        } else {
            reject(`No existe un heroe con el id ${ id }`)
        }
    })
}

//al hacer una función asyncrona no es necesario retornar el new promise, porque lo hace pos si misma
export const buscarHeroeAsync = async(id) => {
    const heroe = heroes[id]

    // return new Promise( ( resolve, reject ) => {
    if ( heroe ) {
        return heroe
    } else {
        throw `No existe un heroe con el id ${ id }`
    }
}

const promesaLenta = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000)
})
const promesaMedia = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500)
})
const promesaRapida = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000)
})

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}