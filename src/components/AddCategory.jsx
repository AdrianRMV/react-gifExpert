import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSumbit = (event) => {
        event.preventDefault();
        const cleanInputValue = inputValue.trim();

        // Si el input esta vacio o no tiene mas de una letra no se envia NADA
        if (cleanInputValue.length <= 1) return;

        onNewCategory(cleanInputValue);
        setInputValue(''); // * Limpia el input al terminar de agregarse
    };

    return (
        <form onSubmit={onSumbit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired, // func quiere decir que el valor de este sera una funcion y sera REQUERIDA si o si para el funcionamiento de este componente
};
