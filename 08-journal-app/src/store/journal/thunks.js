import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";  
import { FireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote} from "./";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () =>{
    return async (dispatch,getState) => {

        //Todo: tarea dispach 
            // esto es de la tarea todo
       dispatch(savingNewNote());
        
        //console.log(getState());    
        const {uid}= getState().auth;
        const newNote = {
            title:'',
            body:'',
            imageUrls:[],
            date: new Date().getTime(),
           
           
        }
       
        const newDoc= doc(collection(FireBaseDB,`${uid}/journal/notes`));
        await setDoc(newDoc,newNote);       

        newNote.id=newDoc.id;
        // dispatch
        dispatch(addNewEmptyNote(newNote)); 
        dispatch(setActiveNote(newNote)); 
     

        //console.log({newDoc,setDocResp});   

        
    }   

}
export const startLoadingNotes = (uid) =>{
    return async (dispatch,getState) => {
        
        const {uid}= getState().auth;
        if (!uid) throw new Error('El UID NO EXISTE'); 

       
        const notes= await loadNotes(uid);

        dispatch(setNotes(notes));  
        
    }
}       

export const startSaveNote = () =>{
    return async (dispatch,getState) => {

        dispatch(setSaving());

        const {uid}= getState().auth;
        const {active:note} = getState().journal;

        const noteToFireStone = {...note};
        delete noteToFireStone.id;
        const docRef=doc(FireBaseDB,`${uid}/journal/notes/${note.id}`);
        await setDoc(docRef,noteToFireStone,{merge:true});  
        dispatch(updateNote(note) );
        
    }
}       

export const startUpLoadingFiles = (files=[]) =>{
    return async (dispatch) => {

        dispatch(setSaving());  
        await fileUpload(files[0]); 
        const fileUploadPromises= [];
        for(const file of files){  
            // esta creando el arreglo de promesas  
            fileUploadPromises.push(fileUpload(file)); 
        }

        const photosUrls=await Promise.all(fileUploadPromises);
        
        dispatch(setPhotosToActiveNote(photosUrls));

    }
}  

export const starDeletingNote = () => {
    return async (dispatch,getState) => {
        const {uid}= getState().auth;
        const {active:note} = getState().journal;
         
        const docRef=doc(FireBaseDB,`${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
     
        dispatch(deleteNoteById(note.id));  
        // todo: borrar el active note
    }
}   


