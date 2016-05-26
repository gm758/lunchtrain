import React from 'react'
import GoogleListEntry from './GoogleListEntry'

function GoogleList(props) {
  return (
    <div>
      <h4>Schedule <img src="assets/lunchtrainlogotr.png" alt="train-logo" className="mini-logo" /> Train</h4>
      {props.list.map(entry =>
        <GoogleListEntry
          name={entry.name}
          rating={entry.rating}
          open={entry.opening_hours.open_now}
          id={entry.place_id}
        />
      )}
    </div>
  )
}

export default GoogleList
