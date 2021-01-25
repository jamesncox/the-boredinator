import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

export default function Title() {
    return (
        <>
            <h1 className="title">
                The Boredinator
            </h1>
            <p className="subtitle">
                Less Screens. New Ideas. More Fun!
            </p>
            <ThemeSwitcher />
        </>
    )
}