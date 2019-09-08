import React from 'react';
import { connect } from 'react-redux';
import {  } from 'react-router-dom';
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
                    { item.amount } x { item.name === 'Pineapples' ? 'pineapple(s)' : '100g' } 
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (item) => dispatch(deleteFromCart(item))
    };
} 

export default connect(null, mapDispatchToProps)(ShoppingCartElement);
