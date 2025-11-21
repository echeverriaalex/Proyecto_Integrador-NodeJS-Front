import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    tvList: [],
    isLoading: false,
    error: null
};

const tvSlice = createSlice({
    name: 'tv',
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
                tvList: [...action.payload],
                isLoading: false,
            };
        },
        isError: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: "Error fetching tv data in slice."
            };
        }
    }
});

export const { isFetching, success, isError } = tvSlice.actions;
export default tvSlice.reducer;