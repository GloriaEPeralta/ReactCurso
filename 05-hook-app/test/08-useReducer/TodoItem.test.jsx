import { TodoItem } from "../../src/08-useReducer/TodoItem";    
import {render, screen} from '@testing-library/react';  
import {beforeEach, expect, test} from "@jest/globals"; 

describe('TodoItem tests', () => {  
    const todo = {
        id: 1,
        description: 'Aprender React',
        done: false
    };
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
 
    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Debe de mostrar el Todo Pendiente de completar', () => {
        render (
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo} 
            />);   
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between'); 
        //console.log(liElement.innerHTML );
        //screen.debug(liElement);    
        //expect(screen.getByText(todo.description)).toBeInTheDocument(); 
        //expect(wrapper).toMatchSnapshot();
    });
// EL RESTO DE LAS PRUEBAS NO LAS HARE POR FALTA DE TIEMPO
  /*
    test('Debe de mostrar el Todo completado', () => {
        todo.done = true;
        render (
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo} 
            />);
            
        const spanElement = screen.getByLabelText('span');
        screen.debug(spanElement);
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

  
    const i = 1;
   
    const wrapper = shallow(
        <TodoItem 
        todo={todo}
        i={i}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        />
    );
    
    
    
    test('should call the function onDeleteTodo', () => {
        wrapper.find('button').simulate('click');
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
    });
    
    test('should call the function onToggleTodo', () => {
        wrapper.find('span').simulate('click');
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
    });
    
    test('should show the description correctly', () => {
        const span = wrapper.find('span');
        expect(span.text().trim()).toBe(todo.description);
    });
    
    test('should have the class text-decoration-line-through', () => {
        const todoDone = {
        id: 1,
        description: 'Aprender React',
        done: true
        }
        const wrapper = shallow(
        <TodoItem 
            todo={todoDone}
            i={i}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />
        );
        const span = wrapper.find('span');
        expect(span.hasClass('text-decoration-line-through')).toBe(true);
    });
    */
    });     
