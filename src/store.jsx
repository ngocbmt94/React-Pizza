import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import userReducer from './features/users/userSlice';
import cartReducer from './features/carts/cartSlice';

export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
  },
  applyMiddleware(thunk),
);
