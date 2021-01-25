import React from 'react'
import { connect } from 'react-redux'
import {
    SET_RANDOM_PROJECTS
} from '../../actionTypes'

function Projects(props) {

    const handleClick = () => {
        props.setRandomProjects()
    }

    return (
        <button
            className="dark-button"
            onClick={e => handleClick(e)}
        >
            Projects
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    setRandomProjects: () => dispatch({ type: SET_RANDOM_PROJECTS })
})

export default connect(null, mapDispatchToProps)(Projects)