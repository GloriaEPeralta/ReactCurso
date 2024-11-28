import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { getRoutes } from './Routes'  

//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHooks } from './06-memos/CallbackHooks'
//import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
//import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import './08-useReducer/intro-reducer.js'  
//import { TodoApp } from './08-useReducer/TodoApp.jsx'
//import { MainApp } from './09-useContext/MainApp'

const router=getRoutes();

createRoot(document.getElementById('root')).render(
 <>
  {/* //<StrictMode> */}
    <RouterProvider router={router}       />
 {/* // </StrictMode> */}

 </>
)
