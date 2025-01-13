import { TurnedInNot } from "@mui/icons-material"
import { Box,Divider,Drawer, Grid2, List,ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { ListItemText } from "@mui/material"    // ListItemText is a component  

export const SideBar = ({drawerWidth=240}) => {
  return (
    <Box
        component='nav'
        sx={{ width:{ sm:drawerWidth }, 
        flexShrink: { sm:0}, display: { xs: 'none', sm: 'block' }  }}

    >
   
        <Drawer
            variant="permanent"
            open={true}
            sx={{
                display: { xs:  'block' },       
                width: { sm: drawerWidth },
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
            }}  

        >
            <Toolbar>

                <Typography variant='h6' noWrap component='div' >
                    Katy Peralta
                </Typography>
                
            </Toolbar>
            <Divider /> 
            <List>
                {
                    ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'].map(text => (    
                        <ListItem  key={text} disablePadding>
                           <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid2 container > 
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Loren Loren Loren Loren'}/>
                                   
                                </Grid2>
                           </ListItemButton>
                        </ListItem>
                    ))   
                }
            </List>
        </Drawer> 
    </Box>
  )
}
