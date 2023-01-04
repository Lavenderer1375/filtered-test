import { createSlice } from '@reduxjs/toolkit';

export const asideSlice = createSlice({
  name: 'aside',
  initialState: {
    side: true,
  },
  reducers: {
    setAside: (state, action) => {
      state.side = action.payload;
    },
  },
});
export const { setAside } = asideSlice.actions;
export default asideSlice.reducer;
