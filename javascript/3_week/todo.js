class Todo {
  constructor(text) {
    this.id = Date.now() + Math.floor(Math.random() * 9999)
    this.text = text
    this.isDone = false
  }
}

export default Todo
