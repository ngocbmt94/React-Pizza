import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const initialState = { cart: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new Item
      state.cart = [...state.cart, action.payload];
    },
    deleteItem(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantityItem(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (!item) return;
      item.quantity += 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantityItem(state, action) {
      // payload = id
      const item = state.cart.find((item) => item?.pizzaId === action.payload);

      if (!item) return;
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action); // delete item if quantity = 0 by call reducer deleteItem
    },
    clearAllCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantityItem,
  decreaseQuantityItem,
  clearAllCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// selector functions will centraliza in a place, and pass into useSelector to get value
// selector functions to compute something base on state. And prefix to start is get (getPrice , getTotal..)
// can use Reselect library to optimize selector functions
export const getTotalPrice = (state) =>
  state.cart.cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0,
  );
export const getTotalQuantityPizza = (state) =>
  state.cart.cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );
export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = function (id) {
  return (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
