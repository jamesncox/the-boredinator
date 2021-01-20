import {
    CLEAR_SELECTED_ACTIVITY,
    SET_RANDOM_ACTIVITY_ALL,
    SET_RANDOM_COUPLES,
    SET_RANDOM_CRAFTS,
    SET_RANDOM_FAMILY,
    SET_RANDOM_WELLNESS,
    SET_RANDOM_FOOD,
    SET_RANDOM_INSIDE,
    SET_RANDOM_OUTSIDE
} from '../actionTypes'
import activitiesData from '../data/activities.json'

// use the following function on each category to set a single, random entry
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

        case SET_RANDOM_CRAFTS:
            const craftsActivities = activitiesData.filter(a => {
                return a.categories.includes("crafts")
            })
            const craftsActivity = shuffleActivitiesToGetOne(craftsActivities)
            return { ...state, randomActivity: craftsActivity }

        case SET_RANDOM_FAMILY:
            const familyActivities = activitiesData.filter(a => {
                return a.categories.includes("family")
            })
            const familyActivity = shuffleActivitiesToGetOne(familyActivities)
            return { ...state, randomActivity: familyActivity }

        case SET_RANDOM_WELLNESS:
            const wellnessActivities = activitiesData.filter(a => {
                return a.categories.includes("wellness")
            })
            const wellnessActivity = shuffleActivitiesToGetOne(wellnessActivities)
            return { ...state, randomActivity: wellnessActivity }

        case SET_RANDOM_FOOD:
            const foodActivities = activitiesData.filter(a => {
                return a.categories.includes("food")
            })
            const foodActivity = shuffleActivitiesToGetOne(foodActivities)
            return { ...state, randomActivity: foodActivity }

        case SET_RANDOM_INSIDE:
            const insideActivities = activitiesData.filter(a => {
                return a.categories.includes("inside")
            })
            const insideActivity = shuffleActivitiesToGetOne(insideActivities)
            return { ...state, randomActivity: insideActivity }

        case SET_RANDOM_OUTSIDE:
            const outsideActivities = activitiesData.filter(a => {
                return a.categories.includes("outside")
            })
            const outsideActivity = shuffleActivitiesToGetOne(outsideActivities)
            return { ...state, randomActivity: outsideActivity }

        default:
            return state
    }
}