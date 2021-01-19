import React from 'react'
import { connect } from 'react-redux'
import RandomActivityButton from '../generatorButtons/RandomActivity'
import CouplesButton from '../generatorButtons/Couples'
import CraftsButton from '../generatorButtons/Crafts'
import FamilyButton from '../generatorButtons/Family'
import FitnessButton from '../generatorButtons/Fitness'
import FoodButton from '../generatorButtons/Food'
import InsideButton from '../generatorButtons/Inside'
import OutsideButton from '../generatorButtons/Outside'
import ProjectsButton from '../generatorButtons/Projects'
import SoloButton from '../generatorButtons/Solo'

function DisplayButtonGrid(props) {

    if (props.randomActivity.length > 0) {
        return null
    } else {
        return (
            <>
                <div className="grid-wrapper">
                    <div className="category-grid">
                        <CouplesButton />
                        <CraftsButton />
                        <FamilyButton />
                        <FitnessButton />
                        <FoodButton />
                        <InsideButton />
                        <OutsideButton />
                        <ProjectsButton />
                        <SoloButton />
                    </div>
                </div>
                <RandomActivityButton />
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(DisplayButtonGrid)