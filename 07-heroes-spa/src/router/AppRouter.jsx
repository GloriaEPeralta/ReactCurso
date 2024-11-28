import {  Route, Routes } from "react-router-dom";
import { HeroesRoutes} from '../heroes';    // Se importan las páginas de Marvel y DC 
import {LoginPage} from '../auth';   // Se importa la página de Login


export const AppRouter = () => {
  return (
    <>
      
      <Routes>
          
          <Route path="login" element={<LoginPage/>} />
          <Route path="/*" element={<HeroesRoutes />} />  
          

      </Routes>
     
    </>
  )
}
