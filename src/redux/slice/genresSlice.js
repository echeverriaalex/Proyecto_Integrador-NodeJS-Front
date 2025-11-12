import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    genresList: [],
    isLoading: false,
    error: null
};

const genresSlice = createSlice({
    name: 'genres',
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
                genresList: [...action.payload],
                isLoading: false,
            };
        },
        isError: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: "Error fetching genres data in slice."
            };
        }
    }
});

export const { isFetching, success, isError } = genresSlice.actions;
export default genresSlice.reducer;