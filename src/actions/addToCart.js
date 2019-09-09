export const addToCart = (fruitName, fruitPrice) => {
    return {
        type: 'ADD_FRUIT_TO_CART',
        fruitName: fruitName,
        fruitPrice: fruitPrice
    };
}