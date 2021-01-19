import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_FITNESS
} from '../../actionTypes'

function Fitness(props) {

    const handleClick = () => {
        props.setRandomFitness()
    }

    return (
        <button
            className="fitness-button"
            onClick={e => handleClick(e)}
        >
            Fitness
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomFitness: () => dispatch({ type: SET_RANDOM_FITNESS })
})

export default connect(null, mapDispatchToProps)(Fitness)