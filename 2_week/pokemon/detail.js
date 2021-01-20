class Detail {
  constructor() {
    this.container = document.querySelector('.wrap-detail')
    // this.render()
    this.fetchDetail('https://pokeapi.co/api/v2/pokemon/1')
  }

  async fetchDetail(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.render(data)
    } catch (error) {
      console.log(error)
    }
  }

  render(data) {
    // 1. 넘겨 받은 포켓몬의 값을 가지고 랜더링
    if (!data) {
      this.container.innerHTML = `
        <h1 class="empty">선택된 포켓몬이 없습니다</h1>
      `
    } else {
      const { name, weight, height } = data
      const nodeList = Object.values(data.sprites)
        .map((item) => {
          if (typeof item === 'string') {
            return `<img src=${item} />`
          }
        })
        .join('')
      this.container.innerHTML = `
        <div class="photo-list">
          ${nodeList}
        </div>
        
        <ul>
          <li>${name}</li>
          <li>${weight}</li>
          <li>${height}</li>
        </ul>
      `
    }
  }
}

export default Detail
