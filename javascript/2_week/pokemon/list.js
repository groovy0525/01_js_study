import { fetchPokemons } from './service'

class List {
  constructor(props) {
    this.container = document.querySelector('.wrap-list')
    this.pokemons = null
    this.props = props

    this.componentWillMount()
  }
  async componentWillMount() {
    try {
      const data = await fetchPokemons()

      this.setPokemons(data.results)

      this.addEvent()
    } catch (error) {
      console.log(error)
    }
  }

  setPokemons(data) {
    this.pokemons = data
    this.render(this.pokemons)
  }

  addEvent() {
    this.container.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        this.props.onClickPokemon(e.target.dataset.url)
      }
    })
  }

  render(items) {
    this.container.innerHTML = items
      .map((item) => `<li data-url=${item.url}>${item.name}</li>`)
      .join('')
  }
}

export default List
