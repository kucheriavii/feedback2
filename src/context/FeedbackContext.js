import {createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "this iem from context",
            rating: 10
        },
        {
            id: 2,
            text: "this iem from context",
            rating: 10
        },
        {
            id: 3,
            text: "this iem from context",
            rating: 10
        },
        {
            id: 4,
            text: "this iem from context",
            rating: 10
        },
    ])

    const deleteFeedback = (id) => {
        if (window.confirm('Are you shure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        } 
    }
    
    const addFeedback = (newFeedback) => { 
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;