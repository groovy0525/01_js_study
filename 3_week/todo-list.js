import Todo from './todo'

class TodoList {
  constructor() {
    this.list = []
    this.filterList = []
  }

  // 추가
  addTodo(text) {
    const todo = new Todo(text)
    this.list = [...this.list, todo]
  }

  // 삭제
  removeTodo(id) {
    this.list = this.list.filter((todo) => todo.id !== id)
  }

  // 상태 값 수정
  updateStatus(id) {
    this.list = this.list.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    )
  }

  // 필터링
  // ALL / DONE / DOING
  filterTodos(done) {
    if (done === 'ALL') {
      this.filterList = [...this.list]
      return
    }

    if (done === 'DONE') {
      this.filterList = this.list.filter((todo) => todo.isDone === true)
    }

    if (done === 'DOING') {
      this.filterList = this.list.filter((todo) => todo.isDone === false)
    }
  }
}

export default TodoList
