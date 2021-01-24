class Todo {
  constructor(text) {
    this.id = Date.now()
    this.text = text
    this.isDone = false
  }
}

export default Todo
