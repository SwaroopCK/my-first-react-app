import React , {useState} from 'react'
//Basically JS contain UI + Logic
//You can have seperate css file
//CSS = seperate / JS + CSS



function App() {

  let [counter , setCounter] = useState(0) // returns [0 , function]

  function buttonWasClicked(){
    setCounter(counter + 1);
  }
  return (
    <div> 
      <button onClick = {buttonWasClicked}>Button</button> 
      <h1>{counter}</h1>
    </div>
  )
}

export default App;
