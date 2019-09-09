import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import M from 'materialize-css';

class NavBar extends React.Component {

    componentDidMount() {
        M.Sidenav.init(this.refs.sidenav, {edge: 'right', draggable: 'true'});
    }

    render() {
        // Navbar greyed out when opened solution: https://github.com/Dogfalo/materialize/issues/3844
        return (
            <div>
                <div className="navbar-fixed white">
                    <nav>
                        <div className="nav-wrapper white">
                            <div className="container">
                                {/** Title */}
                                <Link to="/" className="brand-logo black-text hide-on-small-only">Organic Fruit Market</Link>
                                <Link to="/" className="brand-logo black-text hide-on-med-and-up">Fruit Market</Link> 
                                {/** Side menu icon for mobile */}
                                <div className="hide-on-med-and-up">
                                    <button data-target="slide-out" className="btn-flat sidenav-trigger right">
                                        <i className="material-icons black-text">menu</i>
                                    </button>
                                </div>
                                {/** Standard menu for PCs */}
                                <ul className="right hide-on-med-and-down">
                                    <li>
                                        <Link to="/about" className="black-text">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/shoppingcart" className="black-text">
                                            <i className="material-icons">shopping_cart</i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/** Side menu content for mobile */}
                <div className="hide-on-med-and-up">
                    <ul id="slide-out" ref="sidenav" className="sidenav">
                        <li className="sidenav-close">
                            <Link to="/about" className="black-text">About</Link>
                        </li>
                        <li className="sidenav-close">
                            <Link to="/shoppingcart" className="black-text">
                                <i className="material-icons">shopping_cart</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);
