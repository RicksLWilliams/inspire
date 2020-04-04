export default class ToDo {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this._id = data._id || ''  //generateId()
    this.completed = data.completed
    this.user = data.user
    this.description = data.description || []
  }

  get Template(){
    //let tempId = this._id
    //console.log(tempId)
    //console.log(this._id)
    //console.log(this.description)

    return `
    <div class="form-check">
    <input type="checkbox" class="form-check-input" name="" id="done" onclick="app.todoController.toggleTodoStatus('${this._id}')">
    <label class="form-check-label" for="done"><h5>${this.description}</h5></label>
    <button type="button" class="close text-danger" onclick="app.todoController.removeTodo('${this._id}')">
    <span >&times;</span>
    </button>
    </div>
    `
  }




}