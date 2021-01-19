import React from 'react'
import RandomActivityButton from '../generatorButtons/RandomActivity'
import CouplesButton from '../generatorButtons/Couples'
import CraftsButton from '../generatorButtons/Crafts'
import DisplayActivity from './DisplayActivity'

export default function Home() {

    return (
        <>
            <div className="grid-wrapper">
                <div className="category-grid">
                    <CouplesButton />
                    <CraftsButton />
                </div>
            </div>
            <RandomActivityButton />
            <DisplayActivity />
        </>
    )
}