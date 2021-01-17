class Detail {
  constructor() {
    this.container = document.querySelector('.wrap-detail')
    this.render()
  }

  loadInfo(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.render(data))
      .catch((e) => console.log(e))
  }

  render(data) {
    // 1. 넘겨 받은 포켓몬의 값을 가지고 랜더링
    if (data) {
      this.container.innerHTML = `
        <div class="photo-list">
          ${Object.values(data.sprites)
            .map((item) => {
              if (typeof item === 'string') {
                return `<img src=${item} />`
              }
            })
            .join('')}
        </div>
        
        <ul>
          <li>${data.name}</li>
          <li>${data.weight}</li>
          <li>${data.height}</li>
        </ul>
      `
    } else {
      this.container.innerHTML = `
        <h1 class="empty">선택된 포켓몬이 없습니다</h1>
      `
    }
  }
}

export default Detail
