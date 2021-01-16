class List {
  constructor() {
    this.container = document.querySelector('.wrap-list')

    this.render()
  }
  // 1. fetch
  // 2. 결과물을 바탕으로 render
  // 3. 일어난 액션의 url을 detail 에게 전달

  render() {
    this.container.innerHTML = `
      <ul>
        <li>피카츄</li>
        <li>라이츄</li>
      </ul>
    `
  }
}

export default List
