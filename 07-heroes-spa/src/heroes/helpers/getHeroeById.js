import {heroes} from '../data/heroes.jx';  // Importamos el array de heroes


export const getHeroeById = (id) => {
  
   return heroes.find(hero => hero.id === id);  // Buscamos el héroe por id y lo retornamos
}
