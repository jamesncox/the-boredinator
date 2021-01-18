import React from 'react'

function RandomActivity(props) {

    const handleClick = () => {
        console.log("inside randomActivity click")
    }

    return (
        <button
            className="random-activity"
            onClick={e => handleClick(e)}
        >
            Show me a new activity!
        </button>
    )
}

export default RandomActivity