import React, { useState } from 'react'
import axios from 'axios'

// Suggested initial states
// const initialMessage = ''
// const initialEmail = ''
// const initialSteps = 0
// const initialIndex = 4 
// the index the "B" is at

export default function AppFunctional(props) {

  const URL = "http://localhost:9000/api/result"

  const initialState = {
    index: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    message: '',
  }

  const [state, setState] = useState(initialState)


  function reset() {
    // Use this helper to reset all states to their initial values.
  }

  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
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
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {
          state.index.map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" placeholder="type email" value={state.email} onChange={handleChange} />
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
