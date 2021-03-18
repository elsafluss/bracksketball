import React, { Component } from "react"
import Select from "react-select"
import topLeft from "./data/topLeftTeams.json"
import topRight from "./data/topRightTeams.json"

class Chooser extends Component {
  constructor() {
    super()
    this.state = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0
    }
  }

  handleChange = (event, choiceID) => {
    this.setState({ [choiceID]: event.value })
  }

  render() {
    const opts1 = topLeft.map((team) => {
      return {
        value: team.TeamID,
        label: team.Name,
      }
    })
    const opts2 = topLeft
      .filter((team) => team.TeamID !== this.state.one)
      .map((team) => {
        return {
          value: team.TeamID,
          label: team.Name,
        }
      })
    const opts3 = topRight.map((team) => {
      return {
        value: team.TeamID,
        label: team.Name,
      }
    })
    const opts4 = topRight
      .filter((team) => team.TeamID !== this.state.three)
      .map((team) => {
        return {
          value: team.TeamID,
          label: team.Name,
        }
      })
    return (
      <div>
        <div>
          teams on the top left, whatever that means
          <Select
            options={opts1}
            placeholder="Choose one team"
            onChange={(event) => this.handleChange(event, "one")}
          ></Select>
          <Select
            options={opts2}
            placeholder="Choose a different team"
            onChange={(event) => this.handleChange(event, "two")}
          ></Select>
        </div>
        <div>
          teams on the top right, whatever that means
          <Select
            options={opts3}
            placeholder="Choose one team"
            onChange={(event) => this.handleChange(event, "three")}
          ></Select>
          <Select
            options={opts4}
            placeholder="Choose a different team"
            onChange={(event) => this.handleChange(event, "four")}
          ></Select>
        </div>
      </div>
    )
  }
}

export default Chooser
