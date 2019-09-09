const rootReducer = (state, action) => {
    let shoppingCartCopy = state.shoppingCart.concat();
    switch (action.type) {
        case 'ADD_FRUIT_TO_CART':
            // Check to see if the shopping cart already has the fruit or not. If so, add to it
            if (shoppingCartCopy.find(item => item.name === action.fruitName)) {
                shoppingCartCopy = shoppingCartCopy
                                            .map(item => item.name === action.fruitName
                                                                            ? {
                                                                                name: action.fruitName,
                                                                                price: action.fruitPrice,
                                                                                amount: item.amount + Number(action.fruitAmount)
                                                                            }
                                                                            : item);
            } else {
                // Otherwise create a new fruit entry with an amount of 1
                shoppingCartCopy.push({
                    name: action.fruitName,
                    price: action.fruitPrice,
                    amount: Number(action.fruitAmount)
                });
            }
            // Sort the list by name
            shoppingCartCopy = shoppingCartCopy.sort((a, b) => a.name.localeCompare(b.name))
            return {
                ...state,
                shoppingCart: shoppingCartCopy
            };
        case 'DELETE_FRUIT_FROM_CART':
            shoppingCartCopy = shoppingCartCopy.filter(item => item.name !== action.fruitName);
            return {
                ...state,
                shoppingCart: shoppingCartCopy
            };
        default: 
            return state;
    }
}

export default rootReducer;