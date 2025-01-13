import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter'; // Import the counterSlice from the counterSlice.js file
import { pokemonSlice } from './slices/pokemon';
import { todosApi } from './apis'; // Import the todoApi from the todoApi.js file

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(todosApi.middleware),    

})

