import { getUser } from "../../base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    
    test('Debe de retornar un objeto', () => 
        { 
            const testUser = {
                uid: 'ABC123',
                username: 'El_Papi1502'
            };
            const user = getUser();   
            //console.log(user)
            expect(testUser).toStrictEqual(user);
            // se puede usar toEqual o toStrictEqual
        });

    test('getUsuarioActivo Debe de retornar un objeto', () => 
        { 
            const nombre = 'Katy';
            
            const user = getUsuarioActivo(nombre);  
            const {username} = user;
            //console.log(user)
            expect(username).toStrictEqual(nombre);
            // SE PUEDE PONER ASÍ
            // expect(user).toEqual({   
            //     uid: 'ABC567',   
            //     username: nombre 
            // });
            
        });
 });


