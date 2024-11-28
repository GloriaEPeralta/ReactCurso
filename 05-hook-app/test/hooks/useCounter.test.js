import { act,renderHook } from '@testing-library/react';
 

import { useCounter } from '../../src/hooks/useCounter';    


describe('Pruebas en el useCounter', () => { 
    
    test('Debe retornar los valores por defecto', () => { 

        const { result  } = renderHook (() => useCounter());  
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(decrement).toEqual(expect.any(Function));    
        // puede ser de las dos formas
        expect(typeof decrement).toBe('function');  
        expect(typeof reset).toBe('function');

    }); 

    test('Debe retornar el counter en 100', () => { 

        const { result  } = renderHook (() => useCounter(100));  
        const { counter } = result.current;

        expect(counter).toBe(100);


    });
    test('Debe incrementar el counter en 1', () => {
        const { result  } = renderHook (() => useCounter(100));  
        const { increment } = result.current;
        act(() => {
            increment();
        }); 
        
        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('Debe realizar el reset del counter', () => {
        const { result  } = renderHook (() => useCounter(100));  
        const { increment, reset } = result.current;
        act(() => {
            increment();
            reset();
        }); 
        
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

});