import { configureStore } from "@reduxjs/toolkit";
import utilsSlice from "./utilsSlice";

const store = configureStore({
  reducer: { utils: utilsSlice },
});

export default store;
