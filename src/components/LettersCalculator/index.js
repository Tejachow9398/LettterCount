// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0, search: ''}

  onchange = event => {
    this.setState({
      count: event.target.value.length,
      search: event.target.value,
    })
  }

  render() {
    const {count, search} = this.state
    return (
      <div className="cont">
        <div className="text">
          <h1> Calculate the Letters you enter</h1>
          <label htmlFor="html" className="para">
            Enter the phrase
          </label>
          <br />
          <input
            type="Search"
            placeholder="Enter the phrase"
            className="type"
            value={search}
            onChange={this.onchange}
            id="html"
          />
          <br />
          <p className="btn"> No.of letters: {count}</p>
        </div>
        <div className="pic">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt=" letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
