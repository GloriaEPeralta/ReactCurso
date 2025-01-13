
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';  // Add this line
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
  <JournalLayout> 
   

    {/* NothinSelected */}  
    <NothingSelectedView />   
    <IconButton 
      
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

    {/* NoteView */}
    
  </JournalLayout>  


  )
}
