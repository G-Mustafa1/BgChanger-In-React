import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-indigo-300") 
  return (
    <>
      <div className={`w-full h-screen duration-200 ${color}`}>
        <div className='flex justify-center items-center fixed inset-x-0 bottom-12 px-2'>
          <div className='bg-white flex gap-3 justify-center rounded-3xl px-3 py-2'>
            <button className='rounded-full shadow-sm px-4 py-2 bg-red-500 text-white' onClick={() => setColor("bg-red-500")}>Red</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-green-500 text-white' onClick={() => setColor("bg-green-500")}>Green</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-blue-500 text-white' onClick={() => setColor("bg-blue-500")}>Blue</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-yellow-500 text-white' onClick={() => setColor("bg-yellow-500")}>Yellow</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-purple-500 text-white' onClick={() => setColor("bg-purple-500")}>Purple</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-orange-500 text-white' onClick={() => setColor("bg-orange-500")}>Orange</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-pink-500 text-white' onClick={() => setColor("bg-pink-500")}>Pink</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-amber-800 text-white' onClick={() => setColor("bg-amber-800")}>Brown</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-gray-500 text-white' onClick={() => setColor("bg-gray-500")}>Gray</button>
            <button className='rounded-full shadow-sm px-4 py-2 bg-black text-white' onClick={() => setColor("bg-black")}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
