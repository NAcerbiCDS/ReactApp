import * as React from 'react';
import CartWidget from "../../common/cartWidget/CartWidget";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h2 className="title">Mate<span className={"bluePrimary"}>sur</span></h2>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={()=>{alert("Ingreso a la seccion de mates")}}>Mates</Button>
        <Button variant="outlined" onClick={()=>{alert("Ingreso a la seccion de bombillas")}}>Bombillas</Button>
        <Button variant="outlined" onClick={()=>{alert("Ingreso a la seccion de yerba")}}>Yerba</Button>
        <Button variant="outlined" onClick={()=>{alert("Ingreso a la seccion de accesorios")}}>Accesorios</Button>
        <Button variant="outlined" onClick={()=>{alert("Ingreso a la seccion de nosotros")}}>Sobre nosotros</Button>
      </Stack>
      <CartWidget />
    </div>
    
  );
};