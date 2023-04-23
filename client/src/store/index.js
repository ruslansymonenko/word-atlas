import { configureStore } from '@reduxjs/toolkit';

import alertReducer from './slices/alertSlice';
import authReducer from './slices/authSlice';
import userDataModalSlice from './slices/userDataModalSlice';


export default configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    userDataModal: userDataModalSlice
  }
});