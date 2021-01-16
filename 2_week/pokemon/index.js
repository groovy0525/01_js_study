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
    this.list = new List()
    this.Detail = new Detail()
  }
}

new Pokemon()
