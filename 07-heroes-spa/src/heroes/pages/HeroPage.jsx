import { Navigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers/getHeroeById";  // Importamos la función getHeroeById


export const HeroPage = () => {

  const {id}= useParams(); 
  const hero = getHeroeById(id);  // Obtenemos el héroe por id

  console.log(hero);
  
   if (!hero) {
    return <Navigate to="/marvel" />;  // Si no existe el héroe, redirigimos a la página principal     
   }
    

console.log("HeroPage.jsx");  
  return (
    <>
      <h1>{hero.id}</h1>
      <hr />
      <h2>OTRA COSA</h2>
    </>
  );
}
