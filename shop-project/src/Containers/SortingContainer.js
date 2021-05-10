// letf side of screen container will have the different filtering functions in here 

import React from 'react'
import SortBar from '../Componets/SortBar'

class SortingContainer extends React.Component {
    render() {
        return(
        <div>
            <SortBar filterItem={this.props.filterItem} onChangeType={this.props.onChangeType}/>
        </div>)
    }
}
export default SortingContainer