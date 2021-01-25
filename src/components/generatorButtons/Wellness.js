import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_WELLNESS
} from '../../actionTypes'

function Wellness(props) {

    const handleClick = () => {
        props.setRandomWellness()
    }

    return (
        <button
            className="dark-button"
            onClick={e => handleClick(e)}
        >
            Wellness
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomWellness: () => dispatch({ type: SET_RANDOM_WELLNESS })
})

export default connect(null, mapDispatchToProps)(Wellness)