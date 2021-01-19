import React from 'react'
import RandomActivityButton from '../generatorButtons/RandomActivity'
import CouplesButton from '../generatorButtons/Couples'
import CraftsButton from '../generatorButtons/Crafts'
import FamilyButton from '../generatorButtons/Family'
import FitnessButton from '../generatorButtons/Fitness'
import FoodButton from '../generatorButtons/Food'
import InsideButton from '../generatorButtons/Inside'
import DisplayActivity from './DisplayActivity'

export default function Home() {

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
                </div>
            </div>
            <RandomActivityButton />
            <DisplayActivity />
        </>
    )
}