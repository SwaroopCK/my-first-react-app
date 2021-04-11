import React , {useState} from 'react'
//Basically JS contain UI + Logic
//You can have seperate css file
//CSS = seperate / JS + CSS



function App() {

  const [name , setName] = useState('') 
  const [password , setPassword] = useState('')
  return (
    <div> 
      <input type = "text" value =  {name} onChange = {updateTextField} />
      <input type = "password" value =  {password} onChange = {updatePasswordField} />
      <button onClick = {submitForm}>Submit Form</button>
    </div>
  )

  function updateTextField(event){
    setName(event.target.value)
  }

  function updatePasswordField(event){
    setPassword(event.target.value)
  }

  function submitForm(){
    console.log(name,password)
  }
}

export default App;
