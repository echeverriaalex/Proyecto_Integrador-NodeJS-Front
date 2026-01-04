import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
    hiddenMenu: true
};

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) =>{
            return{
                ...state,
                currentUser: action.payload
            }
        },
        toggleMenuHidden: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu
            };
        },
        isFetching: (state) => {
            return{
                ...state,
                isLoading: true,
                error: false,
            }
        },
        success: (state, action) =>{
            return{
                ...state,
                currentUser: [...action.payload],
                isLoading: false,
                error: false,
            }
        },        
        isError: (state) =>{      
            return{
                ...state,
                isLoading: false,
                error: "Error en Pokemons Slice al cargar los pokemones",
            }
        }
    },
});

export const { isFetching, success, setCurrentUser, isError, toggleMenuHidden } = userSlice.actions;
export default userSlice.reducer;