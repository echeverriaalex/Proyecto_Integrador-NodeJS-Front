import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistStore from 'redux-persist/es/persistStore';


import moviesReducer from './slice/moviesSlice';
import genresReducer from './slice/genresSlice';
import menuReducer from './slice/menuSLice';

const reducers = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    menu: menuReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['movies', 'cart']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
        serializableCheck: {
            //ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER, RESTORE]
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});

export default store;
export const persistor = persistStore(store);