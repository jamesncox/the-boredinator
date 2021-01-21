import React from 'react'
import { connect } from 'react-redux'
import CouplesIndex from '../categoriesIndex/CouplesIndex'
import HomeButton from './HomeButton'
import DisplayActivity from './DisplayActivity'

function IndexPage(props) {

    if (props.randomActivity.length > 0) {
        return <DisplayActivity />
    } else {
        return (
            <>
                <p className="index-title">INDEX</p>
                <CouplesIndex />
                <HomeButton />
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(IndexPage)