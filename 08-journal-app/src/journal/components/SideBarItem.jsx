import { TurnedInNot } from '@mui/icons-material'
import {Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({title='',body,id,date,imageUrls=[]}) => {
   
    const dispatch=useDispatch();   
    const onClick=()=>{ 
        dispatch(setActiveNote({title,body,id,date,imageUrls})); 
        console.log('click');   
        
    }   

    const newTitle=useMemo( ()=>{
        return title.length>17
        ?title.substring(0,17)+'...'
        :title;
    },[title]); 
    

    // poner el onclick
    // mandar el id al padre
    // que el padre haga el dispatch
    // que el padre haga el cambio de active

   



  return (
    <ListItem  key={id} >
        <ListItemButton onClick={onClick}>  
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid2 container > 
                <ListItemText primary={newTitle}/>
                <ListItemText secondary={body}/>
                
            </Grid2>
        </ListItemButton>
    </ListItem>
  )
}
