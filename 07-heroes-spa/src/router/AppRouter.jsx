import {  Route, Routes } from "react-router-dom";
import { HeroesRoutes} from '../heroes';    // Se importan las páginas de Marvel y DC 
import {LoginPage} from '../auth';   // Se importa la página de Login
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>
      
      <Routes>
          
         <Route path="login" element={
          <PublicRoute>
            <LoginPage/>  
          </PublicRoute>    
        } />


          <Route path="/*" element={
            <PrivateRoute > 
              <HeroesRoutes />  
            </PrivateRoute>
          } />  

          {/*<Route path="/*" element={<HeroesRoutes />} /> */} 
          {/*  <Route path="login" element={<LoginPage/>} />*/} 
          

      </Routes>
     
    </>
  )
}
