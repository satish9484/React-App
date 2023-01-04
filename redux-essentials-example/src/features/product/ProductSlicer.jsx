import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstPage: 1,
  middlePage: 2,
  lastPage: 3,
  page:1,
  selectedProducts: 0,
  subTotal: 0,
  productInfo: {
    prod_name: "Brand new Product",
    prod_description: "Check out Now",
    prod_price: "112",
    prod_quantity: "12",
    image: "",
    imageFile:""

  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changePageNumber(state, action) {
      const { firstPage, middlePage, lastPage } = action.payload;
      state.firstPage = firstPage;
      state.middlePage = middlePage;
      state.lastPage = lastPage;
    },

    updateProductInof(state, action) {
      const { prod_name, prod_description, prod_price, prod_quantity, image,imageFile } =
        action.payload;
      state.productInfo.prod_name = prod_name;
      state.productInfo.prod_description = prod_description;
      state.productInfo.prod_price = prod_price;
      state.productInfo.prod_quantity = prod_quantity;
      state.productInfo.image = image;
      state.productInfo.imageFile = imageFile;
    },

    setCartProductNumber: (state, action) => {
      state.selectedProducts = action.payload;
    },

    setDisplayPageNumber(state,action){
      const  page  = action.payload;
      state.page = page;
    },


    totalPayAbleAmount: (state, action) => {
      state.subTotal = action.payload.reduce((a, b) => {
        return a + b;
      });
    },


  },
});

export const selectAll = (state) => state.products;

export const totalAmount = (state) => state.products.subTotal;

export const currentPage = (state) => state.products.page;


export const cartItems = (state) => state.products.selectedProducts;

export const { totalPayAbleAmount, changePageNumber, updateProductInof, setCartProductNumber,setDisplayPageNumber } =
  productSlice.actions;

export default productSlice.reducer;
