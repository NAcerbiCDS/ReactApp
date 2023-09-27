import * as React from 'react';
import Button from '@mui/material/Button';

const CounterPresentacional = ( {sumar, contador, restar } ) => {

  return (
    <div className='contenedorCentral'>
      <Button onClick={sumar} variant="contained" color="success">sumar</Button>
      <h4> {contador} </h4>
      <Button onClick={restar} variant="outlined" color="error">restar</Button>
    </div>
  );
};

export default CounterPresentacional;