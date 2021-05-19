import React from 'react'
//Basically JS contain UI + Logic
//CSS = seperate / JS + CSS
import { BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

function App() {
  return (
      <Router>
          <Switch>
            <Route path = "/" exact = "true " component = { Home } />
            <Route path = "/about" component = { About } />
          </Switch>
      </Router>
  )

}

export default App;
