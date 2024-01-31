import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  items: [],
  numberOfItems: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartSlice.reducer;
