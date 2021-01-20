import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_OUTSIDE
} from '../../actionTypes'

function Outside(props) {

    const handleClick = () => {
        props.setRandomOutside()
    }

    return (
        <button
            className="outside-button"
            onClick={e => handleClick(e)}
        >
            Outside
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomOutside: () => dispatch({ type: SET_RANDOM_OUTSIDE })
})

export default connect(null, mapDispatchToProps)(Outside)