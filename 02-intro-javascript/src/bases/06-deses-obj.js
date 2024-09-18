// desestructuración de objetos
// asignación desestructurante  
const persona = {   
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};  

console.log(persona.nombre);
console.log(persona.edad);  
console.log(persona.clave);

const { nombre:nombre2, edad, clave } = persona;
console.log(nombre2);



const retornaPersona = (usuario) => {   
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave);
}   

retornaPersona(persona);

const retornaPersona2 = ({ nombre, edad, rango='Capitan' }) => {   
    console.log(nombre, edad, rango);
}

retornaPersona2(persona);

const useContext = ({ nombre, edad, rango='Capitan' }) => {   
    
    return {
        nombreClave: clave,
        anios: edad,
        latlon: {
            lat: 14.1232,
            lon: -12.3232
        }           
    }
}

const { nombreClave, anios, latlon:{lat,lon} } = useContext(persona);
// aqui marca error , no estoy seguro por que   
console.log(nombreClave, anios);
console.log(lat, lon);




