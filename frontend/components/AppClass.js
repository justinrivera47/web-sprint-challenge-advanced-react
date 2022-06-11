import React from 'react'
import axios from 'axios'


const URL = "http://localhost:9000/api/result"
const initialState ={
x: 2,
y: 2,
steps: 0,
email: '',
tooFar: false,
arr: [],
message:''
}

export default class AppClass extends React.Component {
  state = initialState



  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">{this.state.steps === 1 ? `You moved ${this.state.steps} time` : `You moved ${this.state.steps} times`}</h3>
        </div>
        <div id="grid">
          {/* {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
                {idx === 4 ? 'B' : null}
              </div>
            ))
          } */}
          {this.state.x===1 && this.state.y===1?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===2 && this.state.y===1?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===3 && this.state.y===1?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===1 && this.state.y===2?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===2 && this.state.y===2?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===3 && this.state.y===2?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===1 && this.state.y===3?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===2 && this.state.y===3?<div className="square active">B</div>:<div className="square"></div>}
          {this.state.x===3 && this.state.y===3?<div className="square active">B</div>:<div className="square"></div>}
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
