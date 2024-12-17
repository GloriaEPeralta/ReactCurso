import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers/getHeroeById";  // Importamos la función getHeroeById
import { useMemo } from "react";


export const HeroPage = () => {

  const {id}= useParams();
  const navigate=useNavigate(); // Hook para navegar entre rutas

  const hero = useMemo(() => getHeroeById(id), [id]);  // Obtenemos el héroe por id 
  
  getHeroeById(id);  // Obtenemos el héroe por id

  console.log(hero);
  
   if (!hero) {
    return <Navigate to="/marvel" />;  // Si no existe el héroe, redirigimos a la página principal     
   }
    

  const onNavigateBack = () => {
    navigate(-1);  // Navegamos hacia atrás
  } 

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"  
          />

      </div>  
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">  
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>   
        </ul>
        <h5 className="mt-3">Characters</h5> 
        <p>{hero.characters}</p>  
        <button 
          className="btn btn-outline-primary" 
          onClick={onNavigateBack}>Return</button>   
      </div>
     
     
    </div>
  );
}
