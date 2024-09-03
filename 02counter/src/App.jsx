import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
      //counter = counter + 1;
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      //bunch m update hota h babel krta h to ek hi baar update hoga isma

      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      //isma har baat 1 update hoga kyu ki ye prevcounter le raha h
      console.log("clicked", counter);
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("clicked", counter);
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value</button>
      <br/>
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
