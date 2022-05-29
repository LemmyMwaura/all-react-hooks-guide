import React, { useLayoutEffect, useRef, useState } from 'react'

export default function LayoutEffectHook() {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()

  useLayoutEffect(() => {
    if(popup.current == null || button.current == null) return
    const {bottom} = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px`
  },[show])

  return (
    <main className='hook-wrapper'>
      <h4 className="hook-title">LayoutEffectHook</h4>
      <button className='btn' ref={button} onClick={() => setShow(prevshow => !prevshow)}>
        Click Here
      </button>
      {show && (
        <div className='popup' style={{ position:'absolute' }} ref={popup}>
          This is a Popup
        </div>
      )}
    </main>
  )
}
