import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {
    // Para usar una funcion asyncrona tenemos que tambien indicarselo al la funcion de test para esperar la respuesta (como en cualquier funcion que se emplee lo asyncrono)
    test('debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One punch');

        expect(gifs.length).toBeGreaterThan(0);
        // Ubica la posicion 0 del arrelgo para preguntar que tenga la misma estructura (en este caso un objeto) y en sus propiedades como no sabemos que es lo que retorna como tal solo se esperan que sea cualquier tipo de String
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
