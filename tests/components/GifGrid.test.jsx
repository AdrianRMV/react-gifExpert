import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'One punch';
    test('debe de mostrar el Loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargan las imagenes', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'htttps:google.com',
            },
            {
                id: 'abc2',
                title: 'goku',
                url: 'htttps:fb.com',
            },
            {
                id: 'abc3',
                title: 'lol',
                url: 'htttps:we.com',
            },
        ];

        // Damos informacion estatica para simular la accion de carga que tiene la funcion, asi comprobamos que si llega info si la mostrara de manera correcta
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />);

        // Espera que encuentre 3 etiquetas img, por que le estamos dando 3 gifs y evalua que existan esas etiquetas en el HTML generado
        expect(screen.getAllByRole('img').length).toBe(3);

    });
});
