class Detail {
  constructor() {
    this.container = document.querySelector('.wrap-detail')
  }

  render(pokemon) {
    // 1. 넘겨 받은 포켓몬의 값을 가지고 랜더링

    this.container.innerHTML = `
      <div>선택된 포켓몬이 없습니다</div>
    `
  }
}

export default Detail
