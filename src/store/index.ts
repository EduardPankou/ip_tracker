import { configureStore } from '@reduxjs/toolkit';
import address from './slices/address';

const store = configureStore({
    reducer: {
        address: address,
    },
});

export default store;
