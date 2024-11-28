

function saludar(nombre) {
    return `Hola ${nombre}`;
}       
console.log(saludar('Katy'));


const saludar2 = (nombre)=> {
    return `Hola ${nombre}`;
}   

const saludar3 = (nombre)=> `Hola ${nombre}`;


console.log(saludar2('Katy'));  

const getUser = () => ({    
    uid: 'ABC123',
    username: 'El_Papi1502'
}); 

const getUserActivo = (nombre) => ({    
    uid: 'ABC567',
    username: nombre
}); 

const usuarioActivo = getUserActivo('Katy');
console.log(usuarioActivo); 

