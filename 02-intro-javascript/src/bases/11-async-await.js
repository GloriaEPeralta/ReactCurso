
const getImagen= async() => {
   try {
    const apiKey = 'ASe74bnOKIaBvMqhXASJjUWhZmQl5m0M';

    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);    // fetch devuelve una promesa

    const {data} = await respuesta.json();  // Respuesta de la petición a formato json  
    const {url} = data.images.original; // Desestructuración
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
   } catch (error) {
    // aquí manejo el error
   }
    
}

getImagen().then(console.log); // Promise { <pending> }









