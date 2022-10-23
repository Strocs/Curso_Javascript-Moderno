const jokeUrl = 'https://api.chucknorris.io/jokes/random'
const userUrl = 'https://reqres.in/api/users?page=2'

//siempre que aparece async, esa funcion retorna una promesa
const obtenerChiste = async() => {
    
    try {
        const resp = await fetch(jokeUrl)
    
        if( !resp.ok ) throw 'No se pudo realizar la peticion'

        const data = await resp.json()

        return data
        // return { icon_url, id,  value }

        //catch se activa si arriba ocurre un error, toma ese error y lo pasa como argumento err

    } catch (err) {
        throw err
    }

}


const obtenerUsuarios = async() => {
    
    const resp = await fetch(userUrl)
    const {data:usuarios} = await resp.json()
    
    return usuarios
    
}

export {
    obtenerChiste,
    obtenerUsuarios
}