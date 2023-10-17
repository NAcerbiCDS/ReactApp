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
        console.log(products);
        const getProduct = new Promise((resolve, reject) => {
            resolve(producto);
            // reject("error");
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
        console.log('este es el producto que se agrega', obj);
    };

    return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;