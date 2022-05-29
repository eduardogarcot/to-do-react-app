import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

export const isLoggedSlice = createSlice({
  name: 'isLogged',
  initialState,
  reducers: {
      logIn: () => true,
      logOut: () => false,
    }
  },
)

// Action creators are generated for each case reducer function
export const { logIn, logOut } = isLoggedSlice.actions;
export const selectIsLogged = (state) => state.isLogged;
export default isLoggedSlice.reducer;