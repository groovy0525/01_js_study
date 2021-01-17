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
    this.detail = new Detail()
  }

  changeDetail(url) {
    this.detail = {
      ...this.detail,
      url,
    }
  }
}

new Pokemon()
