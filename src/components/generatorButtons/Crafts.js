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
            className="crafts-button"
            onClick={e => handleClick(e)}
        >
            Crafts
        </button>
    )
}

const mapDispatchToProps = dispatch = ({
    setRandomCrafts: () => ({ type: SET_RANDOM_CRAFTS })
})

export default connect(null, mapDispatchToProps)(Crafts)