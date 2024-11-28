import { render,screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"; 
import { useFetch } from "../../src/hooks/useFetch";

//'../../src/hooks/useCounter';

//jest.mock('../../src/hooks/useFetch'); // se hace un mock de useFetch   

describe('Pruebas en MultipleCustomHooks', () => {

    test('debe mostrarse el componente por defecto', () => {
        // en etse useFetch se hace un mock de useFetch por primera vez
        // para que devuelva un objeto inicializado con null, null, true
        
        /*useFetch.mockReturnValue({
            data: null,
            hasError: null,
            isloading: true,
        }); */ 
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando....'));    
      //  
        
      // NO PONDRÉ LO DEL BOTON POR QUE LO TENGO DIFERENTE
      /*
       // const nextButton = screen.getByRole('button',{name: 'Siguiente'}); 
      //  console.log(nextButton);  
        //expect(nextButton.disabled).toBeTruthy(); 
       // screen.debug(); 

      */
    });

   /* test('debe mostrar un Quote',  () => {

        useFetch.mockReturnValue({
            data:[{name:'autor',id:'quote'}],
            hasError: null,
            isloading: false,
        }); 

        render(<MultipleCustomHooks />);
        screen.debug(); 
        expect(screen.getByText('autor')).toBeTruthy(); 
       // expect(screen.getByText('id')).toBeTruthy(); 

      
    });     */
    // NO LAS HARÉ POR QUE NO TENGO EL MISMO COMPONENTE
    // ME MARCA ERROR LECCION 171

});