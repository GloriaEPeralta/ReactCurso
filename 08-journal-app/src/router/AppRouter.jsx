import { Navigate, Route, Routes } from 'react-router-dom';  // Importamos Routes
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';  

import { CheckingAuth } from '../UI/Components/CheckingAuth';  // Importamos CheckingAuth


import { useCheckAuth } from '../hooks';




export const AppRouter = () => {
  
  const {status} = useCheckAuth();  // Usamos useCheckAuth

  if(status==='checking'){
    return <CheckingAuth /> 

  }

  return (
   <Routes>
      {
        /* Si el usuario esta autenticado, redirigir a / */
        (status === 'authenticated')
        ? <Route path="/*" element={<JournalRoutes />} />  
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
                 
      }
      <Route path='/*' element={<Navigate to='/auth/login' /> } /> 
      
        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={<AuthRoutes />} /> */} 
        
        {/*JournalApp*/}  
       {/* <Route path="/*" element={<JournalRoutes />} /> */ }
       
   </Routes>
  )
}
