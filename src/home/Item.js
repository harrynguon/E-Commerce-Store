import React from 'react';
import { Link } from 'react-router-dom';

import { getImage } from '../images/imageHelper';
import AddFruitModal from './AddFruitModal';

const Item = (props) => {
    // id, name, price, stockCount
    return (
        <div className="col s12 m4 l4">
            <div className="card hoverable large">
                <Link to={`/fruit/${props.item.name}`} className="black-text">
                    <div className="card-image">
                        { getImage(props.item.name) }
                    </div>
                    <div className="card-content">
                        <span className="card-title">{props.item.name}</span>
                        <p>
                            Price: ${props.item.price}/100g
                            <br></br>
                            Stock Count: {props.item.stockCount}
                        </p>
                    </div>
                </Link>
                <div className="card-action">
                    <AddFruitModal fruit={props.item} addToCart={props.addToCart} />
                </div>
            </div>
        </div>
    );
}

export default Item;
