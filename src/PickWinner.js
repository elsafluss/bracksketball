import React, { Component } from "react"
import './PickWinner.css'
import Either from "./Either"

class PickWinner extends Component {
    constructor() {
        super()
        this.state = {}
    }

    getPairing(first, second) {
        return this.props.teams.reduce((total, value) => {
            if(value.Seed === first || value.Seed === second) {
                total.push(value)
            }
            return total
        }, [])
    }
    
    render() {
        if (this.props.teams) {
          const pair1 = this.getPairing(1, 16)
          const pair2 = this.getPairing(8, 9)
          const pair3 = this.getPairing(5, 12)
          const pair4 = this.getPairing(4, 13)
          const pair5 = this.getPairing(6, 11)
          const pair6 = this.getPairing(3, 14)
          const pair7 = this.getPairing(7, 10)
          const pair8 = this.getPairing(2, 15)
          return (
            <div className="container">
              <div>Which mascot would win?</div>
              <Either teams={pair1} />
              <br></br>
              <Either teams={pair2} />
              <br></br>
              <Either teams={pair3} />
              <br></br>
              <Either teams={pair4} />
              <br></br>
              <Either teams={pair5} />
              <br></br>
              <Either teams={pair6} />
              <br></br>
              <Either teams={pair7} />
              <br></br>
              <Either teams={pair8} />
            </div>
          )
        } else {
          return null
        }
} 
}

export default PickWinner