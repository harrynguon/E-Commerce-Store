export const addToCart = (fruitName, fruitPrice, fruitAmount) => {
    return {
        type: 'ADD_FRUIT_TO_CART',
        fruitName: fruitName,
        fruitPrice: fruitPrice,
        fruitAmount: fruitAmount
    };
}