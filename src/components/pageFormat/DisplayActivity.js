import React from 'react'
import { connect } from 'react-redux'

function DisplayActivity(props) {

    if (props.randomActivity.length === 0) {
        return null
    } else {
        return (
            <>
                <h4>{props.randomActivity[0].name}</h4>
                <img
                    src={props.randomActivity[0].image}
                    alt={props.randomActivity[0].alt}
                    className="activity-image"
                />
                <p>{props.randomActivity[0].description}</p>
                <form
                    action={props.randomActivity[0].url}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <input type="submit" value="Take me there!" className="take-me-there" />
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(DisplayActivity)