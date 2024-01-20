
import { useContext, useState } from "react";
import Boton from "../Boton/Boton"
import QuantitySelector from "../ItemDetailContainer/QuantitySelector";
import {Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const {addToCart, isInCart} = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }

        addToCart(itemToCart)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    
    return (
        <>
            <div>
                <Boton onClick={handleVolver}>Volver</Boton>
                <div key={item.id} className='bg-sky-200 px-4 p-5 m-auto mt-4  rounded-lg text-white w-72 flex flex-col  md:w-96'>
                    <h3 className="text-2xl text-sky-600 py-2 font-semibold">{item.name} </h3>
                <div>
                    <img src={item.img} alt= {item.name}/>
                </div>
                <div className='flex flex-wrap'>
                    <p className="text-sky-500 text-justify">{item.description} </p>
                    <p className="text-semibold text-xl text-sky-600"> Precio: ${item.price} </p>
                </div>
                
                {
                    isInCart(item.id)
                    ?<Boton> <Link to="/cart"> Ir al carrito </Link> </Boton>
                    :<>
                        <div className="flex flex-col items-center">
                            <QuantitySelector
                                cantidad={cantidad}
                                stock={item.stock}
                                setCantidad={setCantidad}
                            />
                            <Boton onClick={handleAgregar} disabled={item.stock === 0}>Añadir al carrito </Boton>
                        </div>
                    </>
                }  

                </div>
            </div> 
        </>
    )
};

export default ItemDetail;