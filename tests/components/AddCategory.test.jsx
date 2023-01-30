import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {
    test('debe cambiar el valor de mi caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');

        // Ejecuta el evento del input simulado que escribio el valor dado, en este caso 'Saitama'
        fireEvent.input(input, { target: { value: 'Saitama' } });

        // Teniendo ya la referencia al input podemos preguntar sobre su value, y este compararlo con el que ya le dimos anterio rmente
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const inputValue = 'Saitama';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');

        // Espera que la funcion haya sido llamada almenos una vez en el componente
        expect(onNewCategory).toHaveBeenCalled();

        // expect(onNewCategory).toHaveBeenCalledTimes(1); Que se llame SOLO UNA VEZ

        // Evalua que la funcion haya sido llamada con el valor de la caja del texto, o sea el input value, como funciona realmente en el componente AddCategory
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled(); // Espera que no sea llamada la funcion por que el valor del input esta vacio y se retorna automaticamente sin usarse la funcion que estamos evaluando "onNewCategory"
    });
});
