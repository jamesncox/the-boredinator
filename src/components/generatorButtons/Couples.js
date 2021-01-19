import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_COUPLES
} from '../../actionTypes'

function Couples(props) {

    const handleClick = () => {
        props.setRandomCouples()
    }

    return (
        <button
            className="couples-button"
            onClick={e => handleClick(e)}
        >
            Couples
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomCouples: () => dispatch({ type: SET_RANDOM_COUPLES })
})

export default connect(null, mapDispatchToProps)(Couples)