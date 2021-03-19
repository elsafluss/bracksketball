import React, { Component } from "react"
import './Either.css'

class Either extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleClick = () => {
      // put this team into a bracket
      // that i haven't built yet
  }

  render() {
    if (this.props.teams) {
      return (
        <div className="options">
          <div className="team-one">
            <p>{this.props.teams[0].Name}</p>
            <img src={this.props.teams[0].TeamLogoUrl} alt="the team"></img>
          </div>
          <span className="vs">VS</span>
          <div className="team-two">
            <p>{this.props.teams[1].Name}</p>
            <img
              src={this.props.teams[1].TeamLogoUrl}
              alt="the other team"
            ></img>
          </div>

          {/* {this.props.teams[2] && (
            <div className="team-three">
              <p>{this.props.teams[2].Name}</p>
              <img src={this.props.teams[0].TeamLogoUrl} alt="the team"></img>
            </div>
          )} */}
        </div>
      )
    } else {
      return null
    }
  }
}

export default Either
