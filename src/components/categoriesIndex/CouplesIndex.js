import React from 'react'
import activitiesData from '../../data/activities.json'

function CouplesIndex(props) {

    const couplesActivities = activitiesData.filter(a => {
        return a.categories.includes("couples")
    })

    return (
        <div>
            <p>Couples</p>
            <ul>
                {couplesActivities.map(activity => {
                    return <li>{activity.name}</li>
                })}
            </ul>
        </div>
    )

}

export default CouplesIndex