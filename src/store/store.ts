import { configureStore } from "@reduxjs/toolkit";

import { getProductsSlice } from "./slicers/getProducts";
import { cartSlice } from "./slicers/cartSlice";
import { catalogSlice } from "./slicers/catalogSlice";

export const store = configureStore({
  reducer: {
    [getProductsSlice.reducerPath]: getProductsSlice.reducer,
    catalogFilter: catalogSlice.reducer,
    cartState: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
