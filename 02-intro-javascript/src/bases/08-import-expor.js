import { heroes } from "../data/heroes";

// puede que no funcione, arr   eglarlo


//const getHeroeById = (id) => heroes.find(heroe => heroe.id === id); 

const getHeroeById=(id)=>{
    return heroes.find(heroe=>heroe.id===id);
}

const getHeroeById2=(id)=>{
    return heroes.find( (heroe) => heroe.id===id);  
          
}



const getHeroesByOwner=(owner)=>{
    return heroes.filter((heroe)=>heroe.owner===owner);     
}
//console.log(getHeroesByOwner('Marvel'));

export {heroes, getHeroeById, getHeroeById2, getHeroesByOwner};
