import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

function HomeButton() {

    return (
        <RouterLink to="/">
            <button className="home-btn">
                Return Home
            </button>
        </RouterLink>
    )
}

export default HomeButton