import React, { useState } from 'react'

export default function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setext] = useState('This is an example of a feedback item');

  const handleClick = () => {
    setRating((prev) => {
        console.log(prev);
        return prev+1;
    })
  }


    return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{text}</div>
    </div>
  )
}
