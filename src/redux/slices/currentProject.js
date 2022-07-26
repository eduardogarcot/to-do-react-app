import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const currentProjectSlice = createSlice({
  name: 'currentProject',
  initialState,
  reducers: {
      setCurrentProject: (state, action) => action.payload,
    }
  },
)

// Action creators are generated for each case reducer function
export const { setCurrentProject } = currentProjectSlice.actions;
export const selectCurrentProject = (state) => state.currentProject;
export default currentProjectSlice.reducer;