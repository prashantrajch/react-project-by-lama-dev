import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "prash",
      email: "prash@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = null;
    },
    update: (state, action) => {
      state.userInfo.name = action.payload.name;
      state.userInfo.email = action.payload.email;
    },
    addHello: (state, action) => {
      state.userInfo.name = "Hello " + action.payload.name;
    },
    remove: (state) => (state.userInfo = {}),
  },
});

export const {
  update,
  remove,
  addHello,
  updateSuccess,
  updateError,
  updateStart,
} = userSlice.actions;

export default userSlice.reducer;
