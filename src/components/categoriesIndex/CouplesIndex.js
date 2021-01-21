import React from 'react'
import activitiesData from '../../data/activities.json'

function CouplesIndex(props) {

    const couplesActivities = activitiesData.filter(a => {
        return a.categories.includes("couples")
    })

    return (
        <>
            <p className="index-category-title">Couples</p>
            <div className="index-category-wrapper">
                <ul style={{ listStyleType: "none" }}>
                    {couplesActivities.map(activity => {
                        return <li key={activity.id}>{activity.name}</li>
                    })}
                </ul>
            </div>
        </>
    )

}

export default CouplesIndex