import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';

import { deleteFromCart } from '../actions/deleteFromCart';

const showToast = (itemName) => {
    M.toast(
        {
            html: `${itemName} have been removed from your cart.`,
            displayLength: '1500'
        }
    );
}

const ShoppingCartElement = (props) => {
    const shoppingCart = props.shoppingCart;
    const inventory = props.inventory;
    const allShoppingItems = shoppingCart.length > 0 
        ? shoppingCart.map(item =>
            <li className="collection-item" key={item.name}>
                <p>
                    { item.name }
                    <button onClick={() =>  {
                                                showToast(item.name)
                                                props.deleteFromCart(item.name);
                                            }
                                    }
                            className="btn-flat secondary-content"
                    >
                        <i className="material-icons black-text">clear</i>
                    </button>
                    <br></br>
                    { item.amount >= 1000
                                        ? (item.amount / 1000)+'kg'
                                        : (item.amount)+'g'
                    }
                    <br></br>
                    $<i>{ getPrice(item.name, item.amount, inventory) }</i>
                </p>
            </li>
        ) 
        :   <li className="collection-item" key='Empty'>
                <p>Your shopping cart is empty. </p>
            </li>
    return (
        
        allShoppingItems
    );
}

// Grab the item from the inventory given the name of the item in the shopping cart
// Then get its price with the number of units given
const getPrice = (itemName, amount, inventory) => {
    const inventoryItem = inventory.filter(item => itemName === item.name)[0];
    return inventoryItem.price * (amount / 100);
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (item) => dispatch(deleteFromCart(item))
    };
} 

export default connect(null, mapDispatchToProps)(ShoppingCartElement);
