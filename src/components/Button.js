import React from 'react'
import PropTypes from 'prop-types'

const button = ({ color, text, onclick }) => {
    button.defaultProps = {
        color: "steelblue"
    }

    button.propTypes = {
        color: PropTypes.string,
        text: PropTypes.string
    }
    
    return (
        <div>
            <button onClick={onclick} className='btn' style={{ backgroundColor: color }}>{text}</button>
        </div>
    )

    
}

export default button