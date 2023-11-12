import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Mario']);

    const onAddCategory = (newCategory) => {
        const arregloMinus = [];

        // * Agrega a otro arreglo todas las categorias existentes pero en minusculas
        categories.forEach((category) =>
            arregloMinus.push(category.toLowerCase())
        );

        if (arregloMinus.includes(newCategory.toLowerCase())) return; // Si la categoria ya existe que no lo agregue

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Buscador de Gifs</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}

            <footer>
                <h2 className="Footer-text">By: Adrian Ramirez</h2>
            </footer>
        </>
    );
};
