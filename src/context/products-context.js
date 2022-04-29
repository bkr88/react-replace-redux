import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFavorite: (id) => {},
});

export default (props) => {
  const [products, setProducts] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setProducts((currentState) => {
      const prodIndex = currentState.findIndex((p) => p.id === id);
      const newFavStatus = !currentState[prodIndex].isFavorite;
      const updatedProducts = [...currentState];
      updatedProducts[prodIndex] = {
        ...currentState[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{ products, toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
