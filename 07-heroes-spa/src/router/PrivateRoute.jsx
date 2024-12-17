import  { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';    // Se importa Navigate
import { AuthContext } from '../auth/context';  // Se importa el contexto de AuthContext
import { use } from 'react';

export const PrivateRoute = ({children}) => {
    const {logged} = useContext(  AuthContext);
    const {pathname,search}=useLocation();

    const lastPath=pathname+search; // Se guarda la última ruta visitada
    localStorage.setItem('lastPath',lastPath); // Se guarda en el local storage 
    

    if (logged) {
        return children;
    } else {
        return <Navigate to="/login" />
    }   
  
 
}
