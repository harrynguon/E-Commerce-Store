import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';

class Checkout extends React.Component {

    componentDidMount() {
        M.Tooltip.init(this.refs.tooltip, {html: 'Not Implemented'});
    }

    render() {
        if (this.props.shoppingCart.length === 0) {
            return <Redirect to="/"></Redirect>
        }
        return (
            <div className="container">
                <div className="flow-text">Checkout</div>
                <div className="section"></div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text"></input>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text"></input>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text"></input>
                                <label htmlFor="first_name">Street Address</label>
                            </div>
                            <div className="input-field col s12">
                                <input placeholder="Apt, suite, etc." type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text"></input>
                                <label htmlFor="first_name">Town / City</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" ></input>
                                <label htmlFor="first_name">Country</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="number" ></input>
                                <label htmlFor="first_name">ZIP</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="tel"></input>
                                <label htmlFor="first_name">Phone Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email"></input>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div>
                                <Link to="/shoppingcart">
                                    <button className="btn-flat left">Go Back</button>
                                </Link>
                                <button type="button" 
                                        className="btn-flat right tooltipped" 
                                        ref="tooltip"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (reducer) => {
    return {
        shoppingCart: reducer.shoppingCart
    };
}

export default connect(mapStateToProps)(Checkout);
