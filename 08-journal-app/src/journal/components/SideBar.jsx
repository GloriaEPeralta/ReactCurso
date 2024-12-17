import { TurnedInNot } from "@mui/icons-material"
import { Box,Divider,Drawer, Grid2, List,ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { ListItemText } from "@mui/material"    // ListItemText is a component  

export const SideBar = ({drawerWith}) => {
  return (
    <Box
        component='nav'
        sx={{ width:{ sm:drawerWith }, flexShrink: { sm:0} }}

    >
   
        <Drawer
            variant="permanent"
            open={true}
            sx={{
                display: { xs:  'block' },       
                width: { sm: drawerWith },
                '& .MuiDrawer-paper': { width: drawerWith, boxSizing: 'border-box' },
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
                        <ListItem button key={text} disablePadding>
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
