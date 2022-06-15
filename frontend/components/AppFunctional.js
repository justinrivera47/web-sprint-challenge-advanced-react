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

  const postMessage = () => {
    axios.post(URL, { "x": state.x, "y": state.y, "steps": state.steps, "email": state.email})
    .then((res) => {
      setState({
        ...state,
        message: res.data.message,
        email: ''
      })
      // this.resetForm()
    })
    .catch((err) => {
      setState({
        ...state,
        message: err.response.data.message
      })
    })
  }

  const move = (e) => {
    const direction = e.target.id
    switch (direction) {
      case "left":
        if(state.x === 1){
          setState({
            ...state,
            tooFar: true,
            message: "You can't go left"
          })
        } else {
          setState({
            ...state,
            message: "",
            x: state.x - 1,
            tooFar: false,
            steps: state.steps + 1
          })
        }
        break;
      case "right":
        if(state.x === 3){
          setState({
            ...state,
            tooFar: true,
            message: "You can't go right"
          })
        } else {
          setState({
            ...state,
            message: "",
            x: state.x + 1,
            tooFar: false,
            steps: state.steps + 1,
          })
        }
        break;
      case "up":
        if(state.y === 1){
          setState({
            ...state,
            tooFar: true,
            message: "You can't go up"
          })
        } else {
          setState({
            ...state,
            message: "",
            y: state.y - 1,
            tooFar: false,
            steps: state.steps + 1
          })
        }
        break;
      case "down":
        if(state.y === 3){
          setState({
            ...state,
            tooFar: true,
            message: "You can't go down"
          })
        } else {
          setState({
            ...state,
            message: "",
            y: state.y + 1,
            tooFar: false,
            steps: state.steps + 1
          })
        }
        break;
      case "reset":
        setState({
          x: 2,
          y: 2,
          steps: 0,
          email: '',
          tooFar: false,
          message:''
        })
        break;
      default: 
        break
    }
  }

  function handleChange(evt) {
    const {value} = evt.target
    setState({
      ...state,
      email: value
    })
  }

  function handleSubmit(evt) {
    // Use a POST request to send a payload to the server.
    evt.preventDefault()
    postMessage()
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
        <h3 id="steps">{state.steps === 1 ? `You moved ${state.steps} time` : `You moved ${state.steps} times`}</h3>
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
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={move}>reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" placeholder="type email" value={state.email} onChange={handleChange} />
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
