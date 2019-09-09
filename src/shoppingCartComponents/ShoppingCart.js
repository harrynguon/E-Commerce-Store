import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartElement from './ShoppingCartElement';

const ShoppingCart = (props) => {
	return (
		<div className="container">
            <div className="flow-text">This is the shopping cart page!</div>
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
		</div>
	);
}

const getShoppingCartTotal = (shoppingCart) => {
    console.log(shoppingCart);
    const totalsForEachFruit = shoppingCart.map(item => Number(item.price) * item.amount);
    return totalsForEachFruit.reduce((a, b) => a + b, 0);
} 

const mapStateToProps = (reducer) => {
	return {
        inventory: reducer.inventory,
		shoppingCart: reducer.shoppingCart
	};
}

export default connect(mapStateToProps)(ShoppingCart);
