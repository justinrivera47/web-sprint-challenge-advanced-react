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

  onChange = (e) => {
    const {value} = e.target
    this.setState({
      ...this.state,
      email: value
    })
  }

  postMessage = () => {
    axios.post(URL, { "x": this.state.x, "y": this.state.y, "steps": this.state.steps, "email": this.state.email})
    .then((res) => {
      console.log(res.data.message)
      this.setState({
        ...this.state,
        message: res.data.message,
        email: ''
      })
      // this.resetForm()
    })
    .catch((err) => {
      this.setState({
        ...this.state,
        message: err.response.data.message
      })
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.postMessage()
  }

  resetForm = () => {
    this.setState({
      ...this.state,
      email: ''
    })
  }

  move = (e) => {
    const direction = e.target.id
    switch (direction) {
      case "left":
        if(this.state.x === 1){
          this.setState({
            ...this.state,
            tooFar: true,
            message: "You can't go left"
          })
        } else {
          this.setState({
            ...this.state,
            message: "",
            x: this.state.x - 1,
            tooFar: false,
            steps: this.state.steps + 1
          })
        }
        break;
      case "right":
        if(this.state.x === 3){
          this.setState({
            ...this.state,
            tooFar: true,
            message: "You can't go right"
          })
        } else {
          this.setState({
            ...this.state,
            message: "",
            x: this.state.x + 1,
            tooFar: false,
            steps: this.state.steps + 1,
          })
        }
        break;
      case "up":
        if(this.state.y === 1){
          this.setState({
            ...this.state,
            tooFar: true,
            message: "You can't go up"
          })
        } else {
          this.setState({
            ...this.state,
            message: "",
            y: this.state.y - 1,
            tooFar: false,
            steps: this.state.steps + 1
          })
        }
        break;
      case "down":
        if(this.state.y === 3){
          this.setState({
            ...this.state,
            tooFar: true,
            message: "You can't go down"
          })
        } else {
          this.setState({
            ...this.state,
            message: "",
            y: this.state.y + 1,
            tooFar: false,
            steps: this.state.steps + 1
          })
        }
        break;
      case "reset":
        this.setState({
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
          <button id="left" onClick={this.move}>LEFT</button>
          <button id="up" onClick={this.move}>UP</button>
          <button id="right" onClick={this.move}>RIGHT</button>
          <button id="down" onClick={this.move}>DOWN</button>
          <button id="reset" onClick={this.move}>reset</button>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <input id="email" type="email" placeholder="type email" value={this.state.email} onChange={this.onChange}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
