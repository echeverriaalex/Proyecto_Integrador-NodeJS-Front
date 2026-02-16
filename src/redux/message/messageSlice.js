import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    visible: false,
    message: null
};

export const messageSlice = createSlice({
    name: 'message',
    initialState: INITIAL_STATE,
    reducers: {
        toggleMessageShow: (state, action) => {
            return {
                ...state,
                visible: !state.visible,
                message: action.payload
            };
        }
    }
});

export const { setMessage, toggleMessageShow } = messageSlice.actions;
export default messageSlice.reducer;