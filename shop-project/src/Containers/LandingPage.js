// do something like a button with a "are you 21 or over to continue thing"
import McLovin from '../Images/McLovin.jpeg'
import React from 'react'


class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page-question">
                <img className="landing-page-picutre" src={McLovin} alt="?"></img>
                <div className="landing-page-buttons">
                    <button onClick={console.log('yep')}>Yes</button>
                    <button onClick={console.log('nope')}>No</button>
                </div>
            </div>)
    }
}

export default LandingPage

//once we hit yes it redirects you to the app page with the storefront if no maybe take you to the come back when your older page that just hase a meme image on it
