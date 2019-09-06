import React from 'react';
import { Link } from 'react-router-dom';

import { getImage } from '../images/imageHelper';

const Item = (props) => {
    // id, name, price, stockCount
    /** <div className={props.item.id % 3 === 0 ? "row col" : "col"}> */
    return (
        <div className="col s12 m4 l4">
            <div className="card">
                <Link to="/" className="black-text">
                    <div class="card-image">
                        { getImage(props.item.imageName) }
                    </div>
                    <div className="card-content">
                    <span class="card-title">{props.item.name}</span>
                        <p>
                            Price: {props.item.price}
                            <br></br>
                            Stock Count: {props.item.stockCount}
                        </p>
                    </div>
                </Link>
                <div className="card-action">
                    <button className="btn white black-text">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
