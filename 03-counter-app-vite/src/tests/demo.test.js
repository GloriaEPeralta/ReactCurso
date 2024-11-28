
describe('Pruebas en el archivo demo.test.js', () => {
    
test('Esta prueba no debería fallar', () => {
//   const mensaje = 'Hola Mundo';
//   const mensaje2 = "Hola Mundo";
//   expect(mensaje).toBe(mensaje2);
    // if (0===0)
    // {
    //     throw new Error('No se puede dividir entre cero');
    // }

    //1. Inicialización

    const mensaje = 'Hola Mundo';
    //2. Estímulo

    const mensaje2 = mensaje.trim();
    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);

    });
});

