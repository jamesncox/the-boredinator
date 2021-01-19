import React from 'react'
import RandomActivityButton from '../generatorButtons/RandomActivity'
import CouplesButton from '../generatorButtons/Couples'
import DisplayActivity from './DisplayActivity'

export default function Home() {

    return (
        <>
            <div className="category-grid">
                <CouplesButton />
            </div>
            <RandomActivityButton />
            <DisplayActivity />
        </>
    )
}