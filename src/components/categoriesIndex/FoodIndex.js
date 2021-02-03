import React from 'react'
import { Link } from 'react-router-dom'
import activitiesData from '../../data/activities.json'

function FoodIndex(props) {

    const couplesActivities = activitiesData.filter(a => {
        return a.categories.includes("food")
    })

    const alphabetizedActivities = couplesActivities.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })

    return (
        <>
            <p className="index-category-title">Food</p>
            <div className="index-category-wrapper">
                <ol style={{ listStyleType: "none" }}>
                    {alphabetizedActivities.map(activity => {
                        return (
                            <Link
                                key={activity.id}
                                to={`/activities/${activity.id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <p
                                    key={activity.id}
                                    className="index-list-items"
                                >
                                    {activity.name}
                                </p>
                            </Link>
                        )
                    })}
                </ol>
            </div>
        </>
    )

}

export default FoodIndex