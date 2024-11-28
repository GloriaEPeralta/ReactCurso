import {heroes} from '../data/heroes.jx'  // Importamos el array de heroes

export const getHeroesByPublisher = ({publisher}) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];  // Definimos los publishers válidos    
    if (!validPublishers.includes(publisher)) {  // Si el publisher recibido es válido
        throw new Error(`Publisher "${publisher}" no es correcto`);  // Lanzamos un error   
    }
    return heroes.filter(hero => hero.publisher === publisher);  // Filtramos los heroes por publisher  
    
}