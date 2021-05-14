import React from 'react'
import Photo from '../Images/HaHa.jpeg'


class About extends React.Component {
    render() {
        return <div>
        <h1 className="about-text">Its a drinking site not much to go on about!</h1>
            <img className="about-image" src={Photo} alt="me drinking or something goofy"></img>
            </div>
    }
}

export default About