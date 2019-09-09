import React from 'react';
import { Link } from 'react-router-dom';

import { getImage } from '../images/imageHelper';

import M from 'materialize-css';

const showToast = (itemName) => {
    M.toast(
        {
            html: `${itemName} have been added to your cart!`,
            displayLength: '1500'
        }
    );
}

const Item = (props) => {
    // id, name, price, stockCount
    const addToCartText = props.item.name === 'Pineapples'
                                                ? 'Add To Cart (One Pineapple)'
                                                : 'Add To Cart (100g)';
    return (
        <div className="col s12 m4 l4">
            <div className="card hoverable">
                <Link to={`/fruit/${props.item.name}`} className="black-text">
                    <div className="card-image">
                        { getImage(props.item.name) }
                    </div>
                    <div className="card-content">
                        <span className="card-title">{props.item.name}</span>
                        <p>
                            Price: ${props.item.price}/{props.item.name==='Pineapples' ? 'each' : '100g'}
                            <br></br>
                            Stock Count: {props.item.stockCount}
                        </p>
                    </div>
                </Link>
                <div className="card-action">
                    <button className="btn white black-text waves-effect" 
                            onClick={() => { 
                                            showToast(props.item.name);
                                            props.addToCart(props.item.name, props.item.price);
                                        }
                                    }
                    >
                        {addToCartText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item;
