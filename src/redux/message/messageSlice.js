import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    visible: false,
    title: null,
    message: null,
    image: null
};

export const messageSlice = createSlice({
    name: 'message',
    initialState: INITIAL_STATE,
    reducers: {
        toggleMessageShow: (state, action) => {
            return {
                ...state,
                visible: !state.visible,
                title: action.payload?.title || null,
                message: action.payload?.message || null,
                image: action.payload?.image || null
            };
        }
    }
});

export const { setMessage, toggleMessageShow } = messageSlice.actions;
export default messageSlice.reducer;