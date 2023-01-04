import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(selectedItem) {
        const { id, prod_name, prod_price, prod_quantity, image } =
          selectedItem;
        return {
          payload: {
            id,
            prod_name,
            prod_price,
            prod_quantity,
            image,
          },
        };
      },
    },

    removeProduct(state, action) {
      const id = action.payload;
      const checkExitence = state.find((product) => product.id === id);
      if (checkExitence) {
        return state.filter((product) => product.id !== id);
      }
    },

    updateProduct(state, action) {
      const { id, prod_quantity } = action.payload;
      const checkExitence = state.find((product) => product.id === id);
      if (checkExitence) {
        checkExitence.prod_quantity =
          checkExitence.prod_quantity + prod_quantity;
      }
    },

    // totalcartItems(state) {
    //   console.log(state.CartItems);
    // },
  },
});

export const selectAllProducts = (state) => state.cartItems;

export const { addProduct, removeProduct, updateProduct } = cartSlice.actions;

export default cartSlice.reducer;
