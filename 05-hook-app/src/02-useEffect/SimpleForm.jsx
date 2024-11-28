import { useEffect, useState } from 'react';   
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState,setFormState]=useState({ 
        username:'katyperalta',
        email:'katyperalta@google.com',
    });
    const {username,email}=formState;

    const onInputChange = ({target}) => {
        const {name,value}=target;
        // esta instrucción es para que se mantenga el valor anterior
        // y se actualice el nuevo valor y que aparezca en el input
        setFormState({
            ...formState,
            [name]:value,
        }); 
    }
    
    // ante cualquier evento que se dispare en el formulario
    // se ejecuta el useEffect
    useEffect(() => {   
       // console.log('useEffect called');
    },[]);
    // el segundo argumento es un arreglo de dependencias
    // si se deja vacío, se ejecuta una sola vez
    useEffect  (() => {
        //console.log('formState changed');
    },[formState]);
    // si se pone formState, se ejecuta cada vez que se cambie el estado
    useEffect  (() => {
        //console.log('email changed');
    },[email]); 
    // si se pone email, se ejecuta cada vez que se cambie el email


  return (
    <>
        <h1>Formulario simple </h1>
        <hr/>
        <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Tu nombre"
            value={username}
            onChange={onInputChange}    
        />
        <input
            type="email"
            name="email"
            className="form-control mt-2"
            placeholder="correo@google.com"
            value={email}   
            onChange={onInputChange}
        />
        { (username==='katyperalta') && <Message /> }   

    </>
  )
}
