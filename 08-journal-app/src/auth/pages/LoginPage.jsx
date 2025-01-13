import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';    
import {Link as RouterLink} from 'react-router-dom';  
import { Google } from '@mui/icons-material';
import {Alert,Grid2, TextField, Typography, Button, Link} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginEmailPassword } from '../../store/auth';


export const LoginPage = () => {

  const {status,errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();   

  const {email, password,onInputChange}=useForm({
    email:'ekaterine.peralta@gmail.com',
    password:'123456',
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => { 
    event.preventDefault(); 
    console.log("SUBMIT EN LOGIN");  
    dispatch(startLoginEmailPassword(email,password));  
      
  }

  const onGoogleSignIn = () => {   
    console.log('Google login');
    dispatch(startGoogleSignIn ());
  }


  return (
    <AuthLayout title='Login'>
     
   
        <form onSubmit={onSubmit}>      
            <Grid2 container > 
              <Grid2 item xs={12} sx={{mt:2}}>
                <TextField 
                label="correo" 
                type='email' 
                placeholder='correo@gmail.com'
                fullWidth
                name='email'  
                value={email} 
                onChange={onInputChange}  
                />
              </Grid2>
              <Grid2 item xs={12} sx={{mt:2}}>
                <TextField 
                label="contraseña" 
                type='password' 
                placeholder='contraseña'
                fullWidth
                name='password'  
                value={password} 
                onChange={onInputChange}    
                />
              </Grid2>
            
            <Grid2 
              container
              display={!!errorMessage ? '' : 'none'} 
              sx={{mt:1}} >
              <Grid2 item xs={12} 
                  >   
                  <Alert severity='error' > 
                    {errorMessage} 
                    ERRROR 
                  </Alert>  
              </Grid2>
            </Grid2>
              <Grid2 container spacing={2} sx={{mb:2, mt:1}} >  
                <Grid2 item xs={12} sm={6} >  
                  <Button 
                    disabled={isAuthenticating} 
                    type='submit' 
                    variant='contained' fullWidth> 
                    Login
                  </Button>
                </Grid2>
                <Grid2 item xs={12} sm={6} >
                  <Button  
                    disabled={isAuthenticating}
                    variant='contained' 
                    fullWidth
                    onClick={onGoogleSignIn}  > 
                    <Google /> 
                    <Typography sx={{ml:1}}>Google</Typography>
                   
                  </Button> 
                </Grid2>  
              </Grid2>  
               <Grid2 container direction='row' justifyContent='end'> 
                <Link component={RouterLink} color='inherit' to="/auth/register" >
                  Crear una cuenta
                </Link> 

                </Grid2>
            </Grid2>
        </form>
    </AuthLayout>
  )
}
