import List from './list'
import Detail from './detail'

/**
 * <Pokemon>
 *  <Detail />
 *  <List />
 * </Pokemon>
 */

class Pokemon {
  constructor() {
    this.list = new List({ onClickPokemon: this.handleClickPokemon.bind(this) })
    this.detail = new Detail()
  }

  handleClickPokemon(url) {
    console.log('url', url)
    console.log(this)
    this.detail.setPokemon(url)
  }
}

new Pokemon()
