import Todo from '../todo'
import TodoList from '../todo-list'

describe('<Todo List> 테스트', () => {
  it('addTodo => Todo 를 추가하면 list length 가 1이 된다.', () => {
    const todoList = new TodoList()
    todoList.addTodo(new Todo('먹기'))
    expect(todoList.list.length).toEqual(1)
  })

  it('removeTodo => Todo 를 삭제하면 list length 가 0이 된다.', () => {
    const todoList = new TodoList()
    todoList.addTodo({ id: 1, text: '산책', isDone: false })
    todoList.removeTodo(1)
    expect(todoList.list.length).toEqual(0)
  })

  it('updateStatus => Todo 의 status 를 업데이트하면 토글된다.', () => {
    const todoList = new TodoList()
    todoList.addTodo({ id: 1, text: '산책', isDone: false })
    expect(todoList.updateStatus(1)).toEqual({
      id: 1,
      text: '산책',
      isDone: true,
    })
  })

  it('filterTodos', () => {})
})
