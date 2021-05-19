import React from 'react'
//Basically JS contain UI + Logic
//CSS = seperate / JS + CSS
import { BrowserRouter as Router , Switch , Route , Link}from 'react-router-dom'

function Home() {
  return <h1>Home</h1> 
}

function About() {
  return <h1>About</h1>
}

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
