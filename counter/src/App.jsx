import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5);
  //let counter=5;
  const Addvalue =()=>{
    if(counter<=19){
      counter=counter+1;
    setCounter(counter);
    }
  }
  const removevalue =()=>{
    if(counter>=1){
      counter=counter-1;
    setCounter(counter);

    }
  }
  return (
    <>
      <h1>React Project-1</h1>
      <h2>counter:{counter}</h2>

      <button onClick={Addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
