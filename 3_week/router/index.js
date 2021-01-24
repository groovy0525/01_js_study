import HomePage from './pages/home'
import DetailPage from './pages/detail'
import LoginPage from './pages/login'

import Router from './router'
import Navbar from './navbar'

const ROUTES = {
  '/': HomePage,
  '/detail': DetailPage,
  '/login': LoginPage,
}

class App {
  constructor() {
    this.router = new Router(ROUTES)
    this.navbar = new Navbar({ router: this.router })
  }
}

new App()
