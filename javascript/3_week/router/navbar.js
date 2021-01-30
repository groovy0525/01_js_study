class Navbar {
  constructor(props) {
    this.props = props
    this.event()
  }

  event() {
    document.querySelector('.wrap-navbar').addEventListener('click', (e) => {
      if (e.target.classList.contains('backBtn')) {
        this.props.router.back()
        return
      }
      if (e.target.tagName === 'LI') {
        const path = e.target.dataset.path

        console.log(path)
        this.props.router.push(path)
      }
    })
  }
}

export default Navbar
