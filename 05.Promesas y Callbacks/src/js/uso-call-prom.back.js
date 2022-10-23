// import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas'
const heroeId1 = 'capi'
const heroeId2 = 'iron'

////las promesas se resuelven después de que se resuelven las demás funciones
// buscarHeroe(heroeId1).then( heroe1 => {
//     // console.log(`Enviando a ${ heroe.nombre } a la misión`);
//     //Promise hell
//     buscarHeroe( heroeId2).then( heroe2 => {
//         console.log(`Enviando a ${ heroe1.nombre} y ${ heroe2.nombre } a la misión`);
//     })
// })



Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) => {
        console.log(`Enviando a ${ heroe1.nombre} y ${ heroe2.nombre } a la misión`);
//si catch pilla un error, no se ejecuta nada de la promesa, se ignoran hasta los correctos
}).catch( err => {
    alert(err)
//finally aparece después de que se encuentra el error o se resuelve exitósamente la promesa
}).finally(() => {
    console.log(`se terminó el promise.all`);
    
})



////aparece primero fin del programa luego la promesa
console.log('Fin del programa');


////La ejecución es secuencial: primero se llama a la funcion buscar heroe con el primer argumento, se ejecuta la función llamada, se retorna el callback con el resultado y se ejecuta la función callback
//// buscarHeroe( heroeId1, (err, heroe1) => {
    //si encuentra el error devuelve el primer argumento, el segundo no lo toma en cuenta
    // if (err) {
        ////por lo tanto si encuentra el primer argumento, devuelve el error
        // console.error( err );
    // } else {
        ////si no lo encuentra, pasa al segundo que es el heroe
        // console.log( heroe );
    // }
    
    // if ( err ) { return console.error( err );}
    
    ////callbacks hell, repetición de callbacks para tener todos los valores de la base de datos
//     buscarHeroe( heroeId2, (err, heroe2) => {
//         if ( err ) { return console.error( err );}

//         console.log(`Enviando a ${ heroe1.nombre} y ${ heroe2.nombre } a la misión`);
        
//     })
// })




import { promesaLenta, promesaMedia, promesaRapida } from'./js/promesas'

////Exactamente Igual
// promesaLenta.then(console.log())
// promesaMedia.then( mensaje => console.log(mensaje))

// promesaLenta.then(console.log)
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)

// //La promesa más rapida se ejecuta, las demás son ignoradas
// //Si la promesa más rápida tira error, se resuelve el error
// //Si la promesa que gana se resuelve bien, no importa si las demas tiran error
// Promise.race([ promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn)

