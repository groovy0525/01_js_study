import Todo from './todo'

class TodoList {
  constructor() {
    this.list = []
    this.filteredList = []
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
  filterTodos(type) {
    // 2개 이상 ? switch 고려
    switch (type) {
      case type === 'ALL': {
        this.filteredList = [...this.list]
        return
      }
      case type === 'DONE': {
        this.filteredList = this.list.filter((todo) => todo.isDone)
        return
      }
      case type === 'DOING': {
        this.filteredList = this.list.filter((todo) => !todo.isDone)
        return
      }
      default: {
        this.filteredList = this.list
      }
    }
  }
}

export default TodoList
