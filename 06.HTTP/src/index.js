// //el fetch retorna una promesa, por eso los then, json() es para obtener la información
// // en formato json y poder trabajarla

// import { init } from "./js/chistes-page";
import { obtenerUsuarios } from "./js/http-provider";
import { init } from "./js/usuarios-page";


// fetch(jokeUrl).then( resp => {
// resp.json().then( ({id, value}) => {
//         console.log(id, value);
//     })
// })


// //Forma Elegante
// //Evitamos obtener promesas DENTRO de ora promesa, acá funciona secuencialmente por fuera
// fetch(jokeUrl)
//     .then(resp => resp.json())
//     .then(({id, value}) => {
//         console.log(id, value);
// })

// obtenerUsuarios().then(console.log);
// console.log(usuarios);

init()



