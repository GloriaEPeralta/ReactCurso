import { pokemonApi } from '../../../api/pokemonApi';
import { startLoadingPokemons,setPokemons } from './pokemonSlice';  // Import the startLoadingPokemons action creator from the pokemonSlice.js file
export const getPokemons = (page=0) =>  {
    
    return async (dispatch,getState) => {
         dispatch(startLoadingPokemons());   
        // Todo: realizar petición HTTP
      //  const resp=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);  // Fetch the data from the API
      //     const data = await resp.json(); // Destructure the results from the response
      const {data}= await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`); // Fetch the data from the API   
        console.log('data',data);
        dispatch(setPokemons({page:page+1,pokemons:data.results}));     
    }

};
