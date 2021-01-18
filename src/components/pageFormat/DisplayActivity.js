import React from 'react'
import { connect } from 'react-redux'

function DisplayActivity(props) {

    if (props.randomActivity.length === 0) {
        return null
    } else {
        return (
            <>
                <h4>{props.randomActivity[0].name}</h4>
                <img src={props.randomActivity[0].url} alt={props.randomActivity[0].alt} />
                <p>{props.randomActivity[0].description}</p>
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(DisplayActivity)