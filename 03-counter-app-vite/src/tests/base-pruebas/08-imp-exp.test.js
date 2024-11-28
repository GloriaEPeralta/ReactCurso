import { getHeroeById } from '../../base-pruebas/08-imp-exp';
import { getHeroesByOwner } from '../../base-pruebas/08-imp-exp';   


describe('Pruebas en 08-imp-exp.test.js', () =>
{
    test('getHeroeById debe retornar un héroe por id', () =>
    {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        //const heroeData = heroes.find(heroe => heroe.id === id);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });  
    });

    test('getHeroeById debe retornar undefined si no existe el id', () =>
        {
            const id = 100;
            const heroe = getHeroeById(id);
           // console.log(heroe);
    
            expect(heroe).toBeFalsy();  
        });
    // tarea probar  getHeroesByOwner
    test('Probando getHeroesByOwner', () =>
    {
        const owner='DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        expect(heroes).toEqual([ { id: 1, name: 'Batman', owner: 'DC' },
                                 { id: 3, name: 'Superman', owner: 'DC' },
                                 { id: 4, name: 'Flash', owner: 'DC' } ]);
                                   
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(expect.any(Array));
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
        const owner2='Marvel';
        const heroes2 = getHeroesByOwner(owner2);
        expect(heroes2.length).toBe(2);

    });

        

});


