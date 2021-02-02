import React from 'react'
import { connect } from 'react-redux'
import HomeButton from './HomeButton'
import DisplayActivity from './DisplayActivity'
import CouplesIndex from '../categoriesIndex/CouplesIndex'
import CraftsIndex from '../categoriesIndex/CraftsIndex'
import FamilyIndex from '../categoriesIndex/FamilyIndex'
import FoodIndex from '../categoriesIndex/FoodIndex'
import InsideIndex from '../categoriesIndex/InsideIndex'
import OutsideIndex from '../categoriesIndex/OutsideIndex'
import ProjectsIndex from '../categoriesIndex/ProjectsIndex'
import SoloIndex from '../categoriesIndex/SoloIndex'
import WellnessIndex from '../categoriesIndex/WellnessIndex'

function IndexPage(props) {

    if (props.activity.length > 0) {
        return <DisplayActivity />
    } else {
        return (
            <>
                <p className="index-title">ACTIVITIES</p>
                <HomeButton />

                <CouplesIndex />
                <CraftsIndex />
                <FamilyIndex />
                <FoodIndex />
                <InsideIndex />
                <OutsideIndex />
                <ProjectsIndex />
                <SoloIndex />
                <WellnessIndex />

                <HomeButton />
            </>
        )
    }
}

const mapStateToProps = state => ({
    activity: state.activities.activity
})

export default connect(mapStateToProps)(IndexPage)