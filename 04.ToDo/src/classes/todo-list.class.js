import { Todo } from "./todo.class"

export class TodoList {
    
    constructor() {
        // this.todos = []; se inicializa al cargar el local storage
        this.cargarLocalStorage()
    }

    nuevoTodo(todo) {
        this.todos.push( todo )
        this.guardarLocalStorage() //al haber una modificación de los todos, hay que reguardarlos
    }

    eliminarTodo(id) {
        //barre el array de todos y selecciona con filter todos los que no coincidan con el id que
        //mandé, así elimina el el id que mando
        this.todos = this.todos.filter(todo => todo.id != id ) 
        this.guardarLocalStorage() //al haber una modificación de los todos, hay que reguardarlos
    }

    marcarCompletado(id) {

        for( const todo of this.todos ) {
            
            if ( todo.id == id ) {
                todo.completado = !todo.completado //sirve para boleanos
                this.guardarLocalStorage() //al haber una modificación de los todos, hay que reguardarlos
                break
            }
        }
    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado) 
        this.guardarLocalStorage() //al haber una modificación de los todos, hay que reguardarlos
    }

    guardarLocalStorage() {
        //Hay que guardar el objeto en un json para transformarlo en string
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    cargarLocalStorage() {
        //parse hace el trabajo inverso a stringify, transforma el json en un objeto
        localStorage.getItem('todo') 
            ? this.todos = JSON.parse(localStorage.getItem('todo')) 
            : this.todos = []

        //Al cargar el local storage, pasa cada objeto por método estático que reconstruye la instancia
        this.todos = this.todos.map(Todo.fromJson)
        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) )
                    // cuando el arg enviado es igual al arg que recibe el metodo, se puede simplificar
    }


}