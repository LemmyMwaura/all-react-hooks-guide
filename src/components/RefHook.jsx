import React, { useRef, useState, useEffect } from 'react';

export default function RefHook() {
  const [name, setName] = useState()
  const renderCount = useRef(0)
  const inputRef = useRef()

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const focus = () => {
    console.log(inputRef.current)
  }

  return (
    <main className='hook-wrapper'>
      <h4 className='hook-title'>Use Ref</h4>
      <input 
        className="hook-form-input"
        ref={inputRef} 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <div className="name">My name is {name}</div>
      <div>I rendered: {renderCount.current} times</div>
      <button className='btn' onClick={focus}>focus</button>
    </main>
  )
}
