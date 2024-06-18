import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global/globalSlice";
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    car: carReducer,
  },
});
