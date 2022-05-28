import React, { useReducer, useState } from 'react';

const Actions = {
  increment : 'increment',
  decrement : 'decrement',
  addTodo : 'add-todo'
}

const reducer = (state, action) => {
  let { todos, count } = state

  switch(action.type){
    case Actions.increment:
      return { ...state, count : count + 1 } // don't mutate state (state++) increment the state + 1 
    case Actions.decrement:
      return { ...state, count : count - 1 } // don't mutate state (state++) increment the state + 1 
    case Actions.addTodo:
      return {
        ...state, todos : [...todos, action.payload.text] 
      }
    default: return state
  }
}

const initialState = {
  todos : [],
  count: 0 ,
}

export default function ReducerHook() {
  const [{count, todos} , dispatch] = useReducer(reducer, {...initialState})
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === "") return
    dispatch({ type:Actions.addTodo, payload:{ text }})
    setText('')
  }

  return (
    <main className="hook-wrapper">
      <h4 className='hook-title'>Use Reducer</h4>
      <p className='count'>Count: {count}</p>
      <div className="btns">
        <button className='btn btn-increment' onClick={() => {dispatch({ type:Actions.increment })}}> + </button>
        <button className='btn btn-increment' onClick={() => {dispatch({ type:Actions.decrement })}}> - </button>
      </div>
      <form action="" className='hook-form' onSubmit={(e) => onSubmit(e)}>
        <input 
            className='hook-form-input'
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
        />
        <input className='btn form-btn' type="submit" value="add Todo"/>
      </form>
      <div className="todos">
        {todos.length >= 1 && <div className='todos-title'>Todos</div>}
        {todos.map((todo, idx) => {
          return (
            <div className='todo' key={idx}>{todo}</div> 
          )
        })}
      </div>
    </main>
  )
}
