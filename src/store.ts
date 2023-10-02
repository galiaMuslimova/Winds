import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { entityApi } from "services/entityApi";

export const store = configureStore({
  reducer: {
    [entityApi.reducerPath]: entityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(entityApi.middleware),
});

setupListeners(store.dispatch);
