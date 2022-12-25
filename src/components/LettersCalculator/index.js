import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, inputText: ''}

  fun = event => {
    console.log(event)

    this.setState({
      count: event.target.value.length,
      inputText: event.target.value,
    })
  }

  changetoZero = () => {
    this.setState({count: 0, inputText: ''})
  }

  render() {
    const {count, inputText} = this.state
    return (
      <div className="mainDiv">
        <div className="subdiv">
          <div className="gamecon">
            <h1>Calculate the letters you Enter</h1>
            <label htmlFor="inputele">Enter the phrase</label>
            <input
              type="text"
              onChange={this.fun}
              id="inputele"
              className="inou"
              value={inputText}
              placeholder="Enter the phrase"
            />
            <br />
            <p className="para" type="button" onClick={this.changetoZero}>
              No.of letters: {count}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="aspect"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
