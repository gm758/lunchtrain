import React, { Component } from 'react'
import TimeInput from './TimeInput'

class GoogleListEntry extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      departure: Date.now(),
      arrival: Date.now(),
    }

    this.handleArrivalChange = this.handleArrivalChange.bind(this)
    this.handleDepartureChange = this.handleDepartureChange.bind(this)
  }

  handleArrivalChange(e) {
    this.setState({ arrival: e.target.value })
  }

  handleDepartureChange(e) {
    this.setState({ departure: e.target.value })
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>Price: {this.props.price}</div>
        <div>Rating: {this.props.rating}</div>
        <div>{this.props.open}</div>
        <div>{this.props.vicinity}</div>
        <TimeInput
          departureTime={this.state.departure}
          arrivalTime={this.state.arrival}
          handleDepartureChange={this.handleDepartureChange}
          handleArrivalChange={this.handleArrivalChange}
        />
        <button>Submit that shit!</button>
      </div>
    );
  }
}

export default GoogleListEntry

