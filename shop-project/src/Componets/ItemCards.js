// item cards them self maybe do a front back 

import React from 'react'



class ItemCards extends React.Component {
    render() {
        return(
        <div className="card" id={this.props.item.id}> 
        <h3 className="itemName">{this.props.item.name}</h3>
        <img className="itemImage" src={this.props.item.image} alt={this.props.item.name}></img>
        <p className="itemDescription">{this.props.item.description}</p>
        <button className="addToCart">+ to cart</button>
        
        </div>
        
            );
    }
}
export default ItemCards