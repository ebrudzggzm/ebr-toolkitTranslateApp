import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import translateReducer from "./slices/translateSlice";
//import updatedReducer from "./slices/updatedSlice";

export default configureStore({
  reducer: { languageReducer,translateReducer },
});
