import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import trashIcon from '../../assets/trash.svg'
import Boton from "../Boton/Boton"
import EmptyCart from "./EmptyCart"
import { Link } from "react-router-dom"

const CartView = () => {
    const {cart, totalCart, clearCart, removeItem} = useContext(CartContext)
    
    if (cart.length === 0) return <EmptyCart/>

    return (
        <section className="container m-auto mt-8 flex flex-col">
            <h2 className="text-4xl font-semibold">Resumen de tu compra:</h2>
            <ul>
                {
                    cart.map ((item) => (
                        <li key={item.id} className="flex gap-3 border-b my-4">
                            <img src={item.img} alt="Cart img" className="w-32" />
                            <div>
                                <h3 className="text-2xl">{item.name} </h3>
                                <p> ${item.price} c/u </p>
                                <p> Cantidad: {item.cantidad} </p>
                                {item.stock <= 10 && <p className="font-bold text-blue-950">Quedan sólo {item.stock} unidades! </p>}
                                <Boton onClick={() => removeItem(item.id)}>
                                    <img src={trashIcon} className="w-6" alt="trash icon" />
                                </Boton>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <h4 className="text-3xl font-semibold text-end px-4">Total: $ {totalCart()}</h4>
            <div className="flex flex-nowrap gap-4 justify-evenly">
                <Boton onClick={clearCart}>Vaciar carrito</Boton>
                <Boton><Link to="/"> Continuar comprando</Link></Boton>
                <Boton><Link to="/checkout">Finalizar compra</Link></Boton>
            </div>

        </section>
    )}



export default CartView