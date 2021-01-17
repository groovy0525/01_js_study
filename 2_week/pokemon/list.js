class List {
  constructor() {
    this.container = document.querySelector('.wrap-list')
    this.name
    this.loadPokemon()
  }
  // 1. fetch
  // 2. 결과물을 바탕으로 render
  // 3. 일어난 액션의 url을 detail 에게 전달

  loadPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((json) => {
        this.display(json.results)
        this.addEvent()
      })
      .catch((e) => console.log(e))
  }

  display(items) {
    this.render(items)
  }

  addEvent() {
    const list = document.querySelectorAll('.wrap-list li')
    list.forEach((listItem) =>
      listItem.addEventListener('click', this.HandleEvent),
    )
  }

  HandleEvent(event) {
    const name = event.target.innerHTML
    this.name = name
    console.log(this.name)
  }

  render(items) {
    this.container.innerHTML = items
      .map((item) => `<li>${item.name}</li>`)
      .join('')
  }
}

export default List
