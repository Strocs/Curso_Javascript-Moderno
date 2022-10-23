import { Todo } from "../classes"
import { todoList } from '../index.js'

//Referencias del HTML
const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const btnBorrar = document.querySelector('.clear-completed')
const ulFiltros = document.querySelector('.filters')
const anchorFiltros = document.querySelectorAll('.filtro')
const conteoPendientes = document.querySelector('.todo-count')

export const numeroPendientes = () => {
    let conteo = 0
    todoList.todos.forEach(todo => {
        if (todo.completado === false) {
            conteo = conteo+1 
        }
    })

    conteoPendientes.firstChild.innerHTML = conteo
}

export const crearTodoHtml = ( todo ) => {
    //crear texto html
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    //NO FUNCIONA SI QUIERO HACER UN APPEND
    // divTodoList.innerHTML = htmlTodo
    // return htmlTodo;

    //Crea un div para insertar el texto html con append
    const div = document.createElement('div');    
    div.innerHTML = htmlTodo;
    divTodoList.append( div.firstElementChild );
    
    numeroPendientes()
    return div;
}


//Eventos
//Accionar un evento al apretar un botón -> keyup, event, keyCode
txtInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0) {
        
        const nuevoTodo = new Todo( txtInput.value )
        todoList.nuevoTodo( nuevoTodo )

        crearTodoHtml(nuevoTodo)
        txtInput.value = ''
        numeroPendientes()
    }
    
})

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; //input, label, button etc
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id')
    
    if ( nombreElemento.includes('input')) { //click en el check
        todoList.marcarCompletado( todoId )
        todoElemento.classList.toggle('completed')
        numeroPendientes()
    } else if (nombreElemento.includes('button')) { // hay que borrar el todo
        todoList.eliminarTodo(todoId)
        divTodoList.removeChild( todoElemento )
        numeroPendientes()
    }

})

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados()
    
    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {
        const elemento = divTodoList.children[i]
        if ( elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento)
        }
    }
})

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text
    if (!filtro) {return} //si no hay filtro seleccionado no hace nada (asi evitamos clicks en zona blanca ya que tomamos el label entero)
    // por defecto tiene la el estilo 'Todos', al hacer click primero remueve el estilo y se lo agrega
    // al clickeado
    anchorFiltros.forEach( elem => elem.classList.remove('selected'))
    event.target.classList.add('selected')


    for (const elemento of divTodoList.children) {
        
        elemento.classList.remove('hidden')
        const completado = elemento.classList.contains('completed')
    

        switch( filtro ) {
            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden')
                }
            break

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden')
                }
            break
        }
    }
   
})


