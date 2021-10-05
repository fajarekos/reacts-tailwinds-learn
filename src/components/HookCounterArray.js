import React, { useState } from 'react'

function HookCounterArray() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  return (
    <div>
      {/* <button type="button" className="bg-red-700 px-8 py-2 rounded-md border text-white shadow-lg" > addItem </button> */}

      <button 
        type="button" 
        className="inline-flex items-center px-4 py-2 bg-red-700 px-8 py-2 rounded-md border text-white shadow-lg transition ease-in-out duration-150" 
        onClick={addItem}
        disabled="">
        <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing
      </button>

      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin">
      </div>

      <ul className="divide-y divide-light-blue-400">
        {items.map(item => (
          <li key={item.id}>{ item.value }</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterArray
