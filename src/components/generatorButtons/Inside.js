import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_INSIDE
} from '../../actionTypes'

function Inside(props) {

    const handleClick = () => {
        props.setRandomInside()
    }

    return (
        <button
            className="medium-button"
            onClick={e => handleClick(e)}
        >
            Inside
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomInside: () => dispatch({ type: SET_RANDOM_INSIDE })
})

export default connect(null, mapDispatchToProps)(Inside)