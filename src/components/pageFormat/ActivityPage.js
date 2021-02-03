import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import ImageLoad from '../hooks/ImageLoad'
import BlurryImage from '../../assets/blurry image small.jpg'
import ActivityError from './ActivityError'

export const ActivityPage = ({ match }) => {

    const { activityId } = match.params

    const activity = useSelector(state =>
        state.activities.allActivities.find(a => a.id === parseInt(activityId))
    )

    if (!activity) {
        return (
            <ActivityError />
        )
    }

    return (
        <>
            <p className="activity-title">{activity.name.toUpperCase()}</p>
            <div className="card-wrapper">
                <div className="card">
                    <ImageLoad
                        src={activity.image}
                        placeholder={BlurryImage}
                        alt={activity.alt}
                        className="activity-image"
                    />
                    <div className="container">
                        <p className="description">{activity.description}</p>
                        <form
                            action={activity.url}
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