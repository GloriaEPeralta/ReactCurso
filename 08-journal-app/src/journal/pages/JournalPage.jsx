import { Typography } from '@mui/material'; 
import { MailOutline } from '@mui/icons-material';  // Add this line
import { LoginPage } from '../../auth/pages/LoginPage';
import { JournalLayout } from '../layout/JournalLayout';  // Add this line

export const JournalPage = () => {
  return (
  <JournalLayout> 
    <Typography >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo repellendus possimus, beatae doloribus veniam magnam dolorem deleniti blanditiis eaque aliquid veritatis officiis esse odit? Consequatur provident perferendis totam dicta?  
    </Typography>
    {/* NothinSelected */}  
    {/* NoteView */}
  </JournalLayout>  


  )
}
