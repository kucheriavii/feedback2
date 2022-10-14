import React, { useState } from 'react'

export default function FeedbackItem({item}) {
 
    return (
    <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
    </div>
  )
}
