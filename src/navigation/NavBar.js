import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-fixed white">
        <nav>
            <div className="nav-wrapper white">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">E-Commerce Store</Link>
                    
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/" className="black-text">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="black-text">
                                <i class="material-icons">shopping_cart</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default withRouter(NavBar);
