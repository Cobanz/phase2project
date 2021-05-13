// space for multi cards, maybe a scroll wheel if the list gets long 
import ItemCards from '../Componets/ItemCards'

import React from 'react'

import SortingContainer from './SortingContainer';

class ShoppingArea extends React.Component {
    render() {
        const shop = this.props.itemData.map(item => {
            return <ItemCards handleClick={this.props.addToCart} item={item} key={item.id} itemId={item.id} />
        })

        const filter = (<SortingContainer filterItem={this.props.filterItem} onChangeType={this.props.onChangeType}/>)
        return (



            <div className="shoppingArea"> Inventory 

            {filter}
            
            {shop}

            </div>

        );
    }
}
export default ShoppingArea