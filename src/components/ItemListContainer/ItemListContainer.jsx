import { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

const {categoryId} = useParams()


    useEffect(() => {
        const productosRef = collection(db, 'productos')
        const docsRef = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef;
        getDocs(docsRef)
        .then((querySnapshot) =>{
            const docs = querySnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
})
            console.log(docs)
            setProductos(docs)
    })
    }, [categoryId]);

    return (
        <>
        <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer;

