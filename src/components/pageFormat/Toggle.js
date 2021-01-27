import React from 'react'

export default function Toggle() {

    // let clickedClass = "clicked"
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme

    if (localStorage) {
        theme = localStorage.getItem("theme")
        // console.log(document.getElementsByClassName("toggle")[0])
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            // e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "light")
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            // e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "dark")
            theme = darkTheme
        }
        // document.getElementById("toggle").checked = true;
    }

    return (
        <div className="toggle">
            <input
                type="checkbox"
                id="toggle-switch"
                aria-label="toggle dark mode"
                // className={theme === "dark" ? clickedClass : ""}
                onClick={(e) => switchTheme(e)}
            />
            <label htmlFor="toggle-switch"></label>
        </div>
    )
}