import {Link as RouterLink} from 'react-router-dom';  
import { Google } from '@mui/icons-material';
import {Grid2, TextField, Typography, Button, Link} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
     
   
        <form>  
            <Grid2 container > 
              <Grid2 item xs={12} sx={{mt:2}}>
                <TextField 
                label="correo" 
                type='email' 
                placeholder='correo@gmail.com'
                fullWidth  
                />
              </Grid2>
              <Grid2 item xs={12} sx={{mt:2}}>
                <TextField 
                label="contraseña" 
                type='password' 
                placeholder='contraseña'
                fullWidth  
                />
              </Grid2>
            
              <Grid2 container spacing={2} sx={{mb:2, mt:1}} >  
                <Grid2 item xs={12} sm={6} >  
                  <Button  variant='contained' fullWidth> 
                    Login
                  </Button>
                </Grid2>
                <Grid2 item xs={6} sm={6} >
                  <Button  variant='contained' fullWidth> 
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
