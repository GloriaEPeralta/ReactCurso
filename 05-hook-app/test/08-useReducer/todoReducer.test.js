import { todoReducer } from '../../src/08-useReducer/todoReducer';    

describe('Pruebas en todoReducer', () => { 
    const initialState = [{ 
        id: 1, 
        desc: 'Aprender React', 
        done: false 
    }]; 
    test('Debe regresar el estado inicial', () => 
        { 
            const newState = todoReducer(initialState, {}); 
            expect(newState).toEqual(initialState);    

        }); 
    test('Debe agregar un TODO', () => {    
        const newTodo = { 
            id: 2, 
            desc: 'Aprender Node', 
            done: false 
        };    
        const action = { 
            type: 'Add Todo', 
            payload: newTodo 
        };    
        const newState = todoReducer(initialState, action);    
        expect(newState.length).toBe(2);    
        expect(newState).toContain(newTodo);    
        //expect(newState).toEqual([...initialState, newTodo]); 
    }); 

    test('Debe borrar un TODO', () => { 
        const action = { 
            type: 'Delete Todo', 
            payload: 1 
        };    
        const newState = todoReducer(initialState, action);    
        expect(newState.length).toBe(0); 
    });     
    test('Debe hacer el toggle del TODO', () => { 
        const action = { 
            type: 'Toggle Todo', 
            payload: 1 
        };    
        const newState = todoReducer(initialState, action);    
        expect(newState[0].done).toBe(true); 
    });     
 });