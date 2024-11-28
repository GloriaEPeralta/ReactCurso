import { CounterApp } from "../CounterApp";
import { render,screen,fireEvent } from '@testing-library/react';


describe('Pruebas en <CounterApp />', () =>
{
    const valor=20;
    test('Debe hacer match con el snapshot', () =>  
    {
        
        const {container} = render(<CounterApp value={valor} />);   
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () =>  
    {
        render(<CounterApp value={valor} />);
        expect(screen.getByText(valor)).toBeTruthy();
    
    });  
    test('Debe incrementar con el botón +1', () =>  
    {
        render(<CounterApp value={valor} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(valor+1)).toBeTruthy();

       
        
    }); 

    test('Debe decremenat con el botón -1', () =>  
    {
        render(<CounterApp value={valor} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(valor-1)).toBeTruthy();
               
    }); 
    test('Debe resetear el valor por defecto', () =>  
    {
        render(<CounterApp value={valor} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        // se le puede buscar por Role y Name (que se pone en el botón)
        fireEvent.click(screen.getByRole('button',{name:'Reset'}));

        expect(screen.getByText(valor)).toBeTruthy();

               
    });


});