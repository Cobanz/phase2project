// multiple filters for left side that will sort and "filter" thru the item cards

import React from 'react'

class SortBar extends React.Component {
    render() {
        return (
            <div className="ui-form">
                <h3 className="filter-name">Alcohol Type</h3>
                <div className="field">
                    <select name="type" id="type" onChange={this.props.onChangeType}>
                        <option value="all">All</option>
                        <option value="Whiskey">Whiskey</option>
                        <option value="Vodka">Vodka</option>
                        <option value="Gin">Gin</option>
                        <option value="Wine">Wine</option>
                        <option value="Tequila">Tequila</option>
                        <option value="Beer">Beer</option>
                    </select>
                </div>

                <div className="field">
                    <button className="ui secondary button" onClick={this.props.filterItem}>Filter</button>
                </div>
            </div>
        )
    }
}

export default SortBar