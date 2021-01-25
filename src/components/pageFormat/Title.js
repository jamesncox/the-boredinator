import React from 'react'
import Toggle from './Toggle'

export default function Title() {
    return (
        <>
            <h1 className="title">
                The Boredinator
            </h1>
            <p className="subtitle">
                Less Screens. New Ideas. More Fun!
            </p>
            <Toggle />
        </>
    )
}