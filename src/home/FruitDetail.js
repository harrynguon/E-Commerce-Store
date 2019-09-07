import React from 'react';

import { getImage } from '../images/imageHelper';

const FruitDetail = (props) => {
    const fruitName = props.match.params.fruitName;
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    { getImage(fruitName) }
                    <h1>{ fruitName }</h1>
                </div>
            </div>
        </div>
    );
}

export default FruitDetail;
