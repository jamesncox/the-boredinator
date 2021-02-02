import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

function IndexButton(props) {

    return (
        <RouterLink to="/activities">
            <button className="index-btn">
                See Index of All Activities
            </button>
        </RouterLink>
    )
}

export default IndexButton