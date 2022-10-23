export class Todo {
    //toma el objeto que viene del local storage y rehace la instancia
    static fromJson( {id, tarea, completado, creado} ) {

        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo
    }

    constructor( tarea ) {
        this.tarea = tarea;
        
        //FUNCIÓN DE CLASE: Le mando la tarea y automáticamente crea los datos de abajo
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

}