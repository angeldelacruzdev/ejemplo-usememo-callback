import React from 'react'
import PropTypes from 'prop-types';

export const Button = React.memo(({increment, decrement}) => {

    return (
        <>
        <button
            className="btn btn-primary" 
            onClick={() => increment()}
        >
            Increment Number
        </button>

           <button
            className="btn btn-primary ml-1" 
            onClick={() => decrement()}
        >
            Decrement Number
        </button>
        </>
    )
})


Button.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};