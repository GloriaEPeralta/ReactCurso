import { getHeroeById } from './bases/08-import-expor.js';  

// const promesa= new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         const heroe=getHeroeById(2);
//         resolve(heroe);    
//     }, 2000);   
// });

// promesa.then((heroe) => {
//     console.log('Todo salió bien, gracias a=> ', heroe.name);
// } 
// )
// .catch((err) => {
//     console.warn(err);      
// });

const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                const heroe=getHeroeById(id);
                if (heroe)
                {
                    resolve(heroe); 
                }
                else
                {
                    reject('No se pudo encontrar el héroe');    }
                   
            }, 2000);   
        });
        //return promesa;
        // aunque no se usa el return, asi me gusta mas 
}

getHeroeByIdAsync(1)
.then((heroe) => {
    console.log('Todo salió bien, gracias a=> ', heroe.name);
})
.catch((err) => {
    console.warn(err);      
}); 

// puede quedar asi, pero me gusta mas la forma anterior
// .then(console.log)
// .catch(console.warn);

