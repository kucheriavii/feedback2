import React from 'react';
import PropTypes from 'prop-types';

export default function Header({text}) {
  return (
    <header>
        <div>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI"
}

Header.propTypes = {
    text: PropTypes.string,
    
}
