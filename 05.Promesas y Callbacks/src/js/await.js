import { buscarHeroeAsync, busca, buscarHeroe} from './promesas'


const heroesIds = ['capi', 'iron', 'spider']
const heroesPromesas = heroesIds.map(id => buscarHeroe(id))

// export const obtenerHeroesArr = async() => {
//     const heroesArr = []
//     ////Los await solo funcionan dentro de una funcion async
//     ////Antes que siguiera ejecutandose el código, 'yo esperé' a que se resolviera la promesa
//     for( const id of heroesIds) {
//         const heroe = await buscarHeroeAsync(id)
//         heroesArr.push(heroe)
//     }

//     ////Es necesario tener que esperar a que se resuelvan las promesas para insertarlas en el arreglo
//     // setTimeout(() => {
//     //     console.log('Obtener Heroes');
//     //     console.table(heroesArr)
//     // }, 1000)


//     return heroesArr
// }


// export const obtenerHeroesArr = async() => {
//     const heroesArr = []
//     // por cada iteración del ciclo, espera 1s (por el timeout que pusimos)
//     // a que se resuelva cada promesa, o sea 3s en total
//     for( const id of heroesIds) {
//         heroesArr.push(buscarHeroe(id))
//     }
//     // esto se resuelva retornando el Promise.all, que resuelve todas las promesas simultaneamente
//     // porque heroesArr es un arreglo con 3 promesas
//     // se pone await para igual esperar que las promesas se resuelvan, pero esta vez en 1s las 3 simultaneas
//     return await Promise.all(heroesArr)
// }


//forma elegante
export const obtenerHeroesArr = async() => {
    //map ejecuta la función de buscarheroe, por cada elemento en heroesIds, o sea 3
    return await Promise.all(heroesIds.map(buscarHeroe))
}


export const obtenerHeroeAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync(id)
        return heroe
    }catch (err) {
        console.log('catch!!');
        return {
            nombre: 'Sin Nombre',
            poder: 'Sin Poder'
        }
        
    }
}


export const heroesCiclo = async() => {
    console.time('HeroesCiclo')


    
    // //para resolver cada promesa no como un arreglo de promesas
    // const heroes = await Promise.all(heroesPromesas)
    // heroes.forEach(console.log)

    //hace un ciclo que espera a que se resuelvan las promesas
    for await (const heroe of heroesPromesas) {
        console.log(heroe); 
    }
    ////compartamiento similar al de arriba, pero hace que la resolucion de promesas se haga al final del procedimiento de la funcion
    //// en este caso el cronometro
    // heroesPromesas.forEach( async(p) => console.log(await p))

    console.timeEnd('HeroesCiclo')
}


export const heroeIfAwait = async(id) => {
    // aqui la condicionante espera a que se resuelva la promesa, o sea retorna el objeto que coincide con el is
    // y al obtener ese objeto, puedo obtener un resultado especifico, como el nombre y compararlo
    if( (await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('El mejor de todos');
        
    }else {
        console.log('naaa')
    }
}

