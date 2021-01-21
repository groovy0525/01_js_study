class List {
  constructor() {
    this.container = document.querySelector('.wrap-list')
    this.name = ''
    this.fetchList()
  }
  // 1. fetch
  // 2. 결과물을 바탕으로 render
  // 3. 일어난 액션의 url을 detail 에게 전달

  async fetchList() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      this.display(data.results)
      this.addEvent()
    } catch (error) {
      console.log(error)
    }
  }

  display(items) {
    this.render(items)
  }

  addEvent() {
    this.container.addEventListener('click', this.handleEvent)
  }

  handleEvent(event) {
    if (event.target.tagName === 'LI') {
      const name = event.target.innerHTML
      this.name = name
      console.log(this.name)
    }
  }

  render(items) {
    this.container.innerHTML = items
      .map((item) => `<li>${item.name}</li>`)
      .join('')
  }
}

export default List
