


import  { useContext } from 'react'
import { Navigate } from 'react-router-dom';    // Se importa Navigate
import { AuthContext } from '../auth/context';  // Se importa el contexto de AuthContext

export const PublicRoute = ({children}) => {
    const {logged} = useContext(  AuthContext);
    if (!logged) {
        return children;
    } else {
        return <Navigate to="/marvel" />
    }   
  
 
}