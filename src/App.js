import React from 'react'
//Basically JS contain UI + Logic
//CSS = seperate / JS + CSS

function GreetComponent(props){
  return <div>
  <h1>Hello , {props.name}</h1>
  {props.children}
  </div>
}

function App() {
  return (
    <GreetComponent name = "Swup" >
      <p>This text will go to props.children</p>
    </GreetComponent>


  )

}

export default App;
