import { configureStore } from "@reduxjs/toolkit";
import flashReducer from "./flash/flash.reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: { flash: flashReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
