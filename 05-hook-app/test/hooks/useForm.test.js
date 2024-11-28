import { renderHook, act } from  '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';  


describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }
    test('Debe regresar información por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            formState: initialForm,
            name: 'Fernando',
            email: 'fernando@google.com',
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });  

        
    });

    test('Debe cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });
        const { formState } = result.current;
        expect(formState).toEqual({ ...initialForm, name: 'Melissa' });
    });     

    test('Debe de realizar el reset del formulario', () => {
        const newValue ='Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange,onResetForm } = result.current;
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
            onResetForm();
            
        });
        const { formState } = result.current;
        expect(formState.name).toEqual(initialForm.name);    
    }); 


})
