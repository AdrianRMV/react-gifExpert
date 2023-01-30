import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en useFetchGifs', () => {
    test('debe regresar el estado inicial', () => {

        // Esta es la manera de llamar a un Hook, con este renderHook ocupas pasarle el hook como una funcion, como se ve enseguida, le pasamos una categoria al customHook porque se requiere para su funcionamiento
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        // Del resultado de lo anterior desestructuramos las dos variables que ocupamos, para ver lo que nos retorno podemos checarlo con console.log(result);
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });


    test('debe de retornar un arreglo de imagenes y el isLoading en False', async() => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));

        // waitFor es uan funcion que recibe como parametro otra funcion, es decir, un callback, para esto ocupamos hacer nuestra funcion padre en este caso "test" async / await, para poder esperar a que el arreglo de imagenes sea mayor a 0.
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });


});
