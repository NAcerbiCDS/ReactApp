import { useEffect, useState } from 'react';
import { products } from '../../../productsMock';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState({});

    let { id } = useParams();
    id = parseInt(id);

    useEffect(() => {
        let producto = products.find((product) => product.id === +id);

        const getProduct = new Promise((resolve, reject) => {
            if (producto) {
                resolve(producto);
            } else {
                reject('Producto no encontrado');
            }
        });

        getProduct
            .then((res) => setProductSelected(res))
            .catch((err) => console.log(err));
    }, [id]);

    const onAdd = (cantidad) => {
        let obj = {
            ...productSelected,
            quantity: cantidad,
        };
        console.log('Este es el producto que se agrega al carrito', obj);
        // Llamar a una función para agregar el producto al carrito, por ejemplo.
    };

    return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
