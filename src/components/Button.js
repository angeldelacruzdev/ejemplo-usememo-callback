import React from 'react'

export const Button = React.memo(({increment, decrement}) => {

    console.log('CallBack')
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
