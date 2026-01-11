import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistStore from 'redux-persist/es/persistStore';
import productsReducer from './slice/productsSlice';
import genresReducer from './slice/genresSlice';
import menuReducer from './slice/menuSLice';
import cartReducer from './cart/cartSlice';
import typeProductShowReducer from './slice/typeProductShowSlice';
import userReducer from './users/userSlice';

const reducers = combineReducers({
    products: productsReducer,
    genres: genresReducer,
    menu: menuReducer,
    typeProductShow: typeProductShowReducer,
    cart: cartReducer,
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products', 'cart', 'user'], // State slices to persist
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