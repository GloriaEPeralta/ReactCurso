
const inicialState = [{
    id: 1,
    todo: 'adelgazar',
    done: false,

}]; 

const todoReducer = (state = inicialState, action={}) => {
    if (action?.type === '[TODO] add todo') {
         return [...state, action.payload];
    }

    return state;
}   

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'hacer ejercicio',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};  


todos=todoReducer(todos, addTodoAction);



console.log({state:todos}); // [{id: 1, todo: 'adelgazar', done: false}]    
