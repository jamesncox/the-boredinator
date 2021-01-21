import React from 'react'
import { connect } from 'react-redux'
import HomeButton from './HomeButton'
import DisplayActivity from './DisplayActivity'
import CouplesIndex from '../categoriesIndex/CouplesIndex'
import CraftsIndex from '../categoriesIndex/CraftsIndex'

function IndexPage(props) {

    if (props.randomActivity.length > 0) {
        return <DisplayActivity />
    } else {
        return (
            <>
                <p className="index-title">INDEX</p>
                <CouplesIndex />
                <CraftsIndex />
                <HomeButton />
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(IndexPage)