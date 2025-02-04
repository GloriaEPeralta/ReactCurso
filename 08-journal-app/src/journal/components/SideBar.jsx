import { TurnedInNot } from "@mui/icons-material"
import { Box,Divider,Drawer, Grid2, List,ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { ListItemText } from "@mui/material"    // ListItemText is a component  
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"

export const SideBar = ({drawerWidth=240}) => {

    const {displayName,email}=useSelector(state=>state.auth);  
    const {notes}=useSelector(state=>state.journal);        

    

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

                    {displayName}
               
                </Typography>
                
            </Toolbar>
            <Divider /> 
            <List>
                {
                    notes.map(note => (    
                        <SideBarItem key={note.id} {...note} />
                    ))   
                }
            </List>
        </Drawer> 
    </Box>
  )
}
