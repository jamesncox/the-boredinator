import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import ImageLoad from '../hooks/ImageLoad'
import BlurryImage from '../../assets/blurry image small.jpg'

function ActivityPage({ match }) {

    const { activityId } = match.params

    const activity = useSelector(state =>
        state.activities.find(activity => activity.id === activityId)
    )

    if (!activity) {
        return (
            <section>
                <h2>Activity not found!</h2>
            </section>
        )
    }

    return (
        <>
            <p className="activity-title">{activity[0].name.toUpperCase()}</p>
            <div className="card-wrapper">
                <div className="card">
                    <ImageLoad
                        src={activity[0].image}
                        placeholder={BlurryImage}
                        alt={activity[0].alt}
                        className="activity-image"
                    />
                    <div className="container">
                        <p className="description">{activity[0].description}</p>
                        <form
                            action={activity[0].url}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <button className="take-me-there">Take Me There!</button>
                        </form>
                    </div>
                </div>
            </div>
            <RouterLink to="/activities">
                <button
                    className="go-back-btn"
                >
                    Go Back
            </button>
            </RouterLink>
        </>
    )
}

export default ActivityPage