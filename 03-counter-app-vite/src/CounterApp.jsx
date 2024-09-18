import Proptypes from 'prop-types';
import { useState } from 'react';    

export const CounterApp = ({value}) => {
   /* function handleAdd(event) {
        console.log('handleAdd');
    }   */
    const [counter, setCounter] = useState(value);

    const handleAdd = (event) => {  
        //console.log(event);
        setCounter(counter + 1);
        //setCounter((c) => c + 1); // Otra forma de hacerlo
    }   
    const handleSubs = () => {  
        //console.log(event);
        setCounter(counter - 1);
        
    } 
    const handleReset = () => {  
        //console.log(event);
        setCounter(value);
        
    }   
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubs}> -1 </button>   
            <button onClick={handleReset}> Reset </button>  
        </>
    )
}

CounterApp.propTypes = {
    value: Proptypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 0
}   
