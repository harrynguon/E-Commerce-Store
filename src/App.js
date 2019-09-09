import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import Home from './home/Home';
import FruitDetail from './home/FruitDetail';
import ShoppingCart from './shoppingCart/ShoppingCart';
import About from './home/About';
import Checkout from './shoppingCart/Checkout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div className="section"></div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shoppingcart" component={ShoppingCart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/fruit/:fruitName" component={FruitDetail} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
