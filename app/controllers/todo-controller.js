import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  console.log("todo-conntroller _drawTodos")

  let todos = store.State.todos
  //console.log(store.State.todos)
  let template = ''
  todos.forEach( todo => template += todo.Template )
  //console.log(template)

  //document.getElementById('todos').innerHTML = template
  document.getElementById('todos2').innerHTML = template
  document.getElementById("listCount").innerText = `To Do List(${store.State.todos.length})`
  
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();

  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //console.log(form)
    var todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.description.value,
      //completed:  true
    };
    TodoService.addTodoAsync(todo);

  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    //console.log("todo-controller remove Todo")
    TodoService.removeTodoAsync(todoId);
  }
}
