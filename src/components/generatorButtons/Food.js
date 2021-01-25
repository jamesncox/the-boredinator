import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_FOOD
} from '../../actionTypes'

function Food(props) {

    const handleClick = () => {
        props.setRandomFood()
    }

    return (
        <button
            className="medium-button"
            onClick={e => handleClick(e)}
        >
            Food
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomFood: () => dispatch({ type: SET_RANDOM_FOOD })
})

export default connect(null, mapDispatchToProps)(Food)