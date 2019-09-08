import React from 'react';
import { connect } from 'react-redux';

import { deleteFromCart } from '../actions/deleteFromCart';

const ShoppingCartElement = (props) => {
    const shoppingCart = props.shoppingCart;
    const allShoppingItems = shoppingCart.map(item =>
        <li className="collection-item" key={item.name}>
            <p>
                { item.name }
                <button onClick={() => props.deleteFromCart(item.name)}
                        className="btn-flat secondary-content"
                >
                    <i className="material-icons black-text">clear</i>
                </button>
                <br></br>
                { item.amount } x { item.name === 'Pineapples' ? 'pineapple(s)' : '100g' } 
            </p>
        </li>
    )
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
