import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe retornar "Hola Katy" ', () => 
       // { second }
         {
          const nombre = 'Katy'; 
          const saludo = getSaludo(nombre);

         // expect(saludo).toBe(´Hola ${nombre}´);
          expect(saludo).toBe('Hola '+nombre);  
              
        }
);

});