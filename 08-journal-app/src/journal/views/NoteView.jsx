import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"


export const NoteView = () => {
  return (
    <Grid2 container direction='row' 
      justifyContent='space-between' 
      alignItems='center' 
      sx={{mb:1}} > 
        <Grid2 item >  
            <Typography fontSize={39} fontWeight='Light' >17 de Diciembre 2024</Typography>

        </Grid2>
        <Grid2 item >  
           <Button variant='contained' color='primary' >
              <SaveOutlined sx={{fontSize:30, mr:1}} />  
              Guardar
            </Button>  
        </Grid2>
        <Grid2 container >
          <TextField   
            type="text"
            variant="filled"  
            fullWidth
            placeholder="Ingrese un Título"  
            label="Título"
            sx={{border:'none', mb:1}}
          /> 
           <TextField   
            type="text"
            variant="filled"  
            fullWidth
            multiline
            placeholder="¿Qué pasó hoy?"    
           
            minRows={5}
          /> 
          {/* Galeria de imágenes */}
          <ImageGalery />
        </Grid2>  
    </Grid2>
  )
}
