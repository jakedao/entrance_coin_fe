import { combineReducers } from "@reduxjs/toolkit";

import coinSlice from "./coinSlice";

const rootReducer = combineReducers({
  coins: coinSlice.reducer,
});

export default rootReducer;
