import TodoList from '../todo-list'

describe('<Todo List> 테스트', () => {
  it('addTodo => Todo 를 추가하면 list length 가 1이 된다.', () => {
    const todoList = new TodoList()
    todoList.addTodo('먹기')
    expect(todoList.list.length).toEqual(1)
  })

  it('removeTodo => Todo 를 삭제하면 list length 가 0이 된다.', () => {
    const todoList = new TodoList()
    todoList.addTodo('산책')

    const [todo] = todoList.list

    todoList.removeTodo(todo.id)
    expect(todoList.list.length).toEqual(0)
  })

  it('updateStatus => Todo 의 status 를 업데이트하면 토글된다.', () => {
    const todoList = new TodoList()

    todoList.addTodo('산책')

    expect(todoList.list[0].isDone).toBeFalsy()

    todoList.updateStatus(todoList.list[0].id)

    expect(todoList.list[0].isDone).toBeTruthy()
  })

  it('filterTodos', () => {
    const todoList = new TodoList()

    todoList.addTodo('산책1')
    todoList.addTodo('산책2')
    todoList.addTodo('산책3')
    todoList.addTodo('산책4')

    todoList.updateStatus(todoList.list[0].id)
    todoList.updateStatus(todoList.list[1].id)

    todoList.filterTodos('ALL')
    expect(todoList.list.length).toBe(4)

    todoList.filterTodos('DONE')
    expect(todoList.list.length).toBe(2)

    todoList.filterTodos('DOING')
    expect(todoList.list.length).toBe(2)

    todoList.filterTodos('ERROR')
    expect(todoList.list.length).toBe(4)
  })
})
