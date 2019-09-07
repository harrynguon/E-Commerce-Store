import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import Home from './home/Home';
import FruitDetail from './home/FruitDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="section"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/shoppingcart" component={Home} />
          <Route path="/fruit/:fruitName" component={FruitDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
