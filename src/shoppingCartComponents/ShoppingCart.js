import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartElement from './ShoppingCartElement';

const ShoppingCart = (props) => {
    const shoppingCart = props.shoppingCart;
	return (
		<div className="container">
            <h1>This is the shopping cart page!</h1>
            <ul className="collection">
                <ShoppingCartElement shoppingCart={shoppingCart} />
            </ul>
		</div>
	);
}

const mapStateToProps = (reducer) => {
	return {
		shoppingCart: reducer.shoppingCart
	};
}

export default connect(mapStateToProps)(ShoppingCart);
