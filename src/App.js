import React, { Component } from "react"
import topLeftTeams from './data/west.json'
import topRightTeams from "./data/south.json"
import bottomLeftTeams from "./data/north.json"
import bottomRightTeams from "./data/east.json"
import PickWinner from "./PickWinner.js"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      region: null,
      teams: null
    }
  }

  handleChange = (event) => {
    this.setState({ region: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault()
    if (this.state.region === "top left") {
      this.setState({ teams: topLeftTeams })
    } else if (this.state.region === "top right") {
      this.setState({ teams: topRightTeams })
    } else if (this.state.region === "bottom left") {
      this.setState({ teams: bottomLeftTeams })
    } else if (this.state.region === "bottom right") {
      this.setState({ teams: bottomRightTeams })
    } else {
      console.log('oh dang no teams?!')
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Header</header>
        <form>
          <select onChange={this.handleChange}>
            <option value='top left'>top left</option>
            <option value='top right'>top right</option>
            <option value='bottom left'>bottom left</option>
            <option value='top right'>bottom right</option>
          </select>
          <button onClick={this.handleClick}>click me</button>
        </form>
        {(this.state.region !== null && this.state.teams !== null) && <PickWinner region={this.state.region} teams={this.state.teams}/>}
      </div>
    )
  }
}

export default App
