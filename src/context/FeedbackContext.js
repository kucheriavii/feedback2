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
    const [FeedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you shure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        } 
    }
    //add feedback
    const addFeedback = (newFeedback) => { 
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }
    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;