import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button'
import Card from './shared/Card'

export default function Feedbackform() {

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("Hello");
    
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext); 

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
                feedbackEdit.edit = false
            } else {
                addFeedback(newFeedback)
            }

            setText('');
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
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
