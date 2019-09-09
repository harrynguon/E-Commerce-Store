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
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="first_name" type="text" class="validate"></input>
                                <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate"></input>
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="House number and street name" type="text" class="validate"></input>
                                <label for="first_name">Street Address</label>
                            </div>
                            <div class="input-field col s12">
                                <input placeholder="Apt, suite, etc." type="text" class="validate"></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" class="validate"></input>
                                <label for="first_name">Town / City</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" class="validate"></input>
                                <label for="first_name">Country</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="number" class="validate"></input>
                                <label for="first_name">ZIP</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="tel" class="validate"></input>
                                <label for="first_name">Phone Number</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate"></input>
                                <label for="email">Email</label>
                            </div>
                        </div>
                        
                        <div class="row">
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
