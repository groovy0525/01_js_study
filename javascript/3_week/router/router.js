class Router {
  constructor(routes) {
    this.routes = routes

    this.initialize()
  }

  initialize() {
    const { pathname } = document.location

    this.render(pathname)
    this.event()
  }

  event() {
    window.addEventListener('popstate', () => {
      console.log(document.location)

      const { pathname } = document.location

      this.render(pathname)
    })
  }

  push(path) {
    window.history.pushState({}, path, window.location.origin + path)

    this.render(path)
  }

  back() {
    window.history.back()
  }

  replace(path) {
    window.history.replaceState({}, path, window.location.origin + path)

    this.render(path)
  }

  // /login
  render(path) {
    const Component = this.routes[path]

    if (!Component) {
      return
    }
    new Component().render()
  }
}

export default Router
// push('/') or push('/login')
