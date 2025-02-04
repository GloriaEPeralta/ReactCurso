import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';  // Add this line
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {
  const dispatch = useDispatch(); 
  const {isSaving,active} = useSelector(state => state.journal);   

  const onClickNewNote = () => {  
    dispatch(startNewNote());

  } 

  return (
  <JournalLayout> 
   
  {
    // si hay una nota activa
    (!!active)
    ? <NoteView />
    : <NothingSelectedView/>  
  }
    

   
     
    <IconButton 
      onClick={onClickNewNote}  
      disabled={isSaving}
      sx={{
        color:'white', 
        backgroundColor:'primary.main',
        fontSize:30,
        ':hover':{backgroundColor: 'error.main',opacity:0.9},
        position:'fixed',
        right   : 50,
        bottom  : 50, 
      }} 
      >
      <AddOutlined  sx={{fontSize:30}} />
        </IconButton> 

   
    
  </JournalLayout>  


  )
}
