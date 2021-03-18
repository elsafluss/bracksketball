import React, { Component } from "react"

class Either extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    if(this.props.teams) {
        return (
            <div>
        <p>{this.props.teams[0].Name}</p>
        <p>{this.props.teams[1].Name}</p>
        {this.props.teams[2] && <p>{this.props.teams[2].Name}</p>}
      </div>
    )
    } else {
        return null
    }
  }
}

export default Either
