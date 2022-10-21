import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Feedbackform from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/About';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

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
    <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={<>
                        <Feedbackform handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </>}></Route>
                    
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/post/:id/:name' element={<Post />} />
                    <Route path='/post*' element={<Post />} />
                </Routes>
                
            </div>
            <AboutIconLink />
        </Router>
    </FeedbackProvider>
    </>
}

export default App;