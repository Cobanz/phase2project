import React from 'react'
import Photo from '../Images/grant2.jpg'


class About extends React.Component {
    render() {
        return <div>
        <h1>Its a drinking site not much to go on about!</h1>
            <img src={Photo} alt="me drinking or something goofy"></img>
            </div>
    }
}

export default About