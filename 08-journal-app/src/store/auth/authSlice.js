import { display } from '@mui/system';
import { createSlice } from '@reduxjs/toolkit'
import { useId } from 'react';



export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'checking' | 'authenticated' | 'not-authenticated'
    uid: null,
    email: null,
    displayname: null,  
    photoURL: null,
    errorMessage: null,
    
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated'
      state.uid =payload.uid;
      state.email = payload.email;
      state.displayname = payload.displayname;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;  
    }, 
    logout: (state, {payload}) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayname = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;  
    }, 
    chekingCredentials: (state, action) => {
      state.status = 'checking'
    },            
  }
});

export const {login,logout,chekingCredentials} = authSlice.actions

export default authSlice.reducer    
