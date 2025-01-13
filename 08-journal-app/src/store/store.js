import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    // Aquí irán los reducers
    auth: authSlice.reducer,    
  },
})
