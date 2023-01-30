import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { PropTypes } from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3> {category} </h3>

            {
                isLoading && ( <h2>Cargando...</h2>) // Con el el operador logico AND "&&" podemos abreviar el hacer una condicion muy pequeña, si es true la variable se ejecutara el siguiente codigo, si no, no hace nada
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key = { image.id } 
                            // * Para mandar todo lo que tiene la imagen se usa de la sig forma:
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
