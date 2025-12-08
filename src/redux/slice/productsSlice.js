import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    productList: [],
    isLoading: false,
    error: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        isFetching: (state) => {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        },
        success: (state, action) => {
            return {
                ...state,
                productList: [...action.payload],
                isLoading: false,
            };
        },
        isError: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: "Error fetching products data in slice."
            };
        }
    }
});

export const { isFetching, success, isError } = productsSlice.actions;
export default productsSlice.reducer;