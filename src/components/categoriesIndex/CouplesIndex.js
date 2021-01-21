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
                <ol style={{ listStyleType: "none" }}>
                    {couplesActivities.map(activity => {
                        return <li key={activity.id}>{activity.name}</li>
                    })}
                </ol>
            </div>
        </>
    )

}

export default CouplesIndex