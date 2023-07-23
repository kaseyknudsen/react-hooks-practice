import React from 'react'
import { useState, useRef } from 'react'
const UseRef = () => {
    const [name, setName] = useState("")
    const inputEl = useRef()

    const focus = () => {
        inputEl.current.focus()
    }
  return (
    <div>
        <div className="name">
            <input ref={inputEl} value={name} onChange={(e) => setName(e.target.value) }></input>
            <div>my name is {name}</div>
            <button style={{marginTop: '10px'}} onClick={focus}>Focus</button>
        </div>
    </div>
  )
}

export default UseRef