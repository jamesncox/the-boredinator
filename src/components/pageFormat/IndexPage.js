import React from 'react'
import { connect } from 'react-redux'
import HomeButton from './HomeButton'
import DisplayActivity from './DisplayActivity'
import CouplesIndex from '../categoriesIndex/CouplesIndex'
import CraftsIndex from '../categoriesIndex/CraftsIndex'
import FamilyIndex from '../categoriesIndex/FamilyIndex'
import FoodIndex from '../categoriesIndex/FoodIndex'
import InsideIndex from '../categoriesIndex/InsideIndex'

function IndexPage(props) {

    if (props.randomActivity.length > 0) {
        return <DisplayActivity />
    } else {
        return (
            <>
                <p className="index-title">INDEX</p>
                <HomeButton />

                <CouplesIndex />
                <CraftsIndex />
                <FamilyIndex />
                <FoodIndex />
                <InsideIndex />

                <HomeButton />
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(IndexPage)