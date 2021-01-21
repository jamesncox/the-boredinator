import React from 'react'
import { connect } from 'react-redux'
import {
    SET_SELECTED_INDEX_ACTIVITY
} from '../../actionTypes'
import activitiesData from '../../data/activities.json'

function SoloIndex(props) {

    const couplesActivities = activitiesData.filter(a => {
        return a.categories.includes("solo")
    })

    const alphabetizedActivities = couplesActivities.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })

    const handleClick = (id) => {
        props.setSelectedIndexActivity(id)
    }

    return (
        <>
            <p className="index-category-title">Solo</p>
            <div className="index-category-wrapper">
                <ol style={{ listStyleType: "none" }}>
                    {alphabetizedActivities.map(activity => {
                        return (
                            <p
                                key={activity.id}
                                className="index-list-items"
                                onClick={e => handleClick(activity.id)}
                            >
                                {activity.name}
                            </p>
                        )
                    })}
                </ol>
            </div>
        </>
    )

}

const mapDispatchToProps = dispatch => ({
    setSelectedIndexActivity: (id) => dispatch({ type: SET_SELECTED_INDEX_ACTIVITY, payload: id })
})

export default connect(null, mapDispatchToProps)(SoloIndex)