import React from 'react';
import { Link } from 'react-router-dom';

import { getImage } from '../images/imageHelper';

const FruitDetail = (props) => {
    const fruitName = props.match.params.fruitName;
    return (
        <div className="container">
            <div className="row center">
                <div className="col s12 m4 l4">
                    { getImage(fruitName) }
                </div>
                <div className="col s12 m8 l8">
                    <h1>{ fruitName }</h1>
                    <div className="divider"></div>
                    <p>are awesome.</p>
                    <Link to="/">
                        <i className="material-icons">arrow_back</i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FruitDetail;
