// where purhcased items go 
import ItemCards from '../Componets/ItemCards'


import React from 'react'

class CartContainer extends React.Component {
    render() {
        const cart = this.props.itemData.map(item => {
            return <ItemCards handleClick={this.props.removeFromCart} item={item} key={item.id} itemId={item.id} />
        })

        return (
            <div className="cartArea">
                Shopping Cart:{cart}
            </div>
        );
    }
}
export default CartContainer