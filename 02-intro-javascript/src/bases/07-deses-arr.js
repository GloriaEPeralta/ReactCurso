const personajes = ['Tom', 'Garfield', 'Hello Kitty'];

const [,p2,p3] = personajes;

console.log(p2,p3);

const retornaArreglo = () => { 
    return ['ABC', 123];    

}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const usarNombre = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}       

const [nombre,setNombre]= usarNombre('Tom');
console.log(nombre);
setNombre();


