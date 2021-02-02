import React from 'react'
import ImageLoad from '../hooks/ImageLoad'
import BlurryImage from '../../assets/blurry image small.jpg'

function ActivityPage(props) {

    return (
        <>
            <p className="activity-title">{props.activity[0].name.toUpperCase()}</p>
            <div className="card-wrapper">
                <div className="card">
                    <ImageLoad
                        src={props.activity[0].image}
                        placeholder={BlurryImage}
                        alt={props.activity[0].alt}
                        className="activity-image"
                    />
                    <div className="container">
                        <p className="description">{props.activity[0].description}</p>
                        <form
                            action={props.activity[0].url}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <button className="take-me-there">Take Me There!</button>
                        </form>
                    </div>
                </div>
            </div>
            <button
                className="go-back-btn"
                onClick={e => handleClick(e)}
            >
                Go Back
                </button>
        </>
    )
}

export default ActivityPage