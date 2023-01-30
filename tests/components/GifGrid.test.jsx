import { render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('Pruebas en GifGrid', () => {
    const category = 'One punch';
    test('debe de mostrar el Loading inicialmente', () => {
        render(<GifGrid category={category} />);
    });
});
