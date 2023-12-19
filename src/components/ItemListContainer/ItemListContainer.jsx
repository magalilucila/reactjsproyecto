import { useState, useEffect } from 'react'
import { pedirDatos } from '../../utils/utils';
import ItemList from '../itemlist/ItemList';
import { useParams } from 'react-router-dom';
/* const ItemlistContainer = () => {
    return (
        <section>
        <div>
            <h2 className='bg-rose-300 text-center text-3xl text-white'>Productos</h2>
            <ul className="flex flex-col items-center md:flex-row md:justify-evenly flex-wrap">
                <ItemList> Producto 1</ItemList>
                <ItemList> Producto 2 </ItemList>
                <ItemList> Producto 3 </ItemList>
                <ItemList> Producto 4 </ItemList>
                <ItemList> Producto 5 </ItemList>
                <ItemList> Producto 6 </ItemList>
                </ul>
        </div>
        </section>
    )
} 

export default ItemListContainer


*/
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

const {categoryId} = useParams()


    useEffect(() => {
        pedirDatos().then((data) => {
            const items = categoryId ? data.filter(prod => prod.category === categoryId)
            : data;
        setProductos(items);
    });
    }, [categoryId]);

    return (
        <>
        <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer;

