import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';


const initialState = {
  user: null,
  isLoading: false,
  status: null
}

export const getUserData = createAsyncThunk('userData/getUserData', async () => {
  try {
    const { data } = await axios.get('/user/getUser')
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const setUserNickName = createAsyncThunk('userData/setUserNickName', async ({nickname, userId}) => {
  try {
    const { data } = await axios.post('/user/setNickName', {nickname, userId});
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
})


export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending] : (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getUserData.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
    [getUserData.rejected] : (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
  }
})

export default userDataSlice.reducer;