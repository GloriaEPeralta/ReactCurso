import { render,screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe('Pruebas en <FirstApp />', () => 
{ 
  const title='Soy un titulo';    
  test('La primera prueba deber hacer match con el snapshot', () => 
  {  
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();    
  });

  test('Debe mostrar el mensaje "Soy un Titulo"', () => 
    {  
       render(<FirstApp title={title} />);
      // expect(screen.getByText(title)).toBeTruthy();  
      //screen.debug();
      expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(title); 
    });

    // hizo sobre subtitulo pero ya ES MUCHO!! NO LO HICE
});
