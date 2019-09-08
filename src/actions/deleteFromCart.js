export const deleteFromCart = (fruitName) => {
    return {
        type: 'DELETE_FRUIT_FROM_CART',
        fruitName: fruitName
    };
}