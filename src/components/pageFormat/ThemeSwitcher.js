import React from 'react'

function ThemeSwitcher(props) {

    const handleClick = () => {

    }

    return (
        <button
            className="toggle-theme-button"
            onClick={e => handleClick(e)}
        >
            Toggle Theme
        </button>
    )

}

export default ThemeSwitcher