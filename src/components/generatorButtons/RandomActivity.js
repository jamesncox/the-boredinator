import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_ACTIVITY_ALL
} from '../../actionTypes'

function RandomActivity(props) {

    const handleClick = () => {
        props.setRandomActivityFromAll()
    }

    return (
        <button
            className="random-activity"
            onClick={e => handleClick(e)}
        >
            Show me a random activity
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomActivityFromAll: () => dispatch({ type: SET_RANDOM_ACTIVITY_ALL })
})

export default connect(null, mapDispatchToProps)(RandomActivity)