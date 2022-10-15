import React, { useEffect, useState } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button'
import Card from './shared/Card'

export default function Feedbackform() {

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("Hello");
    
    const handleTexChange = (e) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if( text !== '' && text.length<=10){
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters ' + text + " " +text.length)
        } else {
            setBtnDisabled(false);
            setMessage(null)
        }
        setText(e.target.value);
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            
            <RatingSelect select={(rating) => setRating(rating)}/>
            
            <div className="input-group">
                <input onChange={handleTexChange} type="text" placeholder='Write a review' value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className={`message`}>{message}</div>}
        </form>
    </Card>
  )
}
