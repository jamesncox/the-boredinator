import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_CRAFTS
} from '../../actionTypes'

function Crafts(props) {

    const handleClick = () => {
        props.setRandomCrafts()
    }

    return (
        <button
            className="light-button"
            onClick={e => handleClick(e)}
        >
            Crafts
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomCrafts: () => dispatch({ type: SET_RANDOM_CRAFTS })
})

export default connect(null, mapDispatchToProps)(Crafts)