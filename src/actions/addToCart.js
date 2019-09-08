export const addToCart = (fruitName) => {
    return {
        type: 'ADD_FRUIT_TO_CART',
        fruitName: fruitName
    };
}