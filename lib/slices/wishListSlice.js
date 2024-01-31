import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [{ id: 0, name: "canapé", price: 5000 }],
};
const wishListSplice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
});

export default wishListSplice.reducer;
