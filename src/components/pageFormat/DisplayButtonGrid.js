import React from 'react'
import { connect } from 'react-redux'
import RandomActivityButton from '../generatorButtons/RandomActivity'
import CouplesButton from '../generatorButtons/Couples'
import CraftsButton from '../generatorButtons/Crafts'
import FamilyButton from '../generatorButtons/Family'
import WellnessButton from '../generatorButtons/Wellness'
import FoodButton from '../generatorButtons/Food'
import InsideButton from '../generatorButtons/Inside'
import OutsideButton from '../generatorButtons/Outside'
import ProjectsButton from '../generatorButtons/Projects'
import SoloButton from '../generatorButtons/Solo'
import IndexButton from './IndexButton'

function DisplayButtonGrid(props) {

    if (props.randomActivity.length > 0) {
        return null
    } else {
        return (
            <>
                <p className="category-grid-instructions">Select A Category</p>
                <div className="grid-wrapper">
                    <div className="category-grid">
                        <CouplesButton />
                        <CraftsButton />
                        <FamilyButton />
                        <FoodButton />
                        <InsideButton />
                        <OutsideButton />
                        <ProjectsButton />
                        <SoloButton />
                        <WellnessButton />
                    </div>
                </div>
                <RandomActivityButton />
                <IndexButton />
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(DisplayButtonGrid)