import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackList({handleDelete}) {
  const {feedback} = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0){
    return <p>No feedback yet!</p>
  }
  
  return <div className='feedback-list'>
    <AnimatePresence>
      {feedback.map((item) => (
          <motion.div 
          key={item.id} 
          initial={{opacity:0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <FeedbackItem item={item}
            handleDelete={handleDelete}/>
          </motion.div>
      ))}
    </AnimatePresence>
  </div>
}

