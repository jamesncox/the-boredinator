import React from 'react'
import CouplesIndex from '../categoriesIndex/CouplesIndex'
import HomeButton from './HomeButton'

function IndexPage(props) {

    return (
        <>
            <p className="index-title">INDEX</p>
            <CouplesIndex />
            <HomeButton />
        </>
    )
}

export default IndexPage