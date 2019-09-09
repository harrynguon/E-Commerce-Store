import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import { addToCart } from '../actions/addToCart';
import AddFruitModal from './AddFruitModal';

const Home = (props) => {
  return (
    <div className="container">
        <div className="row">
            { 
                props.inventory
                     .map(item => <Item item={item} key={item.id} addToCart={props.addToCart}/>)
            }
        </div>
    </div>
  );
}

const mapStateToProps = (reducer) => {
    return {
        inventory: reducer.inventory
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (fruitName, fruitPrice) => dispatch(addToCart(fruitName, fruitPrice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
