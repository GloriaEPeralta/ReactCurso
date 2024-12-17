import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';  // Importamos la librería queryString  
import { HeroCard } from '../components/HeroCard';  // Importamos el componente HeroCard
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../helpers';  // Importamos la función getHeroesByName 

export const SearchPage = () => {
  const navigate = useNavigate();  // Obtenemos la función useNavigate del hook useNavigate
  const location=useLocation();
  const {q=''}=queryString.parse(location.search);  // Obtenemos el query string de la URL

  const heroes = getHeroesByName(q);  // Obtenemos los héroes que coincidan con la búsqueda   

  const {searchText,onInputChange} =useForm({
    searchText: q  // Inicializamos el campo searchText con el valor de q
  });  // Desestructuramos el objeto que retorna el hook useForm 
  const onSearchSubmit = (event) => {
    event.preventDefault();
   /* if(searchText.trim().length <= 1){
      return;
    } */
    navigate(`?q=${searchText}`);  // Navegamos a la ruta /search/{search  text}

  } 

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>  Search Form</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText" 
              autoComplete="off"
              value={searchText }
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q==='')
            ? <div className="alert alert-info">  Search a hero... </div>
            : (heroes.length===0) && <div className="alert alert-danger"> No hero found with that <b> {q} </b> </div>
             
          }
          
         
          {heroes.map(hero=>( 
            <HeroCard key={hero.id} {...hero} />
          ))} 

          {/*   herocard */} 
        </div>          
      </div>
      
    </>
  )
}
