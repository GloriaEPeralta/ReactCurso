import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

    const {counter,increment,decrement,reset} = useCounter(); 

    const handleButtonIncrement = () => {
        increment();
    }
    const handleButtonDecrement = () => {
        decrement();
    }
    const handleButtonReset = () => {
        reset();
    }

  return (
    <>
        <h1>Counter with custom Hook: {counter}</h1>
        <hr />  
        <button className="btn btn-primary" onClick={handleButtonIncrement}>+1</button> 
        <button className="btn btn-primary" onClick={handleButtonReset}>Reset</button> 
        <button className="btn btn-primary" onClick={handleButtonDecrement}>-1</button> 

    </>
  )
}

// para mandar el argumento a la función increment
// <button className="btn btn-primary" onClick={() => handleButtonIncrement(2)}>+1</button> 
// hay que modificar el llamado de la función en el componente
// de esta manera: NO se manda el evento, sino el argumento