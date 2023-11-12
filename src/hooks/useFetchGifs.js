// ! CUSTOM HOOK

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs.js';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);
    };

    useEffect(() => {
        getImages();
    }, []); // Si las llaves quedan vacias significa que solo se ejecutara la primera vez que se ejecute el componente

    return {
        images, // * Manera base de hacerlo es -> images: images , pero cuando tienen el mismo nombre se puede simplificar
        isLoading, // * Igual con esta variable
    };
};
