import { createAction, createSlice } from "@reduxjs/toolkit";

import { ICoin } from "@/models";

// ACTIONS
export const fetchCoinsRequest = createAction("COINS/REQUESTS");
export const fetchCoinsSuccess = createAction<ICoin[]>("COINS/SUCCESS");
export const fetchCoinsFailure = createAction("COINS/FAILURE");

type TCoinState = {
  isFetching: boolean;
  coins: ICoin[];
};

const initialState: TCoinState = {
  isFetching: false,
  coins: [],
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinsRequest, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchCoinsSuccess, (state, action) => {
        state.isFetching = false;
        state.coins = action.payload;
      })
      .addCase(fetchCoinsFailure, (state) => {
        state.isFetching = false;
      });
  },
});

export default coinSlice;
