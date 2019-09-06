import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const initialInventory = [];
for (let i = 0; i < 24; i++) {
    initialInventory.push({
        id: i+1,
        name: `Item ${i+1}`,
        price: i,
        stockCount: Math.floor(Math.random()*100)
    })
}
const initialStoreState = {
    inventory: initialInventory,
    shoppingCart: []
};
const store = createStore(rootReducer, initialStoreState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
