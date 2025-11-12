import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    moviesList: [],
    isLoading: false,
    error: null
};

const moviesSlice = createSlice({
    name: 'movies',
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
                moviesList: [...action.payload],
                isLoading: false,
            };
        },
        isError: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: "Error fetching movies data in slice."
            };
        }
    }
});

export const { isFetching, success, isError } = moviesSlice.actions;
export default moviesSlice.reducer;