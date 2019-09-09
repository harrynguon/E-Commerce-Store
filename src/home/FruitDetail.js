import React from 'react';
import { Link } from 'react-router-dom';

import { getImage } from '../images/imageHelper';

const FruitDetail = (props) => {
    const fruitName = props.match.params.fruitName;
    return (
        <div className="container">
            <div className="row center">
                <div className="col s12 m12 l6">
                    { getImage(fruitName) }
                </div>
                <div className="col s12 m12 l6">
                    <h1>{ fruitName }</h1>
                    <div className="divider"></div>
                    <p>are awesome.</p>
                    <Link to="/">
                        <i className="material-icons black-text">arrow_back</i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FruitDetail;
