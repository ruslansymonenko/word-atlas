import { createSlice } from '@reduxjs/toolkit';

/*
  Available types for alert: 
  - alert-standart
  - alert-error
*/

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: '',
    type: '',
    active: false,
  },
  reducers: {
    showAlert: (state, action) => {
      if (action.payload) {
        state.message = action.payload.message;
        state.type = action.payload.type;
        state.active = true;
      } else {
        state.message = 'Some error...';
        state.type = 'alert-error';
        state.active = true;
      }
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