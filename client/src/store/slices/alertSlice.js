import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: '',
    type: '',
    active: false,
  },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.active = true;
    },
    hideAlert: (state) => {
      state.message = '';
      state.type = '';
      state.active = false;
    }
  }
})

export const {showAlert, hideAlert} = alertSlice.actions;

export default alertSlice.reducer;