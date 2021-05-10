// space for multi cards, maybe a scroll wheel if the list gets long 
import ItemCards from '../Componets/ItemCards'

import React from 'react'

class ShoppingArea extends React.Component {
    render() {
        return(
        <div className="shoppingArea">
        {this.props.itemData.map(item => {
            return <ItemCards item={item} key={item.id} itemId={item.id}/>
        })}

        </div>
            );
    }
}
export default ShoppingArea