
import './App.css'
import { useState } from "react"

function App() {
    const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200' style={{background: color}}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{background: "red"}}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button 
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{background: "green"}}
            >  
              Green
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{background: "blue"}}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{background: "pink"}}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              onClick={() => setColor("purple")}
              style={{background: "purple"}}
            >
              Purple
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{background: "yellow"}}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{background: "violet"}}
              onClick={() => setColor("violet")}
            >
              Violet
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{background: "orange"}}
              onClick={() => setColor("orange")}  
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
