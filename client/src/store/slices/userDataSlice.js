import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';


const initialState = {
  message: ''
}

export const getUserData = createAsyncThunk('userData/getUserData', async () => {
  console.log('redux function is work')
  try {
    const { data } = await axios.get('/user/getUser')
    return data;
  } catch (err) {
    console.log(err);
  }
});


export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending] : (state) => {
    },
    [getUserData.fulfilled] : (state, action) => {
      state.message = action.payload?.message
    },
    [getUserData.rejected] : (state, action) => {

    },
  }
})


export default userDataSlice.reducer;