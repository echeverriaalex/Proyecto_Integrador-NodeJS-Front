import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true,
};

const menuSlice = createSlice({
    name: "menu",
    initialState: INITIAL_STATE,
    reducers: {
        toggleMenuHidden: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            };
        },
    },
});

export default menuSlice.reducer;
export const { toggleMenuHidden } = menuSlice.actions;