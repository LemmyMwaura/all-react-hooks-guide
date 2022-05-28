import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import RefHook from './RefHook';
import ReducerHook from './ReducerHook';
import LayoutEffectHook from './LayoutEffectHook';

export default function Header() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/UseRefHook">UseRef</Link>
        <Link to="/UseReducerHook">UseReducer</Link>
        <Link to="/UseLayoutEffectHook">UseLayoutEffect</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/UseReducerHook' element={<ReducerHook/>}/>
        <Route path='/UseRefHook' element={<RefHook/>}/>
        <Route path='/UseLayoutEffectHook' element={<LayoutEffectHook/>}/>
      </Routes>
    </BrowserRouter>
  )
}
