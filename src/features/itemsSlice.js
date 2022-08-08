import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});

export const selectAllItems = state => state.items.items

export default itemsSlice.reducer;
