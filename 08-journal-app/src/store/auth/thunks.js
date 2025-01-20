//import { firebase, googleAuthProvider } from '../../firebase/firebase-config';  
import { login, logout, chekingCredentials } from './';  
import { loginWithEmailPassword,signInWithGoogle,registerUserWithEmailAndPassword, logoutFirebase } from '../../firebase/providers';    


export const checkingAuthenticaction = (email,password) => {  
    return async (dispatch) => {
        dispatch(chekingCredentials());


        // esto no lo ha puesto el profe
        // const user = await firebase.auth().currentUser;
        // if (user) {
        // dispatch(login({
        //     uid: user.uid,
        //     email: user.email,
        //     displayname: user.displayName,
        //     photoURL: user.photoURL
        // }));
        // } else {
        // dispatch(logout());
        // }
    }
    } 

    export const startGoogleSignIn = () => {
        return async (dispatch) => {

            dispatch(chekingCredentials());
            // se pone revisar las credenciales para bloquear el boton  y poner el estado
            const result=await signInWithGoogle();  
           
            if(!result.ok){
                return dispatch(logout( result.errorMessage));    
            }
            dispatch(login(result));  

            
        }
    }
    
    export const startCreatingUserWithEmailPassword = ({email, password,displayName}) => {
        return async (dispatch) => {
            dispatch(chekingCredentials());

            const {ok,uid,photoURL,errorMessage }= await registerUserWithEmailAndPassword({email, password,displayName});
            
            if(!ok){
                 return dispatch(logout( {errorMessage}));    
             }
            dispatch(login({uid,photoURL,email,displayName}));  
        }
    }       

    


export const startLoginWithEmailPassword = ({email, password}) => {
    //todo: revisar esta parte
    return async (dispatch) => {
        dispatch(chekingCredentials());
                                                      
        const  result = await loginWithEmailPassword({email, password});
        console.log(result); 
        if(!result.ok){
              return dispatch(logout( result));      
          }
         dispatch(login(result));  
    }
}   

export const startLogout = () => {
    return async (dispatch) => {
       
        await logoutFirebase();
        dispatch(logout()); 
    }
}   
