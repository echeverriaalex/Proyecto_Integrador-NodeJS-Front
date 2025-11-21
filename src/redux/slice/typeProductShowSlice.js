import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    typeProduct: null,
};
const typeProductShowSlice = createSlice({
    name: 'typeProductShow',
    initialState: INITIAL_STATE,
    reducers: {
        setTypeProductShow: (state, action) => {
            return {
                ...state,
                typeProduct: action.payload,
            };
        }
    }
});

export default typeProductShowSlice.reducer;
export const { setTypeProductShow } = typeProductShowSlice.actions;