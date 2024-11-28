import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () => 
{ 
    test('Debe hacer Match con el snapshop', () => 
    {
      // const title='Hola soy un título';
      // const {container} = render(<FirstApp title={title}/>);
      // expect(container).toMatchSnapshot();
   
    });
    test('Debe mostrar el Titulo enviado por props', () => 
    {
      const title='Hola soy un título';
      const subtitle='Soy un subtítulo';
      const {container,getByText} = render(<FirstApp title={title}/>);
      //expect(getByText(title)).toBeInTheDocument();
      expect(getByText(title)).toBeTruthy();
    });
    test('Debe mostrar el subtitulo enviado por props', () => 
    {
      const title='Hola soy un título';
      const subtitle='Soy un subtítulo';
      const {container,getByText} = render(<FirstApp title={title} subtitle={subtitle}/>);
      expect(getByText(title)).toBeTruthy();
      const h2=container.querySelector('h2');
      //console.log(h2);
     

      expect(h2.innerHTML).toBe(title);
    }); 



});
