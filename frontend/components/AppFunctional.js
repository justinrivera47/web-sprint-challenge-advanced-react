import React, { useState } from 'react'
import axios from 'axios'

export default function AppFunctional(props) {

  const URL = "http://localhost:9000/api/result"

  const initialState = {
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    message: '',
  }

  const [state, setState] = useState(initialState)


  function reset() {
    setState({
      x: 2,
      y: 2,
      steps: 0,
      email: '',
      message: '',
    })
  }

  const upMove = () => {
    if(state.y === 1){
      setState({
        ...state,
        message: "You can't go up",
      })
      } else{
      setState({
        ...state,
        message: "",
        y: state.y - 1,
        steps: state.steps + 1
      })
    }
  }

  function move(evt) {
    
  }

  function handleChange(evt) {
    console.log(state.email)
    const {value} = evt.target
    setState({
      ...state,
      email: value
    })
  }

  function handleSubmit(evt) {
    // Use a POST request to send a payload to the server.
    evt.preventDefault()
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {/* {
          state.index.map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        } */}
          {state.x===1 && state.y===1?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===2 && state.y===1?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===3 && state.y===1?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===1 && state.y===2?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===2 && state.y===2?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===3 && state.y===2?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===1 && state.y===3?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===2 && state.y===3?<div className="square active">B</div>:<div className="square"></div>}
          {state.x===3 && state.y===3?<div className="square active">B</div>:<div className="square"></div>}
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up" onClick={upMove}>UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" placeholder="type email" value={state.email} onChange={handleChange} />
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
