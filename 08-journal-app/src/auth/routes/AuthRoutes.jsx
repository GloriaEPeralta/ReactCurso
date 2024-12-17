import { Navigate, Route, Routes } from 'react-router-dom';  // Routes
import { LoginPage, RegisterPage } from '../pages';



export const AuthRoutes = () => {
  return (
    <Routes >
        <Route path="login" element={<LoginPage />} />  {/* LoginPage */}
        <Route path="register" element={<RegisterPage/>} />  {/* RegisterPage */} 
        
        <Route path="/*" element={<Navigate to="/auth/login"/>} />  {/* LoginPage */}
    </Routes>
  )
}
