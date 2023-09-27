import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ItemList = ({ saludo }) => {
  return (
    <div className="container">
      <h1 className="center text">
        {saludo}
      </h1>
      <h2 className="center text">
        Estoy en la presentación
      </h2>
    </div>
  );
};

export default ItemList;