import { TodoList } from './TodoList'; 
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';





export const TodoApp = () => {

  // hacer un custom hook llamado useTodo 
  // exponer los todos 
  // todos, handleAddTodo, handleDeleteTodo, handleToggleTodo
  // ese custom hook debe de poder recibir un arreglo de todos
  // y retornar un objeto con las funciones necesarias para
  // manipular el estado de los todos
  // se debe tener el initialState en el custom hook
  // la función de inicialización tambien debe estar ahí
  // esto debe regresar:
  // const { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo } = useTodo( );  
  // debe grabar en el localStorage, debe estar el useReducer y el init
  // debe de poder recibir un arreglo de todos y cargarlo en el localStorage
  
   
  const {todos,todosLength,todosPending, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo(); 

  


  //console.log(todos);  
 
  return (
    <>
        <h1>TodoApp: { todosLength}, <small> pendientes: {todosPending}     
         </small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} 
                  onDeleteTodo={handleDeleteTodo} 
                  onToggleTodo={handleToggleTodo}
                />
            </div>
            <div className="col-5">
               
              <h4>Agregar TODO</h4>
              <hr />
                <TodoAdd 
                  onNewTodo={handleNewTodo}/>
              
              {/* fin de TodoAdd */}  
            </div>  

        </div>
        
        
    
    </>
  )
}
