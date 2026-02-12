import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, deleteItemCart, removeItemFromCart, resetShippingCost } from './cartUtils';

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 1000,
    hidden: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        // Agrego un producto al carrito (unidad)
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST
            }
        },
        removeFromCart: (state, action) => {
            console.log("Removing item from cart:", action.payload.id);
            
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload.id),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
            }
        },
        deleteItem: (state, action) => {
            return {
                ...state,
                cartItems: deleteItemCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
            }
        },
        clearCart: (state) => {
            return{
                ...state,
                cartItems: [],
                shippingCost: 0,
            }
        },
        toggleCartHidden: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            }
        },

        /*
        setShippingCost: (state, action) => {
            state.shippingCost = action.payload;
        },
        */
    },
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteItem, clearCart, toggleCartHidden } = cartSlice.actions;