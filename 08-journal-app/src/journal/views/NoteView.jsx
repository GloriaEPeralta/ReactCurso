import { useEffect, useMemo, useRef } from "react";

import { Delete, DeleteOutlined, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid2, IconButton, TextField, Typography, useFormControl } from "@mui/material"
import  Swal from "sweetalert2";  
import 'sweetalert2/dist/sweetalert2.css';
import { ImageGalery } from "../components"
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux"

import { setActiveNote, starDeletingNote, startSaveNote, startUpLoadingFiles } from "../../store/journal";




export const NoteView = () => {

  const dispatch = useDispatch();

  // useSelector( state => state.notes.active ) 
  const { active: note, messageSaved, isSaving} = useSelector( state => state.journal );

  const { body,title, date, onInputChange, formState } = useForm(note);

  const dateString= useMemo   ( () => {

    const newDate = new Date(date);
    return  newDate.toUTCString();

  },[date]);

  const fileInputRef= useRef();

  useEffect(() => { 
    dispatch( setActiveNote(formState) );
  }, [formState]) 

  useEffect(() => { 
    if (messageSaved.length>0)  
    {
      Swal.fire({
        title: 'Nota Guardada',
        text: messageSaved,
        icon: 'success',
        confirmButtonText: '  Ok' });  
    }
    
  }, [messageSaved]) 
  
  const onSaveNote = () => {

    dispatch(startSaveNote());  

  }

  const onFileInputChange = ({target}) => {
    if (target.files===0) return;  
      dispatch( startUpLoadingFiles(target.files) ); 
   
  } 

  const onDelete = () => {  
    dispatch( starDeletingNote() ); 
  }

  return (
    <Grid2 
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{mb:1}}
      className='animate__animated animate__fadeIn animate__faster' 
      > 
        <Grid2  >  
            <Typography fontSize={20} fontWeight='light' >{ dateString }</Typography>

        </Grid2>
        <Grid2  >  
          <input type="file" 
            multiple
            ref={fileInputRef}  
            onChange={onFileInputChange}
            style={{display:'none'}}  
           />  
          <IconButton color='primary'
            disabled={isSaving} 
            onClick={ () => fileInputRef.current.click() }
            >  
            <UploadOutlined  /> 
          </IconButton> 

           <Button
            disabled={isSaving} 
            onClick={ onSaveNote} 
            color='primary' 
            sx={{padding:2}} >
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
            name="title"
            value={title} 
            onChange={onInputChange}
          /> 
           <TextField   
            type="text"
            variant="filled"  
            fullWidth
            multiline
            placeholder="¿Qué pasó hoy?"    
           
            minRows={5}
            name="body"
            value={body}
            onChange={onInputChange}
          /> 
         
         </Grid2>  
        <Grid2 container justifyContent='end' >
          <Button  
            onClick={onDelete}
            sx={{mt:2}}
            color='error' 

            >
            <DeleteOutlined  /> 
            Borrar
          </Button>

          </Grid2>
          {/* Galeria de imágenes */}
          <ImageGalery images={note.imageUrls}/>
         
          </Grid2>
    
  )
}
