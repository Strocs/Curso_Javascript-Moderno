import './styles.css';
import { Todo, TodoList } from './classes' //Busca el index.js por defecto en la carpeta
import { crearTodoHtml, numeroPendientes } from './js/componentes';


export const todoList = new TodoList();

//por cada objeto en el arreglo todo, me creará el html
// todoList.todos.forEach(todo => crearTodoHtml( todo ))
todoList.todos.forEach(crearTodoHtml)







