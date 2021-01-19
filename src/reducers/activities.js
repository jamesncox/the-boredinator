import {
    CLEAR_SELECTED_ACTIVITY,
    SET_RANDOM_ACTIVITY_ALL,
    SET_RANDOM_COUPLES
} from '../actionTypes'
import activitiesData from '../data/activities.json'

// use the following function by each category a single, random entry
const shuffleActivitiesToGetOne = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, 1);
}

export default (state = {
    randomActivity: []
}, action) => {
    switch (action.type) {

        case CLEAR_SELECTED_ACTIVITY:
            return { ...state, randomActivity: [] }

        case SET_RANDOM_ACTIVITY_ALL:
            const activity = shuffleActivitiesToGetOne(activitiesData)
            return { ...state, randomActivity: activity }

        case SET_RANDOM_COUPLES:
            const couplesActivities = activitiesData.filter(a => {
                return a.categories.includes("couples")
            })
            const couplesActivity = shuffleActivitiesToGetOne(couplesActivities)
            return { ...state, randomActivity: couplesActivity }


        default:
            return state
    }
}