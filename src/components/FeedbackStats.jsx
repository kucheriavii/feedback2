import React from 'react'
import PropTypes from 'prop-types';

export default function FeedbackStats({feedback}) {
  //calculete rating averege
  let averege = feedback.reduce((acc, cur) => {
    return acc+cur.rating
  }, 0)/feedback.length

  averege = averege.toFixed(1).replace(/[.,]0$/,'');


  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Averege Rating: {isNaN(averege)?0:averege}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}
