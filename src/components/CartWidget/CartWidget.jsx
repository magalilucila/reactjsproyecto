import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () =>{
    const {itemsInCart} = useContext(CartContext)

    return (
        <Link to="/cart" className="flex items-center gap-1  text-white hover:text-sky-600">
            <IoCartOutline className="w-8 h-8 md:w-10 md:h-10"/>
            <span> {itemsInCart()} </span>
        </Link>
    )
}

export default CartWidget