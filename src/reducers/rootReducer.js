const rootReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FRUIT_TO_CART':
            let shoppingCartCopy = state.shoppingCart.concat();
            // Check to see if the shopping cart already has the fruit or not. If so, add to it
            if (shoppingCartCopy.find(item => item.name === action.fruitName)) {
                shoppingCartCopy = shoppingCartCopy
                                            .map(item => item.name === action.fruitName
                                                                            ? {
                                                                                name: action.fruitName,
                                                                                amount: item.amount + 1
                                                                            }
                                                                            : item);
            } else {
                // Otherwise create a new fruit entry with an amount of 1
                shoppingCartCopy.push({
                    name: action.fruitName,
                    amount: 1
                });
            }
            return {
                ...state,
                shoppingCart: shoppingCartCopy
            };
        default: 
            return state;
    }
}

export default rootReducer;