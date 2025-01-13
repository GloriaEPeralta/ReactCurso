import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {
  const dispatch = useDispatch(); // Import the useDispatch hook from react-redux
  const {isLoading, pokemons=[],page}=useSelector(state=>state.pokemons); // Destructure the isLoading and pokemons properties from the state 

  useEffect(() => {
    dispatch(getPokemons()); // Dispatch the getPokemons action creator
  }, [])

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        
        {isLoading && <p>Loading...</p>} 
        <h2>Pokemons</h2>
        <ul className="list-group">
          {
          pokemons.map((pokemon)=>(
            <li className="list-group-item" key={pokemon.name}>{pokemon.name}</li>  // Map over the pokemons array and display the name of each pokemon
          ))
          }
            
        </ul>
        <button className="btn btn-primary"
        onClick={()=>dispatch(getPokemons(page))}  // Dispatch the getPokemons action creator with the page parameter
        >Siguiente</button>  

    </>
  )
}
