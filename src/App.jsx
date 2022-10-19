import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Feedbackform from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';

function App(){
    
    const [feedback, setFeedback] = useState(FeedbackData);
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you shure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        } 
    }
    return <>
        <Header />
        <div className='container'>
            <Feedbackform handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    </>
}

export default App;