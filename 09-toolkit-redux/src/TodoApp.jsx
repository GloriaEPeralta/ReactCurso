import { useGetTodosQuery, useGetTodoQuery  } from './store/apis/todosApi'; // import the useGetTodosQuery hook from the todoApi file
import { useState } from 'react';  // Import the useState hook from the react package   

export const TodoApp = () => {
  //  const {data:todos=[],isLoading} = useGetTodosQuery(1); 
    const [todoId, setTodoId] = useState(1);  // Create a state variable to store the todoId
    const {data:todo,isLoading} = useGetTodoQuery(todoId);   // use the useGetTodosQuery hook to get the data and isLoading status
    const nextTodo = () => setTodoId(todoId + 1);  // Create a function to increment the todoId     
    const prevTodo = () => {
        if (todoId ===1) return;  // If the todoId is 1, return

        setTodoId(todoId - 1);  // Create a function to decrement the todoId 
        }

  return (
    <>
        <h1 className="text-center mt-5">Todos-RKT Query</h1>
        <hr />
        <h4 className="text-center">is loading: { isLoading ? 'True': 'False'}</h4>
        <pre>{JSON.stringify( todo )}</pre>

        <button className="btn btn-primary" onClick={prevTodo}>       
            Prev Todo
        </button>  
        <button className="btn btn-primary" onClick={nextTodo}> 
            Next Todo
        </button>   
{/*       
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <strong>
                        {todo.completed ? '✔' : '❌'}  
                    </strong>
                    {todo.title}
                </li>
            ))}     
        </ul>
         */}
       

    </>
  )
}
