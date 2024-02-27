import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  id: number;
  title: string;
  size: string;
  quantity: number;
  price: number;
  sku: number;
}

const initialState: Array<ICartState> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartState>) => {
      const sameItem = state.find((item) => {
        return (
          action.payload.sku === item.sku && action.payload.size === item.size
        );
      });
      if (sameItem) {
        state.map((item) => {
          if (action.payload.sku === item.sku) {
            return (item.quantity += action.payload.quantity);
          }
        });
      } else {
        state.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const newState = state.filter((item) => action.payload !== item.sku);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    updateStore: (state, action: PayloadAction<ICartState[]>) => {
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return (state = action.payload);
    },
  },
});

export const { addItem, deleteItem, updateStore } = cartSlice.actions;

export default cartSlice.reducer;
