import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Feedbackform from './components/FeedbackForm';
import AboutPage from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function App(){

    return <>
    <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={<>
                        <Feedbackform />
                        <FeedbackStats  />
                        <FeedbackList />
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