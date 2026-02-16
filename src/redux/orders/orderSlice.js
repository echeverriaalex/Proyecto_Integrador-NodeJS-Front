import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    orders: null,
    loading: false,
    error: null
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState: INITIAL_STATE,
    reducers: {
        createOrderFail: (state = INITIAL_STATE, action) => {
            console.log("Create order failed SliceOrder:", action.payload);
            return {
                ...state,
                error: action.payload
            }
        },
        fetchOrderSuccess: (state, action) => {
            console.log("Fetch order success SliceOrder:", action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                orders: [ ...action.payload]
            }
        },
        fetchOrderFail : (state, action) => {
            console.log("Fetch order failed SliceOrder:", action.payload);
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        fetchOrderStart: (state) => {
            console.log("Fetch order start SliceOrder");
            return{
                ...state,
                loading: true
            }
        },
        clearError: (state) => {
            console.log("Clear error SliceOrder");
            return{
                ...state,
                error: null
            }
        },
        clearOrders: (state) => {
            console.log("Clear orders SliceOrder");
            return {
                ...state,
                orders: null
            }
        }
    } 
})

export const { createOrderFail, fetchOrderSuccess, fetchOrderFail, fetchOrderStart, clearError, clearOrders } = orderSlice.actions
export default orderSlice.reducer