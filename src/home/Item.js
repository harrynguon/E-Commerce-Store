import React from 'react';

const Item = (props) => {
    // id, name, price, stockCount
    /** <div className={props.item.id % 3 === 0 ? "row col" : "col"}> */
    return (

        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>
                        Name: {props.item.name}
                        <br></br>
                        Price: ${props.item.price}
                        <br></br>
                        Store Count: {props.item.stockCount}
                    </p>
                </div>
                <div className="card-action">
                    <button className="btn white black-text">Buy Now</button>
                    <button className="btn white black-text">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
