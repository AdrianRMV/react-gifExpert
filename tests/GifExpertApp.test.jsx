import {render, screen} from '@testing-library/react'
import {GifExpertApp} from '../src/GifExpertApp'
describe('Pruebas en GifExpertApp', () => {
    test('debe retornar el estado inicial', () => {
        render(<GifExpertApp />);

        expect(screen.getByText('One punch'));
        screen.debug();
    });
});
