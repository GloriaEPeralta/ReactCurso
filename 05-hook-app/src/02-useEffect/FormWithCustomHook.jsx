import { useEffect } from 'react';   
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {
    
    const {formState,onInputChange,username,email,password,onResetForm}=useForm({
        username:'',
        email:'',
        password:'',    

    });
    //const {username,email,password}=formState;  

   
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
        <h1>Formulario con custom Hook </h1>
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
        <input
            type="password"
            name="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            value={password}   
            onChange={onInputChange}
        />
       <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
