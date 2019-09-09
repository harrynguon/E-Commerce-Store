import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ShoppingCartElement from './ShoppingCartElement';

const ShoppingCart = (props) => {
	return (
		<div className="container">
            <div className="flow-text">Your Shopping Cart</div>
            <ul className="collection">
                <ShoppingCartElement inventory={props.inventory} shoppingCart={props.shoppingCart} />
                { props.shoppingCart.length > 0 &&
                                    <li className="collection-item" key="total">
                                        <p>
                                            <b>Total: ${ getShoppingCartTotal(props.shoppingCart) }</b>
                                        </p>
                                    </li>
                }
                
            </ul>
            <div>
                <Link to="/checkout">
                    <button disabled={props.shoppingCart.length === 0}
                            className="btn white black-text right"
                    >
                        Checkout
                    </button>
                </Link> 
                <Link to="/">
                    <button className="btn white black-text right">Continue Shopping</button>
                </Link>
                
            </div>
            
		</div>
	);
}

// Grab the total of the shopping cart and then sum it up
const getShoppingCartTotal = (shoppingCart) => {
    const total = shoppingCart.map(item => Number(item.price) * (item.amount / 100))
                                .reduce((a, b) => a + b, 0);
    // Set to 2d.p
    return total.toFixed(2);
} 

const mapStateToProps = (reducer) => {
	return {
        inventory: reducer.inventory,
		shoppingCart: reducer.shoppingCart
	};
}

export default connect(mapStateToProps)(ShoppingCart);
