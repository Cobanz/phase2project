// do something like a button with a "are you 21 or over to continue thing"

import React from 'react'


class LandingPage extends React.Component {
    render() {
        return (
            <div> Are you over 21?
                <img src="https://lh3.googleusercontent.com/proxy/qebA8hNZPT-NPu2chwSDFG4tIfojTZWQDMaLJOvvJcEVZp7ZqLLF99okHR-_IdYFLhhdMp2SXJNH6AKgmxbWIm1qRebEL14acyQoSVVc0My3vLavUOQt1Nibw5rItq1hqcMqifWzXMcLcVWudZ4t4_fRc89nNcZ2omlh8Qt0zR8aIJBjD-gs1CyVX6MEbna3z8bL5-REz5fDIEAZEIsT38riZajATen9IWgIaY4tmUUc" alt="?"></img>
                <button onClick={console.log('yep')}>Yes</button>
                <button onClick={console.log('nope')}>No</button>

            </div>)
    }
}

export default LandingPage

//once we hit yes it redirects you to the app page with the storefront if no maybe take you to the come back when your older page that just hase a meme image on it
