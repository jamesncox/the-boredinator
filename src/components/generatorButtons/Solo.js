import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_SOLO
} from '../../actionTypes'

function Solo(props) {

    const handleClick = () => {
        props.setRandomSolo()
    }

    return (
        <button
            className="dark-button"
            onClick={e => handleClick(e)}
        >
            Solo
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomSolo: () => dispatch({ type: SET_RANDOM_SOLO })
})

export default connect(null, mapDispatchToProps)(Solo)