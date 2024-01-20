import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    
    const { itemId } = useParams()

    useEffect (() => {
        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((docSnapshot)=> {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem(doc)
            })
    }, []);

    return (
        <>
        <ItemDetail item={item} />
        </>
    );
};

export default ItemDetailContainer