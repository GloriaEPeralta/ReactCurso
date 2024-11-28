import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';
import { useMemo, useState } from 'react';

const heavyStuff = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Ahí vamos...');
    }
    return `${iterations} iteraciones realizadas`;
}    
export const MemoHook = () => {
    const {counter, increment} =useCounter(4000);
    const  [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
    // es para tareas pesadas que no queremos que se vuelvan a ejecutar
    // si no cambia la dependencia, en este caso el counter
    // ya que si cambia el counter, se vuelve a ejecutar la función heavyStuff

    

  return (
    <>
        <h1>Counter: <small> { counter } </small></h1>
        <hr />
        <h4>{ memorizedValue}</h4>
        <button
            className="btn btn-primary"
            onClick={()=> increment()}
        >
            +1
        </button>
        <button
            className="btn btn-outline-primary ml-3"
            onClick={()=> setShow(!show)} // Toggle show  state
        >
            Show/Hide {JSON.stringify(show)}
        </  button>
    </>
  )
}
