import { createSlice } from '@reduxjs/toolkit';

export const userDataModalSlice = createSlice({
  name: 'userDataModal',
  initialState: {
    visibility: false
  },
  reducers: {
    showModal: (state) => {
      state.visibility = true;
    },
    hideModal: (state) => {
      state.visibility = false;
    }
  }
})

export const {showModal, hideModal} = userDataModalSlice.actions;

export default userDataModalSlice.reducer;