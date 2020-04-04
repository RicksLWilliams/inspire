import store from "../store.js";
import ToDo from "../Models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Ricks/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    //console.log("Getting the Todo List");
    todoApi.get()
    //TODO Handle this response from the server
    .then(res => {
      console.log(res.data.data)
      let todos = res.data.data.map(rawTodorData => new ToDo(rawTodorData))
      store.commit('todos', todos)
    })
    .catch(err => console.error(err))
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
    .then ( res => {
      //console.log("todo-service addTodoAsync", res.data)
      this.getTodos()
    })
    .catch(err => console.error(err))

  }

  toggleTodoStatusAsync(todoId) {
    //debugger
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    todo.completed = !todo.completed 
    console.log(todo)

    todoApi.put(todoId, todo)
    //TODO do you care about this data? or should you go get something else?
    .then(res => {
      //console.log(res.data.data)
      this.getTodos()
    })
    .catch(err => console.error(err))
  }

removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    //console.log(store.State.todos)
    //console.log(todoId)
    //debugger
     todoApi.delete(todoId)
      .then(res => {
        this.getTodos()
      })
      .catch(err => console.error(err))
    
  }
}

const todoService = new TodoService();
export default todoService;
