// space for multi cards, maybe a scroll wheel if the list gets long 
import ItemCards from '../Componets/ItemCards'

import React from 'react'

class ShoppingArea extends React.Component {
    render() {
        const shop = this.props.itemData.map(item => {
            return <ItemCards handleClick={this.props.addToCart} item={item} key={item.id} itemId={item.id} />
        })
        return (

            <div className="shoppingArea"> Inventory {shop}

            </div>

        );
    }
}
export default ShoppingArea