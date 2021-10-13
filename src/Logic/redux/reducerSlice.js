import { createSlice } from "@reduxjs/toolkit";

import initialState from "./initialState";
import { arrayReducers } from "./reducers"


export const reducerSlice = createSlice({
  name: "actions",
  initialState: initialState,
  reducers: {
    ...arrayReducers,
  },
});

// export const {
//     //export all actions
// } = reducerSlice.actions;

export default reducerSlice.reducer;