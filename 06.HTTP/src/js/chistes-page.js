import { obtenerChiste } from "./http-provider"

const body = document.body
// no se asigna un valor porque primero es necesario crear el html y luego agregarle el valor de las clases
let btnOtro, olList, numChiste


const crearChisteHtml = () => {
    const html = `    
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro Chiste</button>

    <ol class="mt-2 list-group"></ol>
    `

    const divChistes = document.createElement('div')
    divChistes.innerHTML = html

    body.append(divChistes)
}

//BOTTON PARA OBTENER CHISTE
const eventos = () => {
    //selecciono el boton y la lista container
    olList = document.querySelector('ol')
    btnOtro = document.querySelector('button')
    numChiste = 0
    
    btnOtro.addEventListener('click', async() => {
        numChiste = numChiste+1

        //deshabilito el botton mientras se ejecuta el obtener chiste
        btnOtro.disabled = true
        dibujarChiste(await obtenerChiste(), numChiste)
        
        btnOtro.disabled = false
        
    })

}

// CREAR ETIQUETA HTML CON EL CHISTE
// { Chiste: id , value}
const dibujarChiste = (chiste, numChiste) => {
    const olItem = document.createElement('li')
    olItem.innerHTML = `<b>${numChiste}.-${chiste.id }</b>: ${chiste.value}`
    olItem.classList.add('list-group-item')

    olList.append(olItem)
}

export const init = () => {
    crearChisteHtml()
    eventos()
}

