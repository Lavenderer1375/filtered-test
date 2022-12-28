import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
  name: 'table',
  initialState: {
    employee: [],
    side: true,
  },
  reducers: {
    getEmployees: (state, action) => {
      state.employee = action.payload;
    },
    searchEmployees: (state, action) => {
      state.employee = action.payload;
    },
    sideHidden: (state, action) => {
      state.side = action === false
    }
  },
});
export const { getEmployees, sideHidden } = tableSlice.actions;
export default tableSlice.reducer;
