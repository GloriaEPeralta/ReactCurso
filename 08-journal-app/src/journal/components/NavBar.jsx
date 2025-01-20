import { useDispatch } from 'react-redux'   
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'  
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material'
import { startLogout } from '../../store/auth';

export const NavBar = ({drawerWidth=240}) => {
    const dispatch = useDispatch();     

    const onLogout = () => {    
        
        dispatch(startLogout());    

    }
  return (
    <AppBar 
        position='fixed'
        sx={{
            width:{sm: `calc(100% - ${drawerWidth}px)`},
            ml:{sm: `${drawerWidth}px`}
        }} >
        <Toolbar>   
            <IconButton 
                color='inherit'
                edge='start'
                sx={{mr:2, display:{sm:'none'}}}  >
                <MenuOutlined />    
            </IconButton>
            <Grid2 container direction='row' justify='space-between' alignItems='center' > 
                <Typography variant='h6' noWrap component='div' >   
                    Journal App
                </Typography>
                </Grid2>
                <Grid2 sx={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>  
                    <IconButton color='error'
                        onClick={onLogout} >
                        <LogoutOutlined/>
                    
                        </IconButton>
                </Grid2>
        </Toolbar>

    </AppBar>
    
  )
}
