// item cards them self maybe do a front back 

import React from 'react'



class ItemCards extends React.Component {
    render() {
        return(
        <div className="card" key={this.props.item.id} id={this.props.item.id}> 
        <h3 className="itemName">{this.props.item.name}</h3>
        <img className="itemImage" src={this.props.item.image} alt={this.props.item.name}></img>
        <p className="stock">in stock : {this.props.item.quantity}</p>
        <p className="itemDescription"> item description : {this.props.item.description}</p>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>

        </select>
        <button className="addToCart" onClick={()=>this.props.handleClick(this.props.item)}>+ to cart</button>
        
        </div>
        
            );
    }
}
export default ItemCards