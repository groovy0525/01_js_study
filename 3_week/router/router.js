class Router {
  constructor(routes) {
    this.routes = routes
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
