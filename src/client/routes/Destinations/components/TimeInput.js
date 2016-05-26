import React from 'react';

function TimeInput(props) {
  return (
    <div>
      <input type="datetime-local"
             value={props.departureTime}
             onChange={props.handleDepartureChange}
      />
      <input type="datetime-local"
             value={props.arrivalTime}
             onChange={props.handleArrivalChange}
      />

    </div>
  )
}

export default TimeInput
