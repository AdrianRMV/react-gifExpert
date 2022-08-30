import { useState } from 'React';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSumbit = (event) => {
        event.preventDefault();
        const cleanInputValue = inputValue.trim();
        if ( cleanInputValue.length <= 1 ) return; // ! Si el input esta vacio o no tiene mas de una letra no se envia NADA

        /**
        ** A los "set" se le puede pasar un callback como parametro
        ** En este caso lo que hace es mandar como retorno un arreglo, con lo que estaba en el input
        ** Y las demas categorias despues.
        **/
       
        // setCategories( categories => [ inputValue, ...categories] );
        onNewCategory( cleanInputValue );
        setInputValue(''); // * Limpia el input al terminar de agregarse
    }

    return(
        <form onSubmit={ onSumbit }>
            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue} 
                onChange={ onInputChange } 
            />
        </form>
    );
};
