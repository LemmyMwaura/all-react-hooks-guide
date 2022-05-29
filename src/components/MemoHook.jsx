import React, { useEffect, useMemo, useState } from "react"

export default function MemoHook() {
  const [isDark, setTheme] = useState(false)
  const [count, setCount] = useState(0)

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? 'white' : 'black',
      transition : `${0.2}s`
    }
  }, [isDark])

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])

  return (
    <div style={themeStyles} className='hook-wrapper'>
      <h4 className="hook-title">UseMemo</h4>
      <button className="btn" onClick={() => setTheme(prevTheme => !prevTheme)}
      >
        Toogle Theme
      </button>
      <button className="btn" onClick={() => setCount(prevCount => prevCount + 1)}>Increment: {count}</button>
    </div>
  )
}
