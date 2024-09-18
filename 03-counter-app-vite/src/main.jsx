import React from 'react';
import ReactDOM from 'react-dom';   
//import { HelloWordApp } from './HelloWordApp';
//import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';


   


    
   // ReactDOM.createRoot(<App />, document.getElementById('root'));

   ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>  
        <CounterApp  value={10}/>
    </React.StrictMode>
   
);    

