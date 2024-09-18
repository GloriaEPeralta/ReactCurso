
const apiKey = 'ASe74bnOKIaBvMqhXASJjUWhZmQl5m0M';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);    // fetch devuelve una promesa

// es una promesa en cadena
peticion
    .then( resp => resp.json())  // Respuesta de la petición a formato json
    .then( ({data}) => { 
        const {url} = data.images.original; // Desestructuración
        //  console.log(data.images.original.url);  // Respuesta de la petición

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
     } )
    .catch( console.warn );  // En caso de error 
    

