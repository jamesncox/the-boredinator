import {
    SET_RANDOM_ACTIVITY_ALL,
    SET_RANDOM_COUPLES
} from '../actionTypes'

import activitiesData from '../data/activities.json'

export default (state = {
    randomActivity: []
}, action) => {
    switch (action.type) {

        case SET_RANDOM_ACTIVITY_ALL:
            function shuffleActivitiesToGetOne(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a.slice(0, 1);
            }

            const activity = shuffleActivitiesToGetOne(activitiesData)
            return { ...state, randomActivity: activity }

        case SET_RANDOM_COUPLES:


        default:
            return state
    }
}