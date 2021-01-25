import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_FAMILY
} from '../../actionTypes'

function Family(props) {

    const handleClick = () => {
        props.setRandomFamily()
    }

    return (
        <button
            className="light-button"
            onClick={e => handleClick(e)}
        >
            Family
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomFamily: () => dispatch({ type: SET_RANDOM_FAMILY })
})

export default connect(null, mapDispatchToProps)(Family)