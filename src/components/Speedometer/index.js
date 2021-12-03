// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  addSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevObj => ({speed: prevObj.speed + 10}))
    }
  }

  decSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevObj => ({speed: prevObj.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="imageStyle"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h2 className="heading2">Speed is {speed}mph</h2>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button onClick={this.addSpeed} className="accelButton">
            Accelerate
          </button>
          <button onClick={this.decSpeed} className="brakeButton">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
