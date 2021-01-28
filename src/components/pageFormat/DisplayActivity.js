import React from 'react'
import { connect } from 'react-redux'
import {
    CLEAR_SELECTED_ACTIVITY
} from '../../actionTypes'
import ImageLoad from '../hooks/ImageLoad'
import BlurryImage from '../../assets/blurry image small.jpg'

function DisplayActivity(props) {

    const handleClick = () => {
        props.clearSelectedActivity()
    }

    if (props.randomActivity.length === 0) {
        return null
    } else {
        return (
            <>
                <p className="activity-title">{props.randomActivity[0].name.toUpperCase()}</p>
                <div className="card-wrapper">
                    <div className="card">
                        <ImageLoad
                            src={props.randomActivity[0].image}
                            placeholder={BlurryImage}
                            alt={props.randomActivity[0].alt}
                            className="activity-image"
                        />
                        <div className="container">
                            <p className="description">{props.randomActivity[0].description}</p>
                            <form
                                action={props.randomActivity[0].url}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <button className="take-me-there">Take Me There!</button>
                            </form>
                        </div>
                    </div>
                </div>
                <button
                    className="go-back-btn"
                    onClick={e => handleClick(e)}
                >
                    Go Back
                </button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

const mapDispatchToProps = dispatch => ({
    clearSelectedActivity: () => dispatch({ type: CLEAR_SELECTED_ACTIVITY })
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayActivity)